import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css'; // Importa tu archivo app.css aquí

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <link   href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
     <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
     <meta name="google-site-verification" content="yTxojiBKAdvsIIQ8sSmkTjQRYyqztkTmKaaikMEpDoM" />

   
    <App />
  </React.StrictMode>
);   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
