// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCMfN8pxB-jYRftzQlHLzqXIUZTDmv4gPQ",
    authDomain: "paraply-291ca.firebaseapp.com",
    databaseURL: "https://paraply-291ca-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "paraply-291ca",
    storageBucket: "paraply-291ca.appspot.com",
    messagingSenderId: "829793943310",
    appId: "1:829793943310:web:33e141c44030d81a47a15f"
};

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

const db = getFirestore(app);
export { db };
