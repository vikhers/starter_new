
// Import the functions you need from the SDKs you need
import {getApp, getApps,  initializeApp } from "firebase/app"
import {collection, getFirestore } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHwSJ-HkV9oXgXO1yCWy31aGy1vVfxIcs",
  authDomain: "radaba-development.firebaseapp.com",
  databaseURL: "https://radaba-development-default-rtdb.firebaseio.com",
  projectId: "radaba-development",
  storageBucket: "radaba-development.appspot.com",
  messagingSenderId: "770042789632",
  appId: "1:770042789632:web:8f141f6bb7e569dbe9bde5",
  measurementId: "G-V0RNQGJJX4"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
// console.log(app)
// const analytics = getAnalytics(app);

export {db}