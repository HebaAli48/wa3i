import React from "react";
import { useNavigate } from "react-router-dom";
const ServicesCard = ({ image, title, text, color, ArrowColor, link }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row-reverse items-center justify-center">
      <img src={image} className="w-[226.74px] h-[255.23px]" />
      <div className={` ${color}  w-[303.56px] h-[255.23px] rounded-tl-[3rem]`}>
        <div className=" flex flex-col items-end justify-end p-6 ">
          <p className="text-white   font-bold text-3xl leading-[48px]">
            {title}
          </p>
          <p className=" text-white    line-clamp-4 font-normal text-right text-[15px] leading-[30px]">
            {text}
          </p>
          <svg
            onClick={()=>navigate(link)}
            className="mr-52 cursor-pointer"
            width="45"
            height="51"
            viewBox="0 0 45 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.95375 2.43136L22.6164 0.521484L38.2793 2.43136C41.6828 2.43136 44.4419 5.2082 44.4419 8.63367V28.7914C44.4419 40.9225 34.6707 50.7574 22.6164 50.7574C10.5631 50.7574 0.791016 40.9225 0.791016 28.7914V8.63367C0.791016 5.2082 3.5501 2.43136 6.95374 2.43136"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.7528 18.2039L17.554 25.3185C17.2086 25.618 17.2086 26.1019 17.554 26.4022L25.7528 33.5168C26.2515 33.9501 27.0629 33.9501 27.5625 33.5168C28.0612 33.0835 28.0612 32.3803 27.5625 31.947L20.5488 25.86L27.5625 19.7745C28.0612 19.3404 28.0612 18.6372 27.5625 18.2039C27.0629 17.7706 26.2515 17.7706 25.7528 18.2039Z"
              fill={`${ArrowColor}`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
