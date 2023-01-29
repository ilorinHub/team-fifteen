import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MyMedicLogo from "../../atoms/vectors/Logo";
import Button from "../../atoms/button";
import "./LandingPageNavbar.scss";

const LandingPageNavBar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  const navLinks = [
    { label: "Book appointment", path: "/book-appointment" },
    { label: "Donate", path: "/donate" },
    { label: "Blog", path: "/blog" },
    { label: "Contact us", path: "/contact-us" },
    { label: "About us", path: "about-us" },
  ];

  return (
    <nav className="flex justify-between px-24">
      <span onClick={navigateToHome}>
        <MyMedicLogo />
      </span>
      <div className="flex items- flex-cols gap-x-6">
        {navLinks.map(({ label, path }, i) => (
          <Link
            key={"landing-page-link" + i}
            to={path}
            className="text-[1.2rem] text-[rgba(0, 0, 0, 0.65)];

                ] flex items-center justify-between leading-[1.1875]"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex w-[15rem] gap-8">
        <Button
          label="Login"
          type="outline-btn"
          onClick={() => navigate("/login")}
        />
        <Button label="Sign Up" onClick={() => navigate("/signup")} />
      </div>
    </nav>
  );
};

export default LandingPageNavBar;
