// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuJYfamkJiY1yXZPNvWyC81dLaIV-D6DQ",
  authDomain: "lms-firebase-e0efe.firebaseapp.com",
  projectId: "lms-firebase-e0efe",
  storageBucket: "lms-firebase-e0efe.appspot.com",
  messagingSenderId: "734921091144",
  appId: "1:734921091144:web:c044aa7a641d26deb9d07d"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };