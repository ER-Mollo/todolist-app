// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_t5tSNRXlx1PXSPDI7OeAVtlohuGcOBY",
  authDomain: "todolist-app-fb2d0.firebaseapp.com",
  projectId: "todolist-app-fb2d0",
  storageBucket: "todolist-app-fb2d0.appspot.com",
  messagingSenderId: "985765029899",
  appId: "1:985765029899:web:743ac753ad9cac6dec3f0e",
  measurementId: "G-12J15DLMKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {db, auth,provider};



//  export const signInWithGoogle= () =>{
//   signInWithPopup(auth,provider)
//   .then ((result)=>{
//     console.log(result)

//   }).catch((error)=>{
//     console.log(error);
//   });
// };