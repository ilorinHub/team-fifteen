import { useLocation } from "react-router";
import AppointmentIcon from "../../components/atoms/vectors/AppointmentIcon";
import DashboardIcon from "../../components/atoms/vectors/DashboardIcon";
import DoctorIcon from "../../components/atoms/vectors/DoctorIcon";
import DonationIcon from "../../components/atoms/vectors/DonationIcon";
import PatientsIcon from "../../components/atoms/vectors/PatientsIcon";
import PaymentIcon from "../../components/atoms/vectors/PaymentIcon";
import Navbar from "../../components/organisms/Navbar";
import SideBar from "../../components/organisms/Sidebar";
import "./DashboardLayoutStyles.scss";

const DashboardLayout = ({ children }) => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];

  const sidebarLink = [
    {
      label: "Overview",
      icon: (
        <DashboardIcon color={currentPath === "overview" ? "#336CFB" : ""} />
      ),
      path: "/overview",
    },
    {
      label: "Appointments",
      icon: (
        <AppointmentIcon
          color={currentPath === "appointment" ? "#336CFB" : ""}
        />
      ),
      path: "/appointment",
    },
    {
      label: "Patients",
      icon: <PatientsIcon color={currentPath === "patient" ? "#336CFB" : ""} />,
      path: "/patient",
    },
    {
      label: "Doctors",
      icon: <DoctorIcon color={currentPath === "doctor" ? "#336CFB" : ""} />,
      path: "/doctor",
    },
    {
      label: "Donations",
      icon: (
        <DonationIcon color={currentPath === "donation" ? "#336CFB" : ""} />
      ),
      path: "/donation",
    },
    {
      label: "Payments",
      icon: <PaymentIcon color={currentPath === "payment" ? "#336CFB" : ""} />,
      path: "/payment",
    },
  ];
  return (
    <div className="dashboard-main">
      <Navbar />
      <div className="dashboard-sub-container">
        <SideBar sidebarLink={sidebarLink} />
        <div className="dashboard-children">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
