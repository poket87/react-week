// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3i2JpjwU7B4I3AKeFv5ks9Z9RUtIb310",
  authDomain: "hanghae99-react-basic-781c0.firebaseapp.com",
  projectId: "hanghae99-react-basic-781c0",
  storageBucket: "hanghae99-react-basic-781c0.appspot.com",
  messagingSenderId: "204304990272",
  appId: "1:204304990272:web:d97a1951fad56012c35fa5",
  measurementId: "G-DX1S9EFYFN",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
