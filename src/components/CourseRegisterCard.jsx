import React from "react";

const CourseRegisterCard = ({ color, title, text,image }) => {
  return (
    <div className="w-full relative h-full">
      <img src={image} className="w-full rounded-t-xl h-full " />

      <div className="absolute z-30 w-full bottom-0 px-2  flex items-center justify-center rounded-t-xl h-[50px] bg-primary ">
        <p className="  font-bold  line-clamp-1 text-white text-[20px] text-right ">
          {text}
        </p>
      </div>
      <div
        className={`absolute  right-0 bottom-11 rounded-t-2xl w-auto px-2 h-[35px] ${color}`}
      >
        <p className="  font-bold -mt-1 text-white align-middle text-[15px] text-right p-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CourseRegisterCard;
