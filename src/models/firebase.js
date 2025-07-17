// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeSYFuKLbOIy-INK5pxllmXAIckBIaBdk",
  authDomain: "api-rest-node-285c0.firebaseapp.com",
  projectId: "api-rest-node-285c0",
  storageBucket: "api-rest-node-285c0.firebasestorage.app",
  messagingSenderId: "807286286357",
  appId: "1:807286286357:web:4730569d9c0d58b8aa461c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };