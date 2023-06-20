import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbe3CmasAvmSZJjEczEeIHiXhSQh5eXz0",
  authDomain: "supply-pro.firebaseapp.com",
  databaseURL: "https://supply-pro-default-rtdb.firebaseio.com",
  projectId: "supply-pro",
  storageBucket: "supply-pro.appspot.com",
  messagingSenderId: "571388205933",
  appId: "1:571388205933:web:c3638777df00e912425864",
  measurementId: "G-ZZXML2W8JV",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, ref, get, set };
