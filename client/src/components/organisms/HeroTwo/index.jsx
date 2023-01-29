import React from "react";
import CalenderIcon from "../../atoms/vectors/CalenderIcon";
import FolderIcon from "../../atoms/vectors/FolderIcon";
import SecurityIcon from "../../atoms/vectors/Security";

import "./HeroTwoStyles.scss";

const HeroTwo = () => {
  return (
    <div className="bg-[#F8FAFF] h-[40vh] flex flex-col w-full">
      <h2 className="text-center text-5xl max-w-[30%] mx-auto">
        The <span className="text-[#336CFB]">revolutionary</span> healthcare
        solution
      </h2>
      <div className="flex items-center justify-center gap-[3.6875rem] ">
        <div className="bg-white flex py-[1.5rem] flex-col items-center w-[20.5rem] h-[17.125rem]">
          <div className="flex items-center align-center max-w-[20%] w-[4rem]h-[4rem] rounded-full bg-[#F7F9FF]">
            <CalenderIcon />
          </div>
          <h2 className="text-[1.125] text-[#333333] mb-[1rem] flex align-center">
            Booking Online Appointment
          </h2>
          <p className="text-[1rem] text-center">
            Why stay on a long queue in the hospital when you can easily book an
            appointment online with MyMedic and go when it is almost time?
          </p>
        </div>

        <div className="bg-white flex items-center py-[1.5rem] flex-col w-[20.5rem] h-[17rem]">
          <div className="flex items-center align-center max-w-[20%]">
            <FolderIcon />
          </div>
          <h2 className="text-[1.125] text-[#333333] mb-[1rem] flex align-center">
            Access Your Medical Records Easily
          </h2>
          <p className="text-[0.875rem] h-[6.35] w-[17.5]">
            You can check your medical records, doctor’s prescription,
            laboratory test with ease when you login to your account on MyMedic.
          </p>
        </div>

        <div className="bg-white flex items-center py-[1.5rem] flex-col w-[20.5rem] h-[17rem]">
          <div className="flex items-center align-center max-w-[20%]">
            <SecurityIcon />
          </div>
          <h2 className="text-[1.125] text-[#333333] mb-[1rem] flex align-center">
            Secure Your data
          </h2>
          <p className="text-[1rem]">
            We understand how important your medical records are, to protect
            this, MyMedic has safeguard your datas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
