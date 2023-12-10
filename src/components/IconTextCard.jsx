import React, { useState } from "react";
const IconTextCard = ({ imageUrl, text, title ,color ,outline }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <div className={`relative w-full hover:scale-110 transform origin-top-left transition-transform  outline p-5 shadow-[${color}] shadow-md ${outline} h-full rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl flex flex-col gap-y-10`}>
      <div className="flex flex-row justify-evenly items-center gap-x-3 ">
        <img className="w-[50px]" src={imageUrl} />

        <p className="w-96 font-bold text-[22px] text-right  text-primary">
          {title}
        </p>
      </div>
 
      <p className=" w-full  pl-3 pr-3  text-right h-auto line-clamp-4 hover:line-clamp-6 font-normal text-xs text-[#666666]">
        {text}
      </p>

      <svg
        onClick={() => navigate("/supportservice")}
        className=" absolute bottom-3 cursor-pointer"
        width="42"
        height="41"
        viewBox="0 0 42 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 41C32.598 41 42 31.8218 42 20.5C42 9.17816 32.598 0 21 0C9.40202 0 0 9.17816 0 20.5C0 31.8218 9.40202 41 21 41Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.5195 27.7834L14.8927 20.7748C14.5713 20.4798 14.5713 20.0032 14.8927 19.7074L22.5195 12.6988C22.9834 12.272 23.7381 12.272 24.2029 12.6988C24.6668 13.1256 24.6668 13.8184 24.2029 14.2452L17.6786 20.2415L24.2029 26.2362C24.6668 26.6638 24.6668 27.3566 24.2029 27.7834C23.7381 28.2102 22.9834 28.2102 22.5195 27.7834"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default IconTextCard;
