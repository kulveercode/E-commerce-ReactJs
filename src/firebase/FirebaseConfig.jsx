import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAEZCwrgvvKQVQH3qp4pCjhcbFlbpShb4A",
    authDomain: "e-commerce-project-ff1ed.firebaseapp.com",
    projectId: "e-commerce-project-ff1ed",
    storageBucket: "e-commerce-project-ff1ed.appspot.com",
    messagingSenderId: "236775716494",
    appId: "1:236775716494:web:6f88fe798e0af2c56f3bdf",
    measurementId: "G-F2R4RL3MVS"
  };

  const app = initializeApp(firebaseConfig);
  const fireDB = getFirestore(app);
  const auth = getAuth(app)
  export {fireDB,auth } ;
  

