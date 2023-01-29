import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyle.scss";

const Footer = () => {
  return (
    <footer className="">
      <span>Copyright © 2023 MyMedi. All right reserved</span>
      <div className="flex gap-6">
        <Link to="/privacy">Private Policy</Link>
        <Link to="/cookie-policy">Cookie Policy</Link>
        <Link to="/faq">FAQS</Link>
      </div>
    </footer>
  );
};

export default Footer;
