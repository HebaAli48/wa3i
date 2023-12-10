import React from "react";
import { useNavigate } from "react-router-dom";

const LeftSideMenu = ({items, index }) => {
  const navigate = useNavigate();

  return (
    <div className={`absolute w-[12.5%] -mt-16 flex flex-col items-center justify-start z-50 left-0`}>
      <div className="w-full flex h-[90px] z-50 text-white  items-end bg-primary justify-end pr-8 ">
        <p className="  font-bold text-[24px] mt-6 leading-[54px]">مصادر اخرى</p>
      </div>
      <div className="h-auto top-[90px]  absolute flex flex-col items-end justify-start gap-x-5 w-full rounded-b-xl bg-white z-40 shadow-2xl">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col w-full items-end justify-end">
            <p onClick={() => navigate(item.navigateTo)} className="text-primary text-[15px] underline pr-1 pl-3 cursor-pointer line-clamp-1 leading-[48px]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideMenu;
