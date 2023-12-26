import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAp8jh-nZSPVJr1pQgb8i1tazoiTZ0AAEI",
    authDomain: "react-rustam-portfolio.firebaseapp.com",
    projectId: "react-rustam-portfolio",
    storageBucket: "react-rustam-portfolio.appspot.com",
    messagingSenderId: "903863508991",
    appId: "1:903863508991:web:4f54f08c208d838e2991ca"
};

export const app = initializeApp(firebaseConfig);


export const db = getFirestore()