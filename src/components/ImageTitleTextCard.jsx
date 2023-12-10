import React from "react";
import { useNavigate } from "react-router-dom";
const ImageTitleTextCard = ({ title, text, shadow , color , link,outlineColor ,image}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(link)} className={`flex flex-col backdrop-blur-[3px] gap-y-5 pt-5 items-center rounded-2xl ${shadow} bg-white h-[238px] w-[232px] transition  hover:${outlineColor}  cursor-pointer `}>
      <div className="">
        <img className="" src={image} alt={title} />
      </div>
      <div className="flex flex-col items-end justify-end pl-5 pr-5">
        <p className={`text-primary   text-[15px] leading-[26px] font-bold text-right`}>
          {title}
        </p>
        <p className={`text-[#666666] line-clamp-3   text-[12px] leading-[16px] font-bold text-right`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default ImageTitleTextCard;
