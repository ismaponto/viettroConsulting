import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import { useAuth } from "../auth/authProvider";
import { API_url } from "../auth/const";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const [user, setUser] = useState('');
  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_url}/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        setErrorResponse("");
        console.log('Login successful');
        const json = await response.json(); 

        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);
          auth.setAccessTokenAndRefreshToken(json.body.accessToken, json.body.refreshToken);
          setUser(json);
        
          goTo('/login/dashboard');
      }

      } else {
        const json = await response.json();
        console.log('Something went wrong');
        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  
  if (auth.isAuthenticated) {
    return <Navigate to='/login/dashboard' />;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <NavigationBar className='block w-full' />
      <div className="w-full flex flex-col center items-center max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h1>Registro de nuevo usuario</h1>
          {errorResponse && <p className='text-red-500'>{errorResponse}</p>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs italic">Please introduce your password.</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
