import React from "react";
import Ellipse from "../assets/Ellipse.png";
import image from "../assets/teen.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseMoreInfoCard from "../components/CourseMoreInfoCard";
const Research = () => {
  const items = [
    {
      index: 0,
      navigateTo: "/guidelines",
      text: "الادلة الارشادية",
    },
    {
      index: 1,
      navigateTo: "/awarenessTools",
      text: "أدوات توعية تفاعلية",
    },
    {
      index: 2,
      navigateTo: "/courses",
      text: "كورسات تدريبية",
    },
    {
      index: 3,
      navigateTo: "/safetyguides",
      text: "ادلة واعي للأمان",
    },
    {
      index: 4,
      navigateTo: "/research",
      text: "الدراسات و الأبحاث",
    },
  ];
  return (
    <div className="left-0 right-0">
      <Navbar showRightMenu={true} items={items} index={4} />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
        <p className=" absolute    text-primary font-extrabold text-[35px] leading-[48px]  top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          الدراسات و الأبحاث
        </p>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col justify-center w-full items-center mt-16 mb-12 ">
          <div className=" grid grid-cols-2 gap-y-8 gap-x-28">
            <CourseMoreInfoCard image={image} text="لوريم ابسوم"  color="bg-[#095EB2]" />
            <CourseMoreInfoCard image={image} text="لوريم ابسوم" color="bg-[#2EE5C2]" />
            <CourseMoreInfoCard image={image} text="لوريم ابسوم" color="bg-[#2EE5C2]" />
            <CourseMoreInfoCard image={image} text="لوريم ابسوم" color="bg-[#095EB2]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Research;
