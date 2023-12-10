import React from "react";
const YouthSliderCard = ({
  image,
  text,
  bgcolor,
  title,
  color,
  smallBgColor,
  color2,
  date,
  onClick
}) => {
  return (
    <div onClick={onClick} className="flex relative flex-row-reverse items-center  space-x-0 h-[500px] w-full  justify-center">
      <img src={image} className=" w-1/2 h-full  rounded-tr-[35px] " />
      <div className={` ${bgcolor} w-1/2 h-full rounded-l-[35px]`}>
        <div className=" flex flex-col items-end justify-end p-10 ">
          <p className=" text-white   pl-10 pr-10 pt-10 line-clamp-[8] font-normal text-right text-[15px] leading-[30px]">
            {text}
          </p>
          <div className=" flex flex-col w-full pt-10 gap-y-6 pl-10 items-start justify-start ">
            <p className="   text-[30px] font-bold leading-[48px] text-white">
              اعرف المزيد
            </p>
            <svg
              width="46"
              height="22"
              viewBox="0 0 46 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.23342 9.81509C1.23394 9.81457 1.23438 9.81396 1.235 9.81341L10.4035 0.689173C11.0904 0.00564265 12.2013 0.0081926 12.885 0.695143C13.5687 1.38201 13.566 2.49298 12.8792 3.1766L6.72343 9.30249H43.8837C44.8528 9.30249 45.6383 10.088 45.6383 11.0571C45.6383 12.0262 44.8528 12.8118 43.8837 12.8118H6.72352L12.8791 18.9377C13.5659 19.6213 13.5686 20.7323 12.8849 21.4191C12.2012 22.1062 11.0902 22.1085 10.4034 21.4251L1.23491 12.3009C1.23438 12.3003 1.23394 12.2997 1.23333 12.2992C0.546109 11.6133 0.548309 10.4987 1.23342 9.81509Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`h-[80px] absolute flex flex-row-reverse items-center justify-between pl-10 pr-10 ${
          smallBgColor ? smallBgColor : "bg-[#F2F7FB]"
        }  rounded-tl-[35px] w-3/5 bottom-0 right-0`}
      >
        <p
          className={`  w-auto font-bold text-[40px] ${color2}  text-[${color}]`}
        >
          {title}
        </p>
        <p
          className={`   w-auto font-bold text-[30px] ${color2}  text-[${color}]`}
        >
          {" "}
          {date}
        </p>
      </div>
    </div>
  );
};

export default YouthSliderCard;
