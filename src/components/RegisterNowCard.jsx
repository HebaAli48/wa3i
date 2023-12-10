import React, { useRef, useState } from "react";
import women from '../assets/women.png'; 
import AccountPopUp from "./AccountPopUp";
const RegisterNowCard = ({image,text , title}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="relative w-auto h-auto ml-2 mr-2 drop-shadow-lg rounded-[35px]">
      <AccountPopUp index={2} isOpen={isModalOpen} closeModal={closeModal} />
      <div className="flex flex-col items-center justify-center">
        <img src={image} className="z-0 h-[270px] rounded-t-[35px]" />
        <div className="w-full bg-white p-8 ">
        <p className=" text-right font-[15px]  line-clamp-3  bg-white leading-[30px]" >
        {text}
        </p>
        </div>
        <div className="rounded-b-[35px] w-full relative bg-secondary h-[90px]">
        <p className=" text-[28px] text-white font-bold absolute right-5  ">{title}</p>
        <button onClick={openModal} className=" text-white px-6 py-2 rounded-[35px] bg-primary absolute bottom-4 left-5" >سجل الآن</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterNowCard;
