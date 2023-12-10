import React from "react";
import Ellipse from "../assets/Ellipse.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseRegisterCard from "../components/CourseRegisterCard";
import image from "../assets/teen.png";
const AwarenessTools = () => {
  const items = [
    {
      index: 0,
      navigateTo: "/guidelines",
      text: "الادلة الارشادية",
    },
    {
      index: 1,
      navigateTo: "/awarenesstools",
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

  const LeftSideMenuItems = [
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
    "لوريم ايبسوم دولار سيت يلس أميت ",
  ];

  return (
    <div className="left-0 right-0">
      <Navbar showLeftMenu={true} leftMenuItems={LeftSideMenuItems} showRightMenu={true} items={items} index={1} />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
        <p className=" absolute    text-primary font-extrabold text-[35px] leading-[48px]  top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          أدوات توعية تفاعلية
        </p>
      </div>


      <div className="flex flex-col mr-[15%] ml-[15%] ">
        <div className="flex items-end  w-full justify-end mr-[15%] mt-10 ">
          <p className="     text-primary font-extrabold text-[35px] leading-[48px] ">
            مصادر التعلم التفاعلي للأطفال
          </p>
        </div>

        <div className="flex  justify-end  w-full items-end mt-16 mb-8 ">
          <div className=" grid grid-cols-3 gap-y-3 gap-x-44">
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل" color="bg-[#2EE5C2]" />
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل"  color="bg-[#2EE5C2]" />
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل" color="bg-[#2EE5C2]" />
          </div>
        </div>
        <div className="flex items-end w-full justify-end mr-[15%]  mb-16">
          <p className="   text-xl font-bold underline underline-offset-8 text-primary cursor-pointer">
            لينك لتحميل جميع الأدوات (مع التسجيل)
          </p>
        </div>
      </div>



  <div className="bg-[#F2F7FB] w-full ">

  
  <div className="flex flex-col mr-[15%] ml-[15%] ">
        <div className="flex items-end  w-full justify-end mr-[15%] mt-10 ">
          <p className="     text-primary font-extrabold text-[35px] leading-[48px] ">
            مصادر التعلم التفاعلي للأطفال
          </p>
        </div>

        <div className="flex  justify-end  w-full items-end mt-16 mb-8 ">
          <div className=" grid grid-cols-3 gap-y-3 gap-x-44">
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل" color="bg-[#2EE5C2]" />
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل"  color="bg-[#2EE5C2]" />
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل" color="bg-[#2EE5C2]" />
          </div>
        </div>
        <div className="flex items-end w-full justify-end mr-[15%]  mb-16">
          <p className="   text-xl font-bold underline underline-offset-8 text-primary cursor-pointer">
            لينك لتحميل جميع الأدوات (مع التسجيل)
          </p>
        </div>
      </div>

</div>
    
<div className="flex flex-col mr-[15%] ml-[15%] ">
        <div className="flex items-end  w-full justify-end mr-[15%] mt-10 ">
          <p className="     text-primary font-extrabold text-[35px] leading-[48px] ">
            مصادر التعلم التفاعلي للأطفال
          </p>
        </div>

        <div className="flex  justify-end  w-full items-end mt-16 mb-8 ">
          <div className=" grid grid-cols-3 gap-y-3 gap-x-44">
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل" color="bg-[#2EE5C2]" />
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل"  color="bg-[#2EE5C2]" />
            <CourseRegisterCard image={image} text="حزمة واعي التفاعلية لباقي الفئات " title="اضغط للتحميل" color="bg-[#2EE5C2]" />
          </div>
        </div>
        <div className="flex items-end w-full justify-end mr-[15%]  mb-16">
          <p className="   text-xl font-bold underline underline-offset-8 text-primary cursor-pointer">
            لينك لتحميل جميع الأدوات (مع التسجيل)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AwarenessTools;
