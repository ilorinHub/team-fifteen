import React from "react";
import Button from "../../atoms/button";
import "./HeroStyles.scss";

const Hero = () => {
  return (
    <div className="h-[80vh] flex justify-between">
      <div className=" justify-center ml-auto max-w-[44%] flex flex-col gap-y-6">
        <h2 className=" text-6xl font-bold leading-tight">
          Your health matters to{" "}
          <span
            className="text-[#336CFB]
"
          >
            MyMedic
          </span>
        </h2>
        <p className="text-xl leading-8 text-[#828282] w-4/5">
          Good health and good sense are two of life's greatest blessings.
          MyMedic believes that the greatest gift you can give your family and
          the world is a healthy you.
        </p>

        <Button label="Book appointment now" mxWt="max-w-[40%]" ht="h-[3rem]" />
      </div>
      <div className="flex">
        <img src="/public/img/heroimg.webp" alt="image of a doctor" />
      </div>
    </div>
  );
};

export default Hero;
