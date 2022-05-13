import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCtO42yaL1DvSJWNZ_30eN6hWFXaerD1UE",
    authDomain: "cs303-500c5.firebaseapp.com",
    databaseURL: "https://cs303-500c5-default-rtdb.firebaseio.com",
    projectId: "cs303-500c5",
    storageBucket: "cs303-500c5.appspot.com",
    messagingSenderId: "4068748101",
    appId: "1:4068748101:web:22a559a4b8886a8719ec2c",
    measurementId: "G-PR5WRDWXR5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app,db,auth};