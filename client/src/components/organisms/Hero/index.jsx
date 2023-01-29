import React from "react";
import Button from "../../atoms/button";
import "./HeroStyles.scss";

const Hero = ({ onClick }) => {
  return (
    <div className="flex flex-col lg:flex-row h-[45vh] lg:h-[80vh]  justify-center lg:justify-between">
      <div className=" items-center lg:items-stretch lg:justify-center lg:ml-auto lg:max-w-[44%] flex flex-col gap-y-6">
        <h2 className=" text-5xl text-center lg:text-left lg:text-6xl font-bold leading-tight">
          Your health matters to{" "}
          <span
            className="text-[#336CFB]
"
          >
            MyMedic
          </span>
        </h2>
        <p className=" max-w-[85%] lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left text-xl lg:leading-8 text-[#333] lg:w-4/5">
          Good health and good sense are two of life's greatest blessings.
          MyMedic believes that the greatest gift you can give your family and
          the world is a healthy you.
        </p>

        <Button
          label="Book appointment now"
          mxWt="max-w-[60%] lg:max-w-[40%]"
          ht="h-[3rem]"
          onClick={onClick}
        />
      </div>
      <div className="hidden lg:flex">
        <img
          src="/img/heroimg.webp"
          alt="image of a doctor"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
