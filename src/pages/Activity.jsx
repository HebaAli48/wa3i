import React from "react";
import Ellipse from "../assets/Ellipse.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../assets/callout.png";
import image2 from "../assets/callout2.png";
import image3 from "../assets/competitions.png";
import image4 from "../assets/conference.png";
import image5 from "../assets/onGroundTraining.png";
import image6 from "../assets/training.png";
import EmptyCard from "../components/Card";
const Activity = () => {
    const items1 = [
      <EmptyCard shadow="drop-shadow-[0_5px_5px_rgba(46,229,194,0.29)]"  image={image5} text2="ورش العمل" link='/workshops'  />,
      <EmptyCard shadow="drop-shadow-[0_5px_5px_rgba(46,229,194,0.29)]" image={image4} text2="مؤتمرات" link='/conferences' />,
      <EmptyCard shadow="drop-shadow-[0_5px_5px_rgba(46,229,194,0.29)]" image={image3} text2="مسابقات" link='/competitions' />,
      <EmptyCard shadow="drop-shadow-[0_5px_5px_rgba(46,229,194,0.29)]" image={image6} text2="تدريب" link='/training' />,
      <EmptyCard shadow="drop-shadow-[0_5px_5px_rgba(46,229,194,0.29)]" image={image2} text2="ندوات توعوية عن بعد" link='/webinars'/>, 
      <EmptyCard shadow="drop-shadow-[0_5px_5px_rgba(46,229,194,0.29)]" image={image1} text2="ندوات توعوية" link='/seminars'/>,  
      ];
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
      <Navbar showRightMenu={true} items={items} index={2} />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
      </div>
      <div className="flex items-end  justify-end ml-[15%] mr-[15%] pr-12 mb-10 ">
        <p className="  font-extrabold text-right text-[35px] text-primary ">
        الأنشطة 
        </p>
      </div>

     
      <div className="flex flex-col justify-center w-full items-center mt-16 mb-24">
        <div className=" grid grid-cols-3  gap-y-10 gap-x-40">
        {items1.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
