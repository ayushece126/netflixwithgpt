// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqf0Gn3jkpU41sX0z4OflkKLSobRXUPJM",
  authDomain: "netflixgpt-12e56.firebaseapp.com",
  projectId: "netflixgpt-12e56",
  storageBucket: "netflixgpt-12e56.appspot.com",
  messagingSenderId: "577665229598",
  appId: "1:577665229598:web:72edd15ac691836668df0f",
  measurementId: "G-L4973Z41Q5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 