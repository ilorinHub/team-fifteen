import React from 'react';
import Button from '../../atoms/button';
import Footer from '../../molecules/footer/Footer';
import Image from '../../molecules/image/Image';

const Donationpage = () => {
  return (
    <div>
      <div className="flex gap-x-16 px-14">
        <img
          src="/img/donation-img.webp"
          alt="donation-img"
          className="drop-shadow-[(0px 0px 31px rgba(0, 0, 0, 0.04))] rounded-[1.5625rem]"
        />
        <div className="text-start flex flex-col gap-y-8">
          <h3 className="text-[#333333] font-normal leading-[3.625rem] text-5xl">
            Save a Soul Today
          </h3>
          <p className="text-[#333333] text-[1.125rem] leading-[2rem] font-medium w-[34.8125rem] h-[10rem]">
            Hundreds of patients require your support. As part of our goal
            towards saving lives. At MyMedic, we have a donation section to
            assist the less privileges in need of blood or finance to carry out
            operations and stay healthy. We welcome donations in different ways,
            to contribute, kindly click on the button below.
          </p>
          <Button label="Donate Now" />
        </div>
      </div>
      <Image/>
      <Footer/>
    </div>
  );
}

export default Donationpage