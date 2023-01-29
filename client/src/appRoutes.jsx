import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import AppointmentsPage from "./pages/appointments";
import DoctorsPage from "./pages/doctors";
import DonationsPage from "./pages/donations";
import OverviewPage from "./pages/overview";
import PatientsPage from "./pages/patients";
import PaymentsPage from "./pages/payments";
import SignupPage from "./pages/sign-up";
import LogInPage from "./pages/log-in";
import AdminloginPage from "./pages/admin-login";
import LandingPageNavBar from "./components/organisms/LandingPageNavBar";
import Hero from "./components/organisms/Hero";
import HeroTwo from "./components/organisms/HeroTwo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/landing-page-navbar" element={<LandingPageNavBar />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/heroTwo" element={<HeroTwo />} />
      <Route path="/log-in" element={<LogInPage />} />
      <Route path="/admin-login" element={<AdminloginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/patient" element={<PatientsPage />} />
      <Route path="/donation" element={<DonationsPage />} />
      <Route path="/appointment" element={<AppointmentsPage />} />
      <Route path="/doctor" element={<DoctorsPage />} />
      <Route path="/payment" element={<PaymentsPage />} />
    </Routes>
  );
};

export default AppRoutes;
