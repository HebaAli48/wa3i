import React from "react";
const CourseMoreInfoCard = ({ text, color , image }) => {
  return (
    <div className="w-full relative h-full">
      <img src={image} className="w-full rounded-t-xl h-full " />

      <div
        className={`absolute z-30 w-full bottom-0 pl-4 pr-4  flex flex-row-reverse items-center justify-between rounded-t-xl h-[50px] ${color} `}
      >
        <p className="  font-bold  line-clamp-1 text-white text-[20px] leading-7 text-right ">
          {text}
        </p>
        <div className="flex flex-row items-center justify-center space-x-3">
          <svg
            width="33"
            height="15"
            viewBox="0 0 43 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.3133 9.43559C1.31378 9.43509 1.31419 9.43451 1.31476 9.43403L9.80118 0.988558C10.4369 0.355898 11.4653 0.358228 12.0981 0.994098C12.7309 1.62989 12.7284 2.65818 12.0927 3.29094L6.39488 8.96111H40.7906C41.6876 8.96111 42.4147 9.68818 42.4147 10.5852C42.4147 11.4822 41.6876 12.2093 40.7906 12.2093H6.39496L12.0926 17.8795C12.7283 18.5122 12.7308 19.5406 12.098 20.1763C11.4652 20.8122 10.4368 20.8144 9.80109 20.1818L1.31467 11.7364C1.31418 11.7359 1.31378 11.7353 1.31321 11.7348C0.677119 11.1 0.679149 10.0683 1.3133 9.43557V9.43559Z"
              fill="white"
            />
          </svg>
          <p className="  font-bold  line-clamp-1 text-white text-[17px] text-right ">
            اعرف المزيد
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseMoreInfoCard;
