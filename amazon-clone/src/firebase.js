// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtRoV3_7aZU82OJtN547w9Ibnb9Ch5nxs",
  authDomain: "web-40a2e.firebaseapp.com",
  projectId: "web-40a2e",
  storageBucket: "web-40a2e.appspot.com",
  messagingSenderId: "1096454121887",
  appId: "1:1096454121887:web:bfab16802ac016a8e875aa",
  measurementId: "G-XCT47JNMNL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
