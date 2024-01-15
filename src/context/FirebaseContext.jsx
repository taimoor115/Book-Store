import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { ref, getStorage, uploadBytes } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl3WDN6ERMzQ1vyNY16arl2qRYu0NQdzo",
  authDomain: "bookift-acc8f.firebaseapp.com",
  projectId: "bookift-acc8f",
  storageBucket: "bookift-acc8f.appspot.com",
  messagingSenderId: "58341789854",
  appId: "1:58341789854:web:8c8621b4b6003f9f2f2b8f",
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

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signUpWithEmailPassword,
        signInUser,
        signInWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
