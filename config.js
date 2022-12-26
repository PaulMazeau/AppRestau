// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfomnvP5tqa2iLnEyfFbTGDB-S2pGXjfU",
  authDomain: "restau-85b72.firebaseapp.com",
  projectId: "restau-85b72",
  storageBucket: "restau-85b72.appspot.com",
  messagingSenderId: "814392891366",
  appId: "1:814392891366:web:acebbf27b2751e1e4ea827",
  measurementId: "G-K5TSRTPYRN"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}


export {firebase};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
