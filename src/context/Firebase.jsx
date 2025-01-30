import {createContext , useContext , useState , useEffect} from 'react'
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , 
    signInWithEmailAndPassword , 
    GoogleAuthProvider , signInWithPopup ,
    onAuthStateChanged 
} from 'firebase/auth';

import {getFirestore, collection , addDoc , getDocs, doc, getDoc , where ,query } from 'firebase/firestore'
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
            if(user) setUser(user);
            else setUser(null);
        })
    },[]);

    const signupWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };
   
    const signupUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signWithGoogle = () => {
        return signInWithPopup(firebaseAuth, googleProvider);
    };

    const handleCreateNewListing = async (name , ibm , price ) => {
       const ok = await addDoc(collection(fireStore, "books"), {
            name ,
            ibm ,
            price ,
            userId : user.uid ,
            userEmail : user.email , 
            userName : user.displayName ,
            userUrl :user.photoURL,
            createdAt : Date.now()
        });
        return ok;
    };

    const listAllBooks = async () => {
       const books = await getDocs(collection(fireStore, "books"));
       return books;
    }

    const getBooksById = async (bookId) => {
        const docRef = doc(fireStore, "books", bookId);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? docSnap.data() : null;
    }

    const placeOrder = async (bookId ,qyt) => {
        const docRef = collection(fireStore, "books", bookId , "order");
        const order = await addDoc(docRef, {
            userId : user.uid ,
            userEmail : user.email , 
            userName : user.displayName ,
            userUrl :user.photoURL,
            qyt ,
            createdAt : Date.now()
        });
        return order;
    }

    const fetchMyOrder = async () => {
        const collectionRef = collection(fireStore, "books");
        const q = query(collectionRef , where("userId" , "==" , user.uid ));
        const querySnapshot = await getDocs(q);

        // console.log(querySnapshot);

        return querySnapshot;
    }

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{ 
            signupWithEmailAndPassword  , 
            isLoggedIn , 
            signupUserWithEmailAndPassword , 
            signWithGoogle ,
            handleCreateNewListing ,
            getBooksById ,
            placeOrder,
            listAllBooks,
            fetchMyOrder,
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}