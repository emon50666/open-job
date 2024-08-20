// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApSZCCzro4L_lhGWGzD3N2Il4GjI3UXNE",
  authDomain: "job-portal-743df.firebaseapp.com",
  projectId: "job-portal-743df",
  storageBucket: "job-portal-743df.appspot.com",
  messagingSenderId: "953100768167",
  appId: "1:953100768167:web:ff679ed5b49769ff41dc82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;