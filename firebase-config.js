
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCGp-PUuKjNhH-nQZ1T7UzauqOS-458Wac",
  authDomain: "invoice-generator-f36fa.firebaseapp.com",
  databaseURL: "https://invoice-generator-f36fa-default-rtdb.firebaseio.com",
  projectId: "invoice-generator-f36fa",
  storageBucket: "invoice-generator-f36fa.appspot.com",
  messagingSenderId: "170418267557",
  appId: "1:170418267557:web:a57cbf19ac0da4e830b44c",
  measurementId: "G-M7V3GD69EZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export {db}