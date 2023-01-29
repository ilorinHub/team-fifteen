import React from "react";
import CalenderIcon from "../../atoms/vectors/CalenderIcon";
import FolderIcon from "../../atoms/vectors/FolderIcon";
import SecurityIcon from "../../atoms/vectors/Security";

import "./HeroTwoStyles.scss";

const HeroTwo = () => {
  return (
    <div className="hero-two-container">
      <h2 className="text-center text-3xl max-w-[60%] lg:text-4xl lg:max-w-[30%] mx-auto mb-8">
        The <span className="text-[#336CFB]">revolutionary</span> healthcare
        solution
      </h2>
      <div className="hero-card">
        <div className="card">
          <div className="icon">
            <CalenderIcon />
          </div>
          <h2>Booking Online Appointment</h2>
          <p>
            Why stay on a long queue in the hospital when you can easily book an
            appointment online with MyMedic and go when it is almost time?
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <FolderIcon />
          </div>
          <h2>Access Your Medical Records Easily</h2>
          <p>
            You can check your medical records, doctor’s prescription,
            laboratory test with ease when you login to your account on MyMedic.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <SecurityIcon />
          </div>
          <h2>Secure Your data</h2>
          <p>
            We understand how important your medical records are, to protect
            this, MyMedic has safeguard your datas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
