
import {createContext , useContext} from 'react'
import { initializeApp } from "firebase/app";

 const FirebaseContext = createContext(null);



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDshCtzKTmUq0KpJKvsaOruwU_W80MMDaE",
  authDomain: "bookify-5d1f0.firebaseapp.com",
  projectId: "bookify-5d1f0",
  storageBucket: "bookify-5d1f0.firebasestorage.app",
  messagingSenderId: "672945238635",
  appId: "1:672945238635:web:f9b87d89b26609ff1a372e"
};



 export const useFirebase = () => useContext(FirebaseContext);

 const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseProvider = (props) => {
    return (
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}