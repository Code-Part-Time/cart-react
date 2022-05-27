import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCGSjc4MUg-mn70eUeTeqTwdz56PQJKy4",
  authDomain: "cart-react-rnk.firebaseapp.com",
  projectId: "cart-react-rnk",
  storageBucket: "cart-react-rnk.appspot.com",
  messagingSenderId: "274649576536",
  appId: "1:274649576536:web:fba757147f1a8faa33862d"
};

// Initialize Firebase
// const app = 
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
