import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAXHu1ve04vj29_2knpEM3NlDnCBjhmK5M",
    authDomain: "project303-9e84c.firebaseapp.com",
    projectId: "project303-9e84c",
    storageBucket: "project303-9e84c.appspot.com",
    messagingSenderId: "448060179482",
    appId: "1:448060179482:web:ed3ba005891d651b89fda3",
    measurementId: "G-TMZ5V3XK7D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app,db,auth};