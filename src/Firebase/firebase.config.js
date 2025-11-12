// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhlM69bvkIhVVjMaJQOwlXMFMw_hE1Dgw",
  authDomain: "car-rental-platform-fdfa3.firebaseapp.com",
  projectId: "car-rental-platform-fdfa3",
  storageBucket: "car-rental-platform-fdfa3.firebasestorage.app",
  messagingSenderId: "680478146693",
  appId: "1:680478146693:web:68d141bb7c3e52d08ba9ec"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);