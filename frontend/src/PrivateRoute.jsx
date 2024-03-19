// PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext'; //
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ roles, ...rest }) => {
  const { auth } = useContext(AuthContext);
  const [cookies] = useCookies(["jwt"]);
  const isLoggedIn = !!cookies.jwt && auth.token;

  //console.log("Role from AuthContext:", auth.role);
  if (isLoggedIn) {
    return <Navigate to="/login" />;
  }
  // Check if the user's role is included in the allowed roles array
  const isAuthorized = roles.includes(auth.role);
  //console.log("isAuthorized",isAuthorized)

  return isAuthorized ? <Outlet {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
