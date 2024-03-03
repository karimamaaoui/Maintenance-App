import React, { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./components/Home/index";
import Signin from "./components/auth/Signin/index";
import Signup from "./components/auth/SignUp/index";
import ForgotPassword from "./components/auth/forgotPassword/ForgetPassword";
import RestPassword from "./components/auth/resetpassword/ResetPassword";
import Accueil from "./components/ClientComponent/Accueil/Accueil";
import Profile from "./components/ClientComponent/Profile/Profile";
import NoRouteFound from "./components/NoRoutes/NoRouteFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="home" path="/" element={<Home />} />,
    <Route key="login" path="login" element={<Signin />} />,
    <Route key="register" path="register" element={<Signup />} />,
    <Route key="forgot" path="forgot" element={<ForgotPassword />} />,
    <Route
      key="reset/:id/:token"
      path="reset/:id/:token"
      element={<RestPassword />}
    />,
    <Route key="accueil" path="accueil" element={<Accueil />} />,
    <Route key="noroute" path="noroute" element={<NoRouteFound />} />,
    <Route exact path="/profile" element={<PrivateRoute  roles={['CLIENT']}/>}>
      <Route exact path="/profile" element={<Profile />} />
    </Route>,
  ])
);

export default router;
