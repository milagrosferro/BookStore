import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCnWQRjPfHBALHbjwzQlxCn3o_3Cbr1jvM",
  authDomain: "cambrera-store.firebaseapp.com",
  projectId: "cambrera-store",
  storageBucket: "cambrera-store.appspot.com",
  messagingSenderId: "1045072189860",
  appId: "1:1045072189860:web:a649266db519b3a8880931"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);