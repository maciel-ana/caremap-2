import firebase from "firebase/compat/app";

import 'firebase/compat/auth';

import { getStorage } from "firebase/storage";

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuYp22qfj2GOt_BeO6U2RpxpDREkMCYeg",
    authDomain: "caremap-8d91d.firebaseapp.com",
    projectId: "caremap-8d91d",
    storageBucket: "caremap-8d91d.firebasestorage.app",
    messagingSenderId: "992757382800",
    appId: "1:992757382800:android:e5640bfffdc9baaa21a215"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const storage = getStorage(app);

export { db, auth, provider }