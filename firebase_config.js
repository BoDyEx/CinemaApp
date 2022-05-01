// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
//"^9.6.11"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXHu1ve04vj29_2knpEM3NlDnCBjhmK5M",
    authDomain: "project303-9e84c.firebaseapp.com",
    projectId: "project303-9e84c",
    storageBucket: "project303-9e84c.appspot.com",
    messagingSenderId: "448060179482",
    appId: "1:448060179482:web:ed3ba005891d651b89fda3",
    measurementId: "G-TMZ5V3XK7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {app,db,auth};