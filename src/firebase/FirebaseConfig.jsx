// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBno5T7reTpD-pU81ymeGwIe3GRaXSQONc",
  authDomain: "blogsbyankit-ab3e1.firebaseapp.com",
  projectId: "blogsbyankit-ab3e1",
  storageBucket: "blogsbyankit-ab3e1.appspot.com",
  messagingSenderId: "474960633547",
  appId: "1:474960633547:web:8e7c6d20f988ed1065054e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };