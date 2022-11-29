// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ProcessingInstruction.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-react-a29ff.firebaseapp.com",
  projectId: "netflix-react-a29ff",
  storageBucket: "netflix-react-a29ff.appspot.com",
  messagingSenderId: "406455842596",
  appId: "1:406455842596:web:fd0c15f5deeb3f0302e5b1",
  measurementId: "G-D0PSPQMVKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
