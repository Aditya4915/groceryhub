// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbGE6gD0ni5qB6LoePd9vHC0la5NEQRjw",
  authDomain: "grocery-hub-e6f88.firebaseapp.com",
  projectId: "grocery-hub-e6f88",
  storageBucket: "grocery-hub-e6f88.firebasestorage.app",
  messagingSenderId: "5528066232",
  appId: "1:5528066232:web:c8d55a8db87e14a3d87c4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);