import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
  authDomain: "handmade-orders-9e0fa.firebaseapp.com",
  projectId: "handmade-orders-9e0fa",
  storageBucket: "handmade-orders-9e0fa.firebasestorage.app",
  messagingSenderId: "553974492362",
  appId: "1:553974492362:web:1fc6d5661444b35bed1833"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const addOrder = async (orderData) => {
  await addDoc(collection(db, "orders"), {
    ...orderData,
    date: new Date()
  });
};