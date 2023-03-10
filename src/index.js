import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAiRXAUnuLDlGXd4qjGoYRDdmn2X1igtwk",
  authDomain: "lacresta-39a04.firebaseapp.com",
  projectId: "lacresta-39a04",
  storageBucket: "lacresta-39a04.appspot.com",
  messagingSenderId: "91570178883",
  appId: "1:91570178883:web:267c5d11ec941907473df6"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
