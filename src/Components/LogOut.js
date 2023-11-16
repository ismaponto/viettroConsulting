import React from 'react';
import { useAuth } from '../auth/authProvider';

const Logout = () => {
  const { signout } = useAuth();

  const handleLogout = () => {
    signout();
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <button className='flex center text-red-500 border p-2 max-w-xs'  onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;