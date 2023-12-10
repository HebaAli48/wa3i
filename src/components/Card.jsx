import React from "react";
import { useNavigate } from "react-router-dom";
const EmptyCard = ({image , text , text2,link , shadow }) => {
  const navigate=useNavigate();
  return (
<div onClick={()=> navigate(link)} className={`flex cursor-pointer flex-col  items-center ${shadow} justify-center gap-y-5 `}>
    <div className=" flex flex-col items-center justify-center p-5 bg-white h-[211px] w-[217px]  rounded-3xl ">
     <img src={image} />
     <p className=" text-primary   text-[20px] font-bold text-center ">
      {text2}
    </p>
    </div>
    <p className=" text-primary   text-xl font-bold text-center ">
      {text}
    </p>
</div>
  );
};

export default EmptyCard;
