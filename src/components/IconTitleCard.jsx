import React from "react";
const IconTitleCard = ( {text , Color, shadow , image}) => {
  return (
<div className={`flex flex-col backdrop-blur-[1px]  items-center justify-center rounded-2xl ${shadow} bg-white h-full w-full  gap-y-5 `}
>
    <div className=" flex items-center justify-center drop-shadow-lg rounded-3xl ">
     <img className=" -mt-2" src={image} />
    </div>
    <p className={`${Color}  mb-3   text-[18px] font-bold text-center `}>
    {text}
    </p>
    
</div>
  );
};


export default IconTitleCard;