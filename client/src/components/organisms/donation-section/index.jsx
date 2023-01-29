import React from "react";
import Button from "../../atoms/button";
import Footer from "../../molecules/footer/Footer";
import LandingPageBlogSection from "../../molecules/landing-page-update-section";

import "./DonationLandingStyle.scss";

const DonationSection = ({ onClick }) => {
  return (
    <div className="landing-page-donation-section">
      <div className="h-[60vh]">
        <img
          src="/img/donation-img.webp"
          alt="landing-page-donation-img"
          className="h-full w-full rounded-xl"
        />
      </div>
      <div className="donation-section">
        <h2>Save a Soul Today</h2>
        <p>
          Hundreds of patients require your support. As part of our goal towards
          saving lives. At MyMedic, we have a donation section to assist the
          less privileges in need of blood or finance to carry out operations
          and stay healthy. We welcome donations in different ways, to
          contribute, kindly click on the button below.
        </p>
        <Button label="Donate Now" onClick={onClick} />
      </div>
    </div>
  );
};

export default DonationSection;
