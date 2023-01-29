import React from 'react';
import MyMedicLogo from '../../atoms/vectors/Logo';
import Button from '../../atoms/button';
import './LandingPageNavbar.scss'

const LandingPageNavBar = () => {
    const navLinks = [
        "Book appointment",
        "Donate",
        "Blog",
        "Contact us",
        "About us",
      ];
    
  return (
    <nav className='flex justify-between px-24'>
        <MyMedicLogo />
        <div className="flex items- flex-cols gap-x-6">
            {navLinks.map((link, i) => (
              <span
                key={"nav-link" + i}
                className="text-[1.2rem] text-[rgba(0, 0, 0, 0.65)];

                ] flex items-center justify-between leading-[1.1875]"
              >
                  {link}
              </span>
            ))}
          
          
          </div>
          <div className='flex w-[15rem] gap-8'>
          <Button label='Login' type='outline-btn' />
          <Button label='Sign Up'/>
          </div>
          

    </nav>
  )
}

export default LandingPageNavBar