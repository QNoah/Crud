// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJS9lN_R0TzfNU6XlFmEvVHlXKnIgLvbk",
  authDomain: "crud-systeem.firebaseapp.com",
  projectId: "crud-systeem",
  storageBucket: "crud-systeem.appspot.com",
  messagingSenderId: "818539896491",
  appId: "1:818539896491:web:cd01c801cc40208626a1ee",
  measurementId: "G-MV2VCXQXNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);