import React, { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
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
import UpdateProfile from "./components/ClientComponent/Profile/UpdateProfile";
import AddUser from "./components/Admin/dashboard/AddUser"
import HomeAdmin from "./components/Admin/dashboard/home";
import ProfileAdmin from "./components/Admin/pages/dashboard/profile";


import ProfileKarima from "./components/Admin/widgets/layout/pages/ProfileKarima"
import DashboardKarima from "./components/Admin/widgets/layout/pages/DashboardKarima"
import CourseKarima from "./components/Admin/widgets/layout/pages/CourseKarima"
import HomeKarima from "./components/Admin/widgets/layout/pages/HomeKarima"
import LoginKarima from "./components/Admin/widgets/layout/pages/LoginKarima"

import Layout from "./components/Admin/widgets/layout/Layout"



const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="home" path="/" element={<Home />} />,
    <Route key="login" path="login" element={<Signin />} />,
    <Route key="register" path="register" element={<Signup />} />,
  //  <Route key="dashboard" path="dashboard" element={<DashboardAdmin />} />,
    <Route key="admin" path="admin" element={<HomeAdmin />} />,
    <Route key="profileAdmin" path="profileAdmin" element={<ProfileAdmin />} />,

    <Route path='/dashboard' element={<Layout><DashboardKarima /></Layout>} />,
    <Route path='/coursekarima' element={<Layout><CourseKarima /> </Layout>} />,
    <Route path='/profilekarima' element={<Layout><ProfileKarima /> </Layout> } />,
    <Route path='/loginkarima' element={<Layout><LoginKarima /> </Layout> } />,
    <Route path='/adduser' element={<Layout><AddUser /> </Layout> } />,


    <Route key="forgot" path="forgot" element={<ForgotPassword />} />,
    <Route key="reset" path="reset/:id/:token" element={<RestPassword />} />,
    <Route key="updateProfile" path="updateProfile" element={<UpdateProfile />} />,
    <Route key="accueil" path="accueil" element={<Accueil />} />,

    <Route key="profile" exact path="/profile" element={<Profile />} />,
    <Route key="privateProfile" exact path="/profile" element={<PrivateRoute roles={['CLIENT','ADMIN']} />} />,
    <Route key="notFound" path="/not-found" element={<NoRouteFound />} />,
    <Route key="fallback" path="*" element={<Navigate to="/not-found" />} />,
  ])
);

export default router;
