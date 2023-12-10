import React, { useState } from "react";

const ImageWithOverlay = ({ imageUrl,text,title,onClick  }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <img
        src={imageUrl}
        alt="Image"
        className="w-full h-full rounded-t-3xl object-cover "
      />

      <div
        className={`absolute bottom-0 left-0 right-0 rounded-t-xl flex items-end bg-primary ${
          isOverlayVisible ? "h-full" : "h-[50px]"
        } transition-all duration-300`}
        onMouseEnter={() => setIsOverlayVisible(true)}
        onMouseLeave={() => setIsOverlayVisible(false)}
      >
        <div
          className={`flex flex-col h-full  w-full p-5 ${
            isOverlayVisible
              ? " items-end justify-start "
              : "items-center justify-center "
          }`}
        >
          <p
            className={`  font-bold ${
              isOverlayVisible ? " mt-2" : " mt-16"
            }  text-white text-[32px] leading-[38px] text-right gap-y-4 `}
          >
            {title}
          </p>

          <p className="  font-normal mt-4 w-48 text-white text-[6px] leading-[22px] line-clamp-5 text-right ">
          {text}
          </p>
          <div className="flex flex-row space-x-6 mt-3 w-full items-center justify-start">
            <div className="w-8 h-8 cursor-pointer" onClick={onClick}>
              <svg
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
                  fill="#FFFFFF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5195 27.7834L14.8927 20.7748C14.5713 20.4798 14.5713 20.0032 14.8927 19.7074L22.5195 12.6988C22.9834 12.272 23.7381 12.272 24.2029 12.6988C24.6668 13.1256 24.6668 13.8184 24.2029 14.2452L17.6786 20.2415L24.2029 26.2362C24.6668 26.6638 24.6668 27.3566 24.2029 27.7834C23.7381 28.2102 22.9834 28.2102 22.5195 27.7834"
                  fill="#095EB2"
                />
              </svg>
            </div>
            <p className="  font-bold  text-white text-[20px] leading-[38px] text-right gap-y-4">
              شاهد الصور
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
