// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfu-OzUmM5JMUa8JYmYctzGucpq0m7P_A",
    authDomain: "genius-car-services-6166b.firebaseapp.com",
    projectId: "genius-car-services-6166b",
    storageBucket: "genius-car-services-6166b.appspot.com",
    messagingSenderId: "773635907067",
    appId: "1:773635907067:web:740056244e6201e7523f5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth