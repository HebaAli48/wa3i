import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropDown = ({ items, index }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="absolute w-[12.5%] left-0 -mt-16">
      <div className={`relative flex flex-col items-center justify-start z-50`}>
        <div
          className="w-full flex flex-row-reverse space-x-3 h-[90px] z-50 text-white items-center bg-primary justify-center pr-5 cursor-pointer transition-opacity duration-300 ease-in-out"
          onClick={handleToggleDropdown}
        >
          <p className="  ml-5 font-bold text-[22px] mt-6 leading-[54px]">ابحث بالفئة</p>
          <svg className=" mt-7 " width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.60156 2L9.67551 9.18591L17.7495 2" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>

        </div>
        {showDropdown && (
          <div className=" animated-dropdown absolute top-[90px] right-0 flex flex-col items-end justify-start gap-x-5 w-full rounded-b-xl bg-white z-40 shadow-2xl transition-opacity duration-1500 ease-in-out opacity-100">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col w-full items-end justify-end pl-3 pr-3">
                <div className="h-[0.5px] w-full bg-[#B8B8B8]  "></div>
                <p
                  onClick={() => {
                    navigate(item.navigateTo);
                    handleToggleDropdown();
                  }}
                  className="text-primary text-[15px] pt-2 pb-2  cursor-pointer line-clamp-1 leading-[48px]"
                >
                  {item}
                </p>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
