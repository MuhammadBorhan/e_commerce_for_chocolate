import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8uPtOS0f8ik1k7_9U1iFGeMHmS4KnC_U",
  authDomain: "chocolate-ecommerce-a6ff1.firebaseapp.com",
  projectId: "chocolate-ecommerce-a6ff1",
  storageBucket: "chocolate-ecommerce-a6ff1.appspot.com",
  messagingSenderId: "854139274506",
  appId: "1:854139274506:web:f6aec255d9def4df0e66f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
