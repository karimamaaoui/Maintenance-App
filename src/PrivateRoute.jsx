// PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext'; //

const PrivateRoute = ({ roles, ...rest }) => {
  const { auth } = useContext(AuthContext);

  //console.log("Role from AuthContext:", auth.role);

  // Check if the user's role is included in the allowed roles array
  const isAuthorized = roles.includes(auth.role);
  //console.log("isAuthorized",isAuthorized)

  return isAuthorized ? <Outlet {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
