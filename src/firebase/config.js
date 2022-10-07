// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_APPID}`
};

/* const firebaseConfig = {
  apiKey: "AIzaSyAILbQNdiPOqlqs707YrTM8oxzPAqdgkn4",
  authDomain: "transporte-yue.firebaseapp.com",
  projectId: "transporte-yue",
  storageBucket: "transporte-yue.appspot.com",
  messagingSenderId: "665575426733",
  appId: "1:665575426733:web:d7abd9275dad2238385424"
}; */

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);