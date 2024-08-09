// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2-tSRMDOpB9HZOcRbBs-mwpSymyuqpjg",
  authDomain: "blog-platform-95679.firebaseapp.com",
  projectId: "blog-platform-95679",
  storageBucket: "blog-platform-95679.appspot.com",
  messagingSenderId: "942212098547",
  appId: "1:942212098547:web:a916d38e796e6248b3ca86",
  measurementId: "G-TJJDKRL6DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();