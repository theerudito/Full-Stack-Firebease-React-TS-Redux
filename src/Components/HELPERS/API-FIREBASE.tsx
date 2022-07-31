import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmFbIyYfn5dXMxTeW-U_Afo8PQ6udqjMM",
  authDomain: "crud-firebase-ts.firebaseapp.com",
  projectId: "crud-firebase-ts",
  storageBucket: "crud-firebase-ts.appspot.com",
  messagingSenderId: "1077083389111",
  appId: "1:1077083389111:web:e8802874eeed1f76ad2132",
  measurementId: "G-WJL0PNJHHM",
};

const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app);
