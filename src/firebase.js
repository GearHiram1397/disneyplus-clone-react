import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {GoogleAuthProvider} from "firebase/auth";

/* Initializing the firebase app. */
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAtkKacRXiq4vWTdmq2F-u5Ku4i1Z0He9c",
  authDomain: "disney-plus-clone-2e825.firebaseapp.com",
  projectId: "disney-plus-clone-2e825",
  storageBucket: "disney-plus-clone-2e825.appspot.com",
  messagingSenderId: "1080830011493",
  appId: "1:1080830011493:web:bac1a06c3d73fbec7c7e8c",
  measurementId: "G-8NCZL5EHRN"
});

/* Creating a new instance of the firestore database and a new instance of the GoogleAuthProvider. */
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

/* Exporting the db and provider variables so that they can be used in other files. */
export { db, provider }
