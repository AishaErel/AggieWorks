// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvhnjPtg-fGBXw5RjP0YirM61cq2aGY-k",
  authDomain: "websiterecipeplanner.firebaseapp.com",
  projectId: "websiterecipeplanner",
  storageBucket: "websiterecipeplanner.appspot.com",
  messagingSenderId: "906071708856",
  appId: "1:906071708856:web:3304eed49d1c6fc280904d",
  measurementId: "G-60S5JQZ99Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
