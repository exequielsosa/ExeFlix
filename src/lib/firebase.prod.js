import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// Quiero ver como tomar la base



const config = {
    apiKey: "AIzaSyDsvJ2ZqQI4JsDRm7JiZUGcB9bUHvz33Pc",
    authDomain: "netflix-9ef9a.firebaseapp.com",
    projectId: "netflix-9ef9a",
    storageBucket: "netflix-9ef9a.appspot.com",
    messagingSenderId: "310115588717",
    appId: "1:310115588717:web:66365bbb6942b515b1fd64",
};

const firebase = Firebase.initializeApp(config);

export { firebase };

