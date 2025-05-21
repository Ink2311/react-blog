import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYKpHOkvvPs15q0eWl9yYhEsG8vQHyb_Y",
    authDomain: "blog-10465.firebaseapp.com",
    databaseURL: "https://blog-10465-default-rtdb.firebaseio.com",
    projectId: "blog-10465",
    storageBucket: "blog-10465.firebasestorage.app",
    messagingSenderId: "175235807622",
    appId: "1:175235807622:web:d441d06962b1064b41d407"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const database = getDatabase(app);
  export const auth = getAuth(app);