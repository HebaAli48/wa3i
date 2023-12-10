import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ align, items, index }) => {
  const navigate = useNavigate();

  return (
    <div className={`absolute w-[12.5%] -mt-16 flex flex-col items-center justify-start  ${align}`}>
      <div className="w-full flex h-[90px]  text-white  items-end bg-primary justify-end pr-8 ">
        <p className="  font-bold text-[24px] mt-6 leading-[54px]">المصادر</p>
      </div>
      <div className="h-auto top-[90px] absolute flex flex-col items-end justify-start gap-x-5 w-full rounded-b-xl bg-white  shadow-2xl">
        {items.map((item, i) => (
          <div key={i} onClick={() => navigate(item.navigateTo)} className="flex flex-col w-full items-end justify-end cursor-pointer">
            <p  className="text-primary text-[18px] pr-5  leading-[48px]">
              {item.text}
            </p>
            {index === i && (
              <div className="h-2 bg-primary rounded-ss-md w-full"></div>
            )}
            {index !== i && (
              <div className="h-2 bg-[#666666] rounded-ss-md w-[70px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
