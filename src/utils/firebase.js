// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-2684b.firebaseapp.com",
  projectId: "netflix-2684b",
  storageBucket: "netflix-2684b.firebasestorage.app",
  messagingSenderId: "673708451926",
  appId: "1:673708451926:web:f69182216c541fb9fcb3f7",
  measurementId: "G-XZQMS3NKPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
