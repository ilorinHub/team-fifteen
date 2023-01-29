import { useLocation } from "react-router";
import Navbar from "../../components/organisms/Navbar";
import SideBar from "../../components/organisms/Sidebar";
import "../dashboard-layout";
import HomeIcon from "../../components/atoms/vectors/HomeIcon";
import BookingIcon from "../../components/atoms/vectors/BookingIcon";
import MessageIcon from "../../components/atoms/vectors/ChatIcon";
import UserIcon from "../../components/atoms/vectors/UserIcon";
import SettingIcon from "../../components/atoms/vectors/SettingIcon";

const PatientDashboardLayout = ({ children }) => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];

  const sidebarLink = [
    {
      label: "Home",
      icon: (
        <HomeIcon color={currentPath === "patient-home" ? "#336CFB" : ""} />
      ),
      path: "/patient-home",
    },
    {
      label: "Bookings",
      icon: (
        <BookingIcon
          color={currentPath === "patient-bookings" ? "#336CFB" : "#979A9D"}
        />
      ),
      path: "/patient-bookings",
    },
    {
      label: "Messages",
      icon: (
        <MessageIcon
          color={currentPath === "patient-messages" ? "#336CFB" : ""}
        />
      ),
      path: "/patient-messages",
    },
    {
      label: "Profile",
      icon: (
        <UserIcon color={currentPath === "patient-profile" ? "#336CFB" : ""} />
      ),
      path: "/patient-profile",
    },
    {
      label: "Setting",
      icon: (
        <SettingIcon
          color={currentPath === "patient-setting" ? "#336CFB" : ""}
        />
      ),
      path: "/patient-setting",
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

export default PatientDashboardLayout;
