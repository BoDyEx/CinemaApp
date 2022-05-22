import React,{useState,useEffect} from 'react';

import { auth ,db} from "../Config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider,
} from "firebase/auth";
import { collection, query, where, getDocs ,addDoc} from "firebase/firestore";
// Listen for authentication state to change.


onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

async function register(email, password) {
  await createUserWithEmailAndPassword(auth,email,password)
            .then((re)=>{
                console.log(re.user.email)
                addDoc(collection(db,"users"),{
                    id:auth.currentUser.uid,
                    email:email,
                    password:password,
                    role:"User"
                }).then(() =>{
                    console.log("data added");
                }).catch((err) => {
                    console.log(err);
                })
            })

            .catch(error => alert(error.message))

}



export { register };
