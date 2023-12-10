import React from "react";
import image from "../assets/teen.png";
const CourseDownloadCard = ({ color, image, text }) => {
  return (
    <div className="w-full relative h-full">
      <img src={image} className="w-full rounded-t-xl h-full " />

      <div className="absolute z-30 w-full bottom-0 px-2  flex items-center justify-center rounded-t-xl h-[50px] bg-primary ">
        <p className="  font-bold  line-clamp-1 text-white text-[20px] text-right ">
          {text}
        </p>
      </div>
      <div
        className={`absolute flex flex-row-reverse items-center  right-0 bottom-11 rounded-t-2xl w-auto px-2 h-[35px] ${color}`}
      >
        <p className="  font-bold  text-white align-middle text-[15px] text-right p-2">
          سجل الآن
        </p>
        <svg
          width="23"
          height="15"
          viewBox="0 0 33 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.01533 7.50724C1.01571 7.50686 1.01602 7.50642 1.01647 7.50602L7.62184 0.932563C8.11669 0.440113 8.91708 0.441963 9.40965 0.936863C9.90215 1.4317 9.90026 2.2321 9.40542 2.72459L4.97057 7.13792H31.7423C32.4405 7.13792 33.0065 7.70385 33.0065 8.40203C33.0065 9.10021 32.4405 9.66616 31.7423 9.66616H4.97063L9.40534 14.0795C9.9002 14.572 9.90209 15.3724 9.40958 15.8672C8.91701 16.3622 8.11655 16.3639 7.62177 15.8715L1.0164 9.29804C1.01602 9.29766 1.0157 9.29723 1.01526 9.29685C0.520155 8.80269 0.521735 7.99973 1.01533 7.50722V7.50724Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default CourseDownloadCard;
