import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Routes/LandingPage';
import reportWebVitals from './reportWebVitals';
import './App.css'; // Importa tu archivo app.css aquí
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/authProvider';
   import Login from './Routes/Login';
   import SignUp from './Routes/SignUp';
  import Dashboard from './Routes/Dashboard';
  import ProtectedRoute from './Routes/protectedRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
},
  {
      path: '/login',
      element: <Login />
  },
  {
      path: '/signUp',
      element: <SignUp />
  },
  {
      path: '/login',  
      element: <ProtectedRoute />,
      children: [
        {path:'/login/dashboard',
    element:<Dashboard />}  ]
      
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <link   href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
     <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
     <meta name="google-site-verification" content="yTxojiBKAdvsIIQ8sSmkTjQRYyqztkTmKaaikMEpDoM" />
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
   
  </React.StrictMode>
);   


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
