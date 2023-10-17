// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlOGiOvmjc9YwkjciO6CJUNVNcB0smnMo",
    authDomain: "future-station.firebaseapp.com",
    projectId: "future-station",
    storageBucket: "future-station.appspot.com",
    messagingSenderId: "449876531898",
    appId: "1:449876531898:web:b37c41a10bf7d4d8268083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;