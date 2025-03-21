// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZXchjEIlK8zPgCNcKF--fbSkAHgGdbOY",
  authDomain: "skillforge-be2f7.firebaseapp.com",
  projectId: "skillforge-be2f7",
  storageBucket: "skillforge-be2f7.firebasestorage.app",
  messagingSenderId: "389955536913",
  appId: "1:389955536913:web:f406f8483ebd03ee1d09b0",
  measurementId: "G-HE4V3E88FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);