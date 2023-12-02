import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import MainLayout from "../components/common/MainLayout";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import AdminLayout from "../pages/admin/AdminLayout";
import ViewAllScreen from "../pages/admin/ViewAllScreen";
import CreditScreen from "../pages/admin/CreditScreen";
import AdminHistoryScreen from "../pages/admin/AdminHistoryScreen";
import PrivateRoute from "./PrivateRoute";
// import AdminRoute from "./AdminRoute";
import EmailScreen from "../pages/auth/EmailScreen";
import VerifiedScreen from "../pages/auth/VerifiedScreen";
import ProfileScreen from "../pages/screen/ProfileScreen";
import HubScreen from "../pages/screen/HubScreen";
import AdminDetailScreen from "../pages/admin/AdminDetailScreen";
// import OtpScreen from "../pages/auth/OtpScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/auth/register",
    element: <RegisterScreen />,
  },
  {
    path: "/auth/signin",
    element: <SigninScreen />,
  },
  {
    path: "/api/auth/:token/signin",
    element: <SigninScreen />,
  },
  {
    path: "/auth/email",
    element: <EmailScreen />,
  },
  {
    path: "/auth/verified",
    element: <VerifiedScreen />,
  },
  {
    path: "/admin",
    element: (
      // <AdminRoute>
      <AdminLayout />
      // </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <ViewAllScreen />,
      },
      {
        path: "/admin/credit",
        element: <CreditScreen />,
      },
      {
        path: "/admin/history",
        element: <AdminHistoryScreen />,
      },
      {
        path: "/admin/detail/:pageID",
        element: <AdminDetailScreen />,
      },
      {
        path: "/admin/detail",
        element: <AdminDetailScreen />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HubScreen />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
    ],
  },
]);
