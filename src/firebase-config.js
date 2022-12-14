// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDStZO3jn4nS4lhdKmG491oqNF-gy6EEGs",
  authDomain: "my-blog-web-2ac7d.firebaseapp.com",
  projectId: "my-blog-web-2ac7d",
  storageBucket: "my-blog-web-2ac7d.appspot.com",
  messagingSenderId: "183509525403",
  appId: "1:183509525403:web:1e01cc2066b215671c373e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();