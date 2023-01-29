import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import App from "./App";
import AppointmentsPage from "./pages/appointments";
import DoctorsPage from "./pages/doctors";
import DonationsPage from "./pages/donations";
import OverviewPage from "./pages/overview";
import PatientsPage from "./pages/patients";
import PaymentsPage from "./pages/payments";
import SignupPage from "./pages/sign-up";
import LogInPage from "./pages/login";
import AdminloginPage from "./pages/admin-login";
import StaffloginPage from "./pages/staff-login";
import DonationLanding from "./components/organisms/donationlanding";
import PatientHome from "./pages/patients-home";

const AppRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const routes = [
    "/",
    "/patient-home",
    "/login",
    "/admin-login",
    "/staff-login",
    "/signup",
    "/overview",
    "/patient",
    "/donation",
    "/appointment",
    "/doctor",
    "/payment",
  ];
  const checkRouteAvailability = (route) => {
    // check if the route exists in your routes configuration
    const isRouteAvailable = routes.includes(route);
    return isRouteAvailable;
  };
  useEffect(() => {
    // check if the current route is available
    const isRouteAvailable = checkRouteAvailability(pathname);

    // if the route is not available, redirect to the not found page
    if (!isRouteAvailable) {
      navigate("/");
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/patient-home" element={<PatientHome />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/admin-login" element={<AdminloginPage />} />
      <Route path="/staff-login" element={<StaffloginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/patient" element={<PatientsPage />} />
      <Route path="/donation" element={<DonationsPage />} />
      <Route path="/appointment" element={<AppointmentsPage />} />
      <Route path="/doctor" element={<DoctorsPage />} />
      <Route path="/payment" element={<PaymentsPage />} />
      <Route path="/donationlanding" element={<DonationLanding />} />
    </Routes>
  );
};

export default AppRoutes;
