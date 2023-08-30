import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom';

// import bootstrap js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import css file here! 
import './style.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkAleKBlyOJYYqxZX_SAUpsw5oVyFFBWI",
  authDomain: "galaxea-4.firebaseapp.com",
  projectId: "galaxea-4",
  storageBucket: "galaxea-4.appspot.com",
  messagingSenderId: "1044670312154",
  databaseURL: "https://galaxea-4-default-rtdb.asia-southeast1.firebasedatabase.app/",
  appId: "1:1044670312154:web:edd40e83219f593a45bfe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//render the App component here!
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);