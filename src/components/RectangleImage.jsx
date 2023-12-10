import React from "react";
const RectangleImage = ({ color, title, text , image }) => {
  return (
    <div className="w-full relative h-full">
      <img src={image} className=" w-full h-full " />

      <div className={`absolute z-30 w-2/5 bottom-0 px-2 space-y-4 right-0 flex flex-col items-end pt-10 pl-6  rounded-tl-[35px] h-[200px] bg-[${color}] `}>
        <p className="  font-bold pr-6 text-white text-[15px] text-right ">
         {title} 
        </p>
        <p className="  font-normal  pr-6 line-clamp-[12]  text-white text-[5px] text-right ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default RectangleImage;
