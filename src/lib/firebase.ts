// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdkuVrsK6GyU1qdZ_Tt5fEpJZJC5BVL4k",
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