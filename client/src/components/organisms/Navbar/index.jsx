import React from "react";
import MyMedicLogo from "../../atoms/vectors/Logo";
import Input from "../../atoms/Input";
import NotificationIcon from "../../atoms/vectors/NotificationIcon";
import "./NavStyles.scss";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <nav className="center">
      <span onClick={navigateToHome}>
        <MyMedicLogo />
      </span>
      <div className="flex justify-between items-center pl-4">
        <Input mxWt="max-w-[30%]" />
        <div className="flex items-center gap-x-[1.625rem]">
          <NotificationIcon />
          <div className="w-10 h-10 flex rounded-full">
            <img
              src="/img/man-avatar.webp"
              alt="user-logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
