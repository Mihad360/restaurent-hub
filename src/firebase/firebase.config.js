// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1SzaSZ6D_XihflrgLqWDLTswfyBdN9gQ",
  authDomain: "restaurahub.firebaseapp.com",
  projectId: "restaurahub",
  storageBucket: "restaurahub.appspot.com",
  messagingSenderId: "231359045971",
  appId: "1:231359045971:web:58a5fdfe899ab72b7241a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;