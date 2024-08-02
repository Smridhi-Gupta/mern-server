// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCxEqXnqGJP_0V0BfWS_RalihuDaIfibc",
  authDomain: "mern-book-inventory-86296.firebaseapp.com",
  projectId: "mern-book-inventory-86296",
  storageBucket: "mern-book-inventory-86296.appspot.com",
  messagingSenderId: "749326476130",
  appId: "1:749326476130:web:63ba8cd8a962c9e093823b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;