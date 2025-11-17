// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCOzWqIVSnTCtgk25qt-cibCpMw-VpM_w",
  authDomain: "mico-portfolio.firebaseapp.com",
  projectId: "mico-portfolio",
  storageBucket: "mico-portfolio.firebasestorage.app",
  messagingSenderId: "510632283384",
  appId: "1:510632283384:web:fdf846f4e7cd4f407b3f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
