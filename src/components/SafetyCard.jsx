import React from "react";
import { useNavigate  } from "react-router-dom";
const SafetyCard = ({image , text , title}) => {

  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-y-5 rounded-3xl w-[274px] h-[266px] bg-white shadow-lg shadow-primary">
      <div className="flex flex-row items-center justify-start gap-x-3">
        <img className="rounded-tl-3xl h-[100px] w-[100px]" src={image} />
        <p className="  font-bold text-[25px] leading-[48px] text-primary"> {title}</p>
      </div>

      <p className="   w-full pl-7 pr-5  text-right h-[82px] line-clamp-6 font-normal text-xs text-[#666666]">
        {text}
      </p>

      <svg
      onClick={()=> navigate('/supportservice')}
      className="-mt-3 ml-3 cursor-pointer"
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
          fill="#095EB2"
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

export default SafetyCard;
