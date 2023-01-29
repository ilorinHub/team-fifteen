import React from 'react'

const Image = () => {
  return (
    <div className="flex gap-y-6 mt-12 flex-col overflow-auto">
      <div className="text-center font-bold text-[2rem]">
        Recent News and Updates
      </div>
      <div className="flex gap-x-6 items-center justify-center mt-4">
        <div
          className="flex flex-col w-[18rem] h-[26.5625rem] bg-#fff shadow-[0px 0px 26px rgba(0, 0, 0, 0.08)]"
        >
          <img
            src="/img/drug-img.webp"
            alt="drug-img"
            className="w-[18rem] h-[17.375rem]"
          />
          <div className="flex items-start flex-col gap-[0.625rem] mt-4">
            <h3>Effects of drugs abuse</h3>
            <p className="font-normal text-[0.875rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              asperiores distinctio voluptates, ratione aut harum porro
              inventore sed commodi voluptatum in dignissimos ea. Molestias,
              ipsa quia delectus suscipit distinctio tempora.
            </p>
            <div className="flex gap-x-[0.625rem] items-center text-[0.75rem]">
              <img
                src="/img/Calendar.webp"
                alt="calender-img"
                className="w-[0.75rem] h-[0.875rem]"
              />
              <span>January 19th, 2023</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[18rem] h-[26.5625rem] bg-#fff">
          <img
            src="/img/heart-img.webp"
            alt="heart-img"
            className="w-[18rem] h-[17.375rem]"
          />
          <div className="flex items-start flex-col gap-[0.625rem] mt-4">
            <h3>Exercise for heart</h3>
            <p className="font-normal text-[0.875rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              asperiores distinctio voluptates, ratione aut harum porro
              inventore sed commodi voluptatum in dignissimos ea. Molestias,
              ipsa quia delectus suscipit distinctio tempora.
            </p>
            <div className="flex gap-x-[0.625rem] items-center text-[0.75rem]">
              <img
                src="/img/Calendar.webp"
                alt="calender-img"
                className="w-[0.75rem] h-[0.875rem]"
              />
              <span>January 19th, 2023</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[18rem] h-[26.5625rem] bg-#fff">
          <img
            src="/img/vaccine-img.webp"
            alt="vaccine-img"
            className="w-[18rem] h-[17.375rem]"
          />
          <div className="flex items-start flex-col gap-[0.625rem] mt-4">
            <h3>Post covid effect</h3>
            <p className="font-normal text-[0.875rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              asperiores distinctio voluptates, ratione aut harum porro
              inventore sed commodi voluptatum in dignissimos ea. Molestias,
              ipsa quia delectus suscipit distinctio tempora.
            </p>
            <div className="flex gap-x-[0.625rem] items-center text-[0.75rem]">
              <img
                src="/img/Calendar.webp"
                alt="calender-img"
                className="w-[0.75rem] h-[0.875rem]"
              />
              <span>January 19th, 2023</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[18rem] h-[26.5625rem] bg-#fff">
          <img
            src="/img/vaccine-img.webp"
            alt="vaccine-img"
            className="w-[18rem] h-[17.375rem]"
          />
          <div className="flex items-start flex-col gap-[0.625rem] mt-4">
            <h3>Effects of drugs abuse</h3>
            <p className="font-normal text-[0.875rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              asperiores distinctio voluptates, ratione aut harum porro
              inventore sed commodi voluptatum in dignissimos ea. Molestias,
              ipsa quia delectus suscipit distinctio tempora.
            </p>
            <div className="flex gap-x-[0.625rem] items-center text-[0.75rem]">
              <img
                src="/img/Calendar.webp"
                alt="calender-img"
                className="w-[0.75rem] h-[0.875rem]"
              />
              <span>January 19th, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image