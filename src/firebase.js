// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZnoMkT0-PWKCTjPE76K7La2xVsOSMnRs",
    authDomain: "my-firebase-app-bea11.firebaseapp.com",
    databaseURL: "https://my-firebase-app-bea11-default-rtdb.firebaseio.com",
    projectId: "my-firebase-app-bea11",
    storageBucket: "my-firebase-app-bea11.appspot.com",
    messagingSenderId: "89323752469",
    appId: "1:89323752469:web:799fb82a048fe3d4cd121c",
    measurementId: "G-S9X04G4P7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);