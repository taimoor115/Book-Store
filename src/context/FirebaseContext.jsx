import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU37T2w8K1EZPNuovzgWzLLk4MZB_KCcg",

  authDomain: "book-store-1306c.firebaseapp.com",

  projectId: "book-store-1306c",

  storageBucket: "book-store-1306c.appspot.com",

  messagingSenderId: "496683351398",

  appId: "1:496683351398:web:389ff70d032bf8e8bc1ca7",
};

const firebaseApp = initializeApp(firebaseConfig);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  const signUpWithEmailPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  console.log(user);

  const handleCreateNewListing = async (name, isbn, price, cover) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);
    return await addDoc(collection(firestore, "books"), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  const listAllBooks = () => {
    return getDocs(collection(firestore, "books"));
  };

  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };
  const getBookById = async (id) => {
    const docRef = doc(firestore, "books", id);
    const result = await getDoc(docRef, id);
    return result;
  };

  const placeOrder = (bookId, quantity) => {
    const collectionRef = collection(firestore, "books", bookId, "order");
    addDoc(collectionRef, {
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      quantity: Number(quantity),
    });
  };
  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signUpWithEmailPassword,
        signInUser,
        signInWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
        listAllBooks,
        getImageURL,
        getBookById,
        placeOrder,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
