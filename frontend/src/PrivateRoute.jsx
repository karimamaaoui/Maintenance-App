// PrivateRoute.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

const PrivateRoute = ({ roles, ...rest }) => {
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the auth object is available and has the necessary properties
    if (auth && auth.accessToken) {
      setLoading(false);
    }
  }, [auth]);

  if (loading) {
    // You might want to render a loading spinner or something here
    return null;
  }

  // Check if the user's role is included in the allowed roles array
  const isAuthorized = roles.includes(auth.role);

  return isAuthorized ? <Outlet {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
