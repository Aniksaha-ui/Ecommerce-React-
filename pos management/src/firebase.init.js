// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqmUitB7MUB44BUpJSv_D_2RT3isecAAs",
  authDomain: "manufacturing-fe9f8.firebaseapp.com",
  projectId: "manufacturing-fe9f8",
  storageBucket: "manufacturing-fe9f8.appspot.com",
  messagingSenderId: "837851480495",
  appId: "1:837851480495:web:dfc9081eed5d19e7cdaf5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
