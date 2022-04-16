// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABqpyLEhAEW6AnBLmNviY6ZSOUucQV5f4",
    authDomain: "routet-firebase.firebaseapp.com",
    projectId: "routet-firebase",
    storageBucket: "routet-firebase.appspot.com",
    messagingSenderId: "751420884768",
    appId: "1:751420884768:web:629c27234ca6795fc23945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;