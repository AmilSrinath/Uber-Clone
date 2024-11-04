// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjcmQXDEl70FZhAbLvDOgbXAoulxYrZCs",
    authDomain: "uber-clone-7b079.firebaseapp.com",
    projectId: "uber-clone-7b079",
    storageBucket: "uber-clone-7b079.firebasestorage.app",
    messagingSenderId: "233840716514",
    appId: "1:233840716514:web:c18eeb724582ba7c234cbb",
    measurementId: "G-KKC4ZL7JWX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
