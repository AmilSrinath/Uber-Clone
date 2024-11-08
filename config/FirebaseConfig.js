// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsAqF4Z-pLIcaQZN1f8K1n6T_dbjQ7XYI",
    authDomain: "uber-e9bfe.firebaseapp.com",
    projectId: "uber-e9bfe",
    storageBucket: "uber-e9bfe.firebasestorage.app",
    messagingSenderId: "632703733940",
    appId: "1:632703733940:web:cc467f2ddec08683aac7e1"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);