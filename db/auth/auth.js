import { auth } from "../Config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider,
} from "firebase/auth";
// Listen for authentication state to change.
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

async function register(email, password) {
  await createUserWithEmailAndPassword(auth, email, password).then((re)=>{
    console.log(re.user.email)
    addDoc(collection(db,"users"),{
        id:auth.currentUser.uid,
        email:email,
        password:password,
        role:role
    }).then(() =>{
        console.log("data added");
    }).catch((err) => {
        console.log(err);
    })
})

.catch(error => alert(error.message));
}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export { register, login };
