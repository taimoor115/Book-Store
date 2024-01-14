import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
