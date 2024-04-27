import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export const firebaseApp = app; 
