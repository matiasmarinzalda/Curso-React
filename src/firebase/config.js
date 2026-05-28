// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiMNGcX1NaqsanmeKx0TEUkgtFCguhJhU",
  authDomain: "react-427c8.firebaseapp.com",
  projectId: "react-427c8",
  storageBucket: "react-427c8.firebasestorage.app",
  messagingSenderId: "260119662992",
  appId: "1:260119662992:web:e5470728e93e4c46072315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//para cuando veamos el login
export const auth = getAuth(app);