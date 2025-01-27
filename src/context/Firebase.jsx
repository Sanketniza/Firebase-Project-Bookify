

import {createContext , useContext , useState , useEffect} from 'react'
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , 
    signInWithEmailAndPassword , 
    GoogleAuthProvider , signInWithPopup ,
    onAuthStateChanged 
} from 'firebase/auth';

import {getFirestore, collection , addDoc} from 'firebase/firestore'
import { getStorage , ref , uploadBytes } from 'firebase/storage';

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
 const firebaseAuth = getAuth(firebaseApp);
 const fireStore = getFirestore(firebaseApp);
 const storage = getStorage(firebaseApp);

 const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {

    const [user , setUser] = useState(null);


    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            console.log(user);
            if(user) setUser(user);
            else setUser(null);
        })
    },[])

    const signupWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signupUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signWithGoogle = () => {
        return signInWithPopup(firebaseAuth, googleProvider);
    };

    const handleCreateNewListing = async (name , ibm , price , cover) => {
        // cover 
        const imageRef = ref(storage, `uploaded/images/${Date.now}${cover.name}`);
        const uploadResult = await uploadBytes(imageRef, cover);

       const ok = await addDoc(collection(fireStore, "books"), {
            name ,
            ibm ,
            price ,
            cover : uploadResult.ref.fullPath,
            userId : user.uid ,
            userEmail : user.email , 
            userName : user.displayName ,
            userUrl :user.photoURL,
            createdAt : Date.now()
        });

        console.log(ok);
        return ok;
    };

    const isLoggedIn = user ? true : false;


    return (

        <FirebaseContext.Provider value={{ 

            signupWithEmailAndPassword  , 
            isLoggedIn , 
            signupUserWithEmailAndPassword , 
            signWithGoogle ,
            handleCreateNewListing ,

        }}>

            {props.children}

        </FirebaseContext.Provider>
    )
}