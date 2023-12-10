import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Badge = ({text,title,image ,link}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div onClick={()=> navigate(link)} className="relative cursor-pointer">
      <svg
        width="330"
        height="377"
        viewBox="0 0 355 403"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <g filter="url(#filter0_d_576_6779)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.954 24.6187L175.566 10.248L294.175 24.6187C319.948 24.6187 340.838 45.5123 340.838 71.2821V222.95C340.838 314.228 266.845 388.225 175.566 388.225C84.2878 388.225 10.2913 314.228 10.2913 222.95V71.2821C10.2913 45.5123 31.1813 24.6187 56.954 24.6187Z"
            fill="#FFFFFF"
            stroke={isHovered ? "#095EB2" : "transparent"} // Dynamic outline on hover
            strokeWidth={isHovered ? "4" : "0"} // Adjust the outline width as needed
          />
        </g>
        <defs>
          <filter
            id="filter0_d_576_6779"
            x="0.29126"
            y="0.248047"
            width="354.546"
            height="401.977"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="6" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14902 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_576_6779"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_576_6779"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div
        className="absolute -mt-80 ml-14 flex flex-col gap-y-5 items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="   text-center text-primary font-bold text-3xl leading-[48px]">
          {title}
        </p>
        <p className=" text-center line-clamp-2   w-[203px] h-[66px]   text-[#666666] font-normal text-[15px] leading-[30px]">
          {text}
        </p>

        <img className="w-[99px] h-[99px]" src={image} />
      </div>
      <div
        className={`ml-[270px] -mt-56 -z-10 absolute ${
          isHovered ? "translate-x-4" : ""
        } `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          width="83"
          height="72"
          viewBox="0 0 83 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.97836 61.6756L0.873169 36.2102L3.97836 10.7445C3.97836 5.21078 8.49309 0.724899 14.0624 0.724899H46.8359C66.5593 0.724899 82.5495 16.6115 82.5495 36.2102C82.5495 55.8072 66.5593 71.6953 46.8359 71.6953H14.0624C8.4931 71.6953 3.97836 67.2094 3.97836 61.6756Z"
            fill="#2EE5C2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.5298 28.4728L64.0593 35.8744C64.4187 36.186 64.4187 36.6893 64.0593 37.0017L55.5298 44.4033C55.011 44.854 54.1669 44.854 53.6472 44.4033C53.1284 43.9525 53.1284 43.2209 53.6472 42.7702L60.9437 36.4376L53.6472 30.1067C53.1284 29.6552 53.1284 28.9236 53.6472 28.4728C54.1669 28.0221 55.011 28.0221 55.5298 28.4728"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Badge;
