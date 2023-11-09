import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Components/LandingPage';
import reportWebVitals from './reportWebVitals';
import './App.css'; // Importa tu archivo app.css aquí
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
},
  // {
  //     path: '/login',
  //     element: <Login />
  // },
  // {
  //     path: '/singUp',
  //     element: <SingUp />
  // },
  // {
  //     path: '/dashboard',
  //     element: <Dashboard />
  // }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <link   href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
     <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
     <meta name="google-site-verification" content="yTxojiBKAdvsIIQ8sSmkTjQRYyqztkTmKaaikMEpDoM" />
<RouterProvider router={router} />
   
  </React.StrictMode>
);   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
