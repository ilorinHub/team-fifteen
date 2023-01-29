import React from 'react'
import Button from '../../atoms/button'
import './HeroStyles.scss'

const Hero = () => {
  return (
    <div className= "h-[829.23px] flex items-center justify-center  bg-end pl-8 z-20 relative">
      
      <div className="max-w-[38.75rem] mb-6 inline ml-12">
            <h2 className=' text-[4rem] leading-snug h-[11.375rem] w-[38.1875] font-bold mb-[1.5rem]'>Your Health Matters to <span className='text-[#336CFB]
'>MyMedic</span></h2>
            <p className='text-[1.6rem] mb-[5rem] leading-[2.5rem] text-[#828282] h-[7.0625rem] w-[35.4375rem]'>Good health and good sense are two of life's greatest blessings. MyMedic believes that the greatest gift you can give your family and the world is a healthy you.</p>
            
        
        
        <Button  label="Book appointment now" mxWt="max-w-[35%]" ht="h-[3rem]"/>
      </div>
      {/* <div className="img-wrapper w-[38.75rem] mx-h-[11rem] ">
                <img src="/public/img/heroimg.webp" alt="image of a doctor" />
            </div> */}
            <div className="bg-[url('/public/img/heroimg.webp')] bg-cover h-[856px] flex flex-col items-start justify-end  px-10 pb-12 top-0 left-0 bg-center w-full"></div>

</div>
          )
}

export default Hero