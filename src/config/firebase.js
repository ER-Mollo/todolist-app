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
  apiKey: "AIzaSyD9XE3gT2jFb5J0HAcD4oZi3S9oMrbbSxI",
  authDomain: "todo-list-app-c5e3c.firebaseapp.com",
  projectId: "todo-list-app-c5e3c",
  storageBucket: "todo-list-app-c5e3c.appspot.com",
  messagingSenderId: "21801481523",
  appId: "1:21801481523:web:7f7ba79734e71b1c593a46",
  measurementId: "G-W9LP6K6GDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {db, auth,provider};