import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#11179E] w-[90rem] h-[4rem] flex justify-between items-center px-8 py-6 mt-6 text-white">
      <span>Copyright © 2023 MyMedi. All right reserved</span>
      <div className="flex gap-6">
          <a href="">Private Policy</a>
          <a href="">Cookie Policy</a>
          <a href="">FAQS</a>
      </div>
    </div>
  );
}

export default Footer