import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyCmgdzJIePXUZDZtJlN_3p4wnuZUS3gIO8",

    authDomain: "pokedex-6bd72.firebaseapp.com",

    projectId: "pokedex-6bd72",

    storageBucket: "pokedex-6bd72.appspot.com",

    messagingSenderId: "746340590668",

    appId: "1:746340590668:web:c9732bf17beba2f60140e9"

};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    db
}