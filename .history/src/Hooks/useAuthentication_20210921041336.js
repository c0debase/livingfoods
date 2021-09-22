import { useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {set, update, getDatabase, ref, get, query, onValue} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCwOjGfREUYAvBS0igtPnmmwZwfNcEWtk4",
  authDomain: "eatlivecells.firebaseapp.com",
  projectId: "eatlivecells",
  storageBucket: "eatlivecells.appspot.com",
  messagingSenderId: "227241896853",
  appId: "1:227241896853:web:d240007b5b27fa6246249c",
  measurementId: "G-ZGMZS0DZRD",
  databaseURL: "https://eatlivecells-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const db = getDatabase(app) // <-- Pass in the initialized app

//Creating the reference (The path in db you are trying to read/write/update)
const dbRef = ref("/eatlivecells")


const auth = getAuth();
const provider = new GoogleAuthProvider();




export function useAuthentication() {

  const [authenticated, setAuthenticated] = useState('loading');

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      console.log(user);
      if (user) {
        setAuthenticated(user);
      } else {
        setAuthenticated();
      }
    }, function (error) {
      console.log(error);
    });

  }, []);

  function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }
  
  function logout() {
    auth.signOut()
    .then(() => {

    })
    .catch(() => {

    })

  }

  return { login, loggedIn: authenticated, logout }
}


