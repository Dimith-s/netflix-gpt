// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB93zSmzWh5A5uz8fqShUd_OlB7M-zCVqw",
  authDomain: "netfkixgpt-b733d.firebaseapp.com",
  projectId: "netfkixgpt-b733d",
  storageBucket: "netfkixgpt-b733d.appspot.com",
  messagingSenderId: "405031737068",
  appId: "1:405031737068:web:3c6472368dca0e7c04f7c9",
  measurementId: "G-6K7NNG508Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()