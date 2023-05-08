// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMBImwMukQhZGw0NGKSZpdVYXBAEQJWgA",
  authDomain: "chocolate-indulge.firebaseapp.com",
  projectId: "chocolate-indulge",
  storageBucket: "chocolate-indulge.appspot.com",
  messagingSenderId: "786652966379",
  appId: "1:786652966379:web:3763cde7253557c526fdae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
