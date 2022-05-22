import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyCfHr1wdcnyPnkDW3QMVU93-jiZBCqk4KE",
    authDomain: "firbase-cinma.firebaseapp.com",
    projectId: "firbase-cinma",
    storageBucket: "firbase-cinma.appspot.com",
    messagingSenderId: "767511249888",
    appId: "1:767511249888:web:5b6afa76fba7dda9c5a185"
  };

 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app,db,auth};