// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "clickyio.firebaseapp.com",
  projectId: "clickyio",
  storageBucket: "clickyio.firebasestorage.app",
  messagingSenderId: "148562574486",
  appId: "1:148562574486:web:4b494ac7629fa6a7d7d6b7",
  measurementId: "G-P4TZTK7EE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);