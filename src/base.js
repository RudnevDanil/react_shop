import firebase from "firebase";
import "firebase/firestore"
import {createContext} from 'react'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCPEXJl6UER7RWyvN11F88FUU5sZe8TQLY",
    authDomain: "react-shop-86cdf.firebaseapp.com",
    projectId: "react-shop-86cdf",
    storageBucket: "react-shop-86cdf.appspot.com",
    messagingSenderId: "124209991690",
    appId: "1:124209991690:web:617684eccbc64adcfd8ff3"
});

const firestore = firebase.firestore()

const Context = createContext(null)

export {Context, firestore, firebase}