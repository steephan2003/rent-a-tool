import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; // Import deleteDoc and doc
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import authentication functions

const firebaseConfig = {
  apiKey: "AIzaSyANTSE1Na0GWgCr31ltFTSiiuVZQaMVt58",
  authDomain: "rent-a-tool-516c9.firebaseapp.com",
  projectId: "rent-a-tool-516c9",
  storageBucket: "rent-a-tool-516c9.appspot.com",
  messagingSenderId: "491962513912",
  appId: "1:491962513912:web:439d1f4ff1a6c77c5a3e0d",
  measurementId: "G-QSRQL5T508"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Auth instance

const addTool = async (toolData) => {
  try {
    const docRef = await addDoc(collection(firestore, "tools"), toolData);
    return docRef.id;
  } catch (error) {
    throw new Error('Error adding tool: ' + error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully!');
  } catch (error) {
    throw new Error('Error logging in: ' + error.message);
  }
};

export { app as firebaseApp, firestore, getDocs, addTool, login, collection, deleteDoc, doc }; // Export deleteDoc and doc
