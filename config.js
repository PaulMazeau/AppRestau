// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCfomnvP5tqa2iLnEyfFbTGDB-S2pGXjfU",
  authDomain: "restau-85b72.firebaseapp.com",
  projectId: "restau-85b72",
  storageBucket: "restau-85b72.appspot.com",
  messagingSenderId: "814392891366",
  appId: "1:814392891366:web:acebbf27b2751e1e4ea827",
  measurementId: "G-K5TSRTPYRN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
