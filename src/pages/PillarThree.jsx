import React from "react";
import Ellipse from "../assets/Ellipse.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pillarone from '../assets/pillarone.png';
const PillarThree = () => {
  const items = [
    {
      index: 0,
      navigateTo: "/aboutUs",
      text: "نبذة عن المبادرة",
    },
    {
      index: 1,
      navigateTo: "/pillarsmain",
      text: "أليات تنفيذ المبادرة",
    },
    {
      index: 2,
      navigateTo: "/activities",
      text: "الأنشطة",
    },
    {
      index: 3,
      navigateTo: "/partners",
      text: "الشركاء",
    },
    {
      index: 4,
      navigateTo: "/outputs",
      text: "مخرجات المشروع",
    },
  ];
  return (
    <div className="left-0 right-0">
      <Navbar showRightMenu={true} items={items}  />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
      </div>
      <div className="flex items-end  justify-end ml-[200px] mr-[200px] pr-12 mb-10 ">
        <p className="  font-extrabold text-right text-[35px] text-primary ">
          أليات تنفيذ المبادرة
        </p>
      </div>

      <div className="flex flex-row items-center gap-x-20 ml-[200px] mr-[200px] justify-center mb-20">
       <img src={pillarone} />
      </div>
      <Footer />
    </div>
  );
};

export default PillarThree;
