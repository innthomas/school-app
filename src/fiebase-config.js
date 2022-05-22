// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOh1KamrZW7G03ugjD5XsnK-QmbaMUURM",
  authDomain: "school-app-firebase-a00da.firebaseapp.com",
  projectId: "school-app-firebase-a00da",
  storageBucket: "school-app-firebase-a00da.appspot.com",
  messagingSenderId: "29090204994",
  appId: "1:29090204994:web:755b553f930f30e7dc8cdb",
  measurementId: "G-7BH2J8VLD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

// export const signInWithGoogle = ()=>{signInWithPopup(auth,provider)

export const signInWithGoogle = ()=>{
  signInWithPopup(auth,provider).then((result)=>{
         console.log(result);
         const displayName = result.user.displayName;
         const displayEmail = result.user.email;
         const photoURL = result.user.photoURL;
         localStorage.setItem("displayName",displayName);
         localStorage.setItem("displayEmail",displayEmail);
         localStorage.setItem("photoURL",photoURL);
  }).catch((error)=>{console.log(error.message);})
}
