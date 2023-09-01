import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.React_App_Firebase_API_KEY,
  authDomain: 'clone-fc261.firebaseapp.com',
  projectId: 'clone-fc261',
  storageBucket: 'clone-fc261.appspot.com',
  messagingSenderId: process.env.React_App_messagingSenderId,
  appId: process.env.React_App_Firebase_API_ID,
  measurementId: process.env.React_App_measurementId,
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
