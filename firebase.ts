// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSe5C4cdv6rvPyIgxea58IpXx6DzIq2aQ",
  authDomain: "nextjsauth-63ac9.firebaseapp.com",
  projectId: "nextjsauth-63ac9",
  storageBucket: "nextjsauth-63ac9.appspot.com",
  messagingSenderId: "926619929382",
  appId: "1:926619929382:web:719f3b9050014838104fe7"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
