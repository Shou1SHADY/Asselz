import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC8W55WAGAw0VNfFvX4iYhu0QPQJ0ws0sM",
    authDomain: "asselz.firebaseapp.com",
    projectId: "asselz",
    storageBucket: "asselz.appspot.com", // 🔹 Corrected
    messagingSenderId: "441026976136",
    appId: "1:441026976136:web:91ce65483bb0352496423d",
    measurementId: "G-GFYZBPJ696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, onSnapshot };
