import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE,
  authDomain: "crud-firebase-ts.firebaseapp.com",
  projectId: "crud-firebase-ts",
  storageBucket: "crud-firebase-ts.appspot.com",
  messagingSenderId: "1077083389111",
  appId: "1:1077083389111:web:e8802874eeed1f76ad2132",
  measurementId: "G-WJL0PNJHHM",
};

const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app);
export const Auth = getAuth(app);
export const Storage = getStorage(app);
