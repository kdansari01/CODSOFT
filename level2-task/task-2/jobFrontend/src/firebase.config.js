import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCMfSseuvJP0XudMR9t5knEd6--h2OIqhc",
  authDomain: "recruitment-c3c96.firebaseapp.com",
  projectId: "recruitment-c3c96",
  storageBucket: "recruitment-c3c96.appspot.com",
  messagingSenderId: "306281692296",
  appId: "1:306281692296:web:ea582ef972678989e8f33d",
  measurementId: "G-K6YZ36VCS1",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
