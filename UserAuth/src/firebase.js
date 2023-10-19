import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-aa39d.firebaseapp.com",
  projectId: "mern-auth-aa39d",
  storageBucket: "mern-auth-aa39d.appspot.com",
  messagingSenderId: "838524666918",
  appId: "1:838524666918:web:8a85131fa8b8ad2c8d92e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);