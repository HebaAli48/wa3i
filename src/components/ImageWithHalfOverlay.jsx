import React, { useState } from "react";

const ImageWithHalfOverlay = ({ imageUrl,text,title ,color }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
 
  return (
    <div className="relative overflow-hidden ">
      <img
        src={imageUrl}
        alt="Image"
        className="w-full h-full rounded-tl-lg rounded-tr-lg rounded-bl-lg object-cover "
      />
      <div className="  h-full flex flex-row space-x-6 w-full items-center justify-start">
            <div className="w-8 h-8 z-20 absolute bottom-2 left-2 ">
              <svg
                width="32"
                height="31"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 41C32.598 41 42 31.8218 42 20.5C42 9.17816 32.598 0 21 0C9.40202 0 0 9.17816 0 20.5C0 31.8218 9.40202 41 21 41Z"
                  fill={ isOverlayVisible ? "#FFFFFF" : color }
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5195 27.7834L14.8927 20.7748C14.5713 20.4798 14.5713 20.0032 14.8927 19.7074L22.5195 12.6988C22.9834 12.272 23.7381 12.272 24.2029 12.6988C24.6668 13.1256 24.6668 13.8184 24.2029 14.2452L17.6786 20.2415L24.2029 26.2362C24.6668 26.6638 24.6668 27.3566 24.2029 27.7834C23.7381 28.2102 22.9834 28.2102 22.5195 27.7834"
                  fill={ isOverlayVisible ? color : "#FFFFFF" }
                />
              </svg>
            </div>
          </div>
      <div
        className={`absolute bottom-0  right-0  flex items-end bg-[${color}] ${
          isOverlayVisible ? "h-full w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg " : "h-[77px] w-3/5 rounded-tl-[28px]"
        } transition-all duration-300`}
        onMouseEnter={() => setIsOverlayVisible(true)}
        onMouseLeave={() => setIsOverlayVisible(false)}
      >
        <div
          className={`flex flex-col  ${
            isOverlayVisible
              ? " items-end pr-3 pl-20 justify-start h-full space-y-4 w-full "
              : "items-end pr-3 justify-end  -mt-10 h-[70px]  "
          }`}
        >
          <p
            className={`  font-bold  ${
              isOverlayVisible ? " mt-2" : "-mt-3"
            }  text-white text-[16px] leading-[48px] text-right `}
          >
            {title}
          </p>
          <p className={`  font-normal p-1 -mt-3  w-full text-white text-[8px] leading-[22px] ${isOverlayVisible? "line-clamp-[8]" : " line-clamp-2 " } text-right `}>
          {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithHalfOverlay;
