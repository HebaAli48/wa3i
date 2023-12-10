import React, { useState } from "react";
import Ellipse from "../assets/Ellipse.png";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/teen.png";
import ImageWithOverlay from "../components/ImageWithOverLay";
import CourseDownloadCard from "../components/CourseDownloadCard";
import CoursesPopup from "../components/CoursesPopup";
const TrainingCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    // Your logic for handling SVG click
    handleOpenModal();
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  const LeftSideMenuItems = ["فئة ", "فئة ", "فئة ", "فئة ", "فئة "];
  return (
    <div className="left-0 right-0">
      <Navbar
        showLeftDropDown={true}
        leftMenuItems={LeftSideMenuItems}
        showRightMenu={true}
        items={items}
        index={2}
      />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
        <p className=" absolute    text-primary font-extrabold text-[35px] leading-[48px]  top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          كورسات تدريبية
        </p>
      </div>

      <CoursesPopup
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      ></CoursesPopup>

      <div className="flex flex-col ">
        <div className="flex flex-col justify-center w-full items-center mt-16 mb-12 ">
          <div className=" grid grid-cols-3 gap-y-8 gap-x-20">
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
            <CourseDownloadCard
              image={image}
              text="عنوان الكورس"
              color="bg-[#2EE5C2]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F2F7FB] flex flex-col ">
        <div className="flex items-end justify-end mr-[300px] mt-10  ">
          <p className="     text-primary font-extrabold text-[35px] leading-[48px] ">
            فعاليات التدريبات ذات الصلة
          </p>
        </div>

        <div className="flex flex-col justify-center w-full items-center mt-16 mb-20">
          <div className=" grid grid-cols-3 gap-y-3 gap-x-20">
            <ImageWithOverlay
              onClick={handleClick}
              text="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمب ايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري
              أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

              أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

              نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

              كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
              title="عنوان الكورس"
              imageUrl={image}
            />
            <ImageWithOverlay
              onClick={handleClick}
              text="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمب ايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري
                أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

                أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

                نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

                كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
              title="عنوان الكورس"
              imageUrl={image}
            />
            <ImageWithOverlay
              onClick={handleClick}
              text="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمب ايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري
                أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

                أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

                نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

                كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
              title="عنوان الكورس"
              imageUrl={image}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainingCourses;
