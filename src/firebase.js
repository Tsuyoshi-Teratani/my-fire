// src/firbase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA3iMUEyGpvw3SqKDoDwooO4rzo4BPTs14",
    authDomain: "myfire-b072f.firebaseapp.com",
    projectId: "myfire-b072f",
    storageBucket: "myfire-b072f.firebasestorage.app",
    messagingSenderId: "335557372801",
    appId: "1:335557372801:web:dafce2285ef1cd6de21680",
    measurementId: "G-6TDJ8Y8F61"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);