import React, { useState } from "react";
import Ellipse from "../assets/Ellipse.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YouthSliderCard from "../components/YouthSliderCard";
import teacher from "../assets/teacher.png";
import family from "../assets/family.png";
import childern from "../assets/childern.png";
import eldery from "../assets/eldery.png";
import women from "../assets/women.png";
import OneItemCarousel from "../components/OneItemCarousel";
import RegisterNowCard from "../components/RegisterNowCard";
import Ellipsee from "../assets/Ellipsee.png";
import Calendar from "../components/Calendar";
import { useNavigate } from "react-router-dom";
import FullPagePopup from "../components/FullPagePopUp";

import portrait1 from "../assets/portrait1.png";
import portrait2 from "../assets/portrait2.png";
const Events = () => {
  const navigate = useNavigate();
  const womenDates = {
    dates: ["2023-12-7", "2023-12-19", "2023-12-29"],
    svg: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 44 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0005 0.347656L37.1586 2.18409C40.4521 2.18409 43.1221 4.8545 43.1221 8.14796V27.5303C43.1221 39.1953 33.6657 48.6519 22.0005 48.6519C10.3353 48.6519 0.878906 39.1953 0.878906 27.5303V8.14796C0.878906 4.8545 3.54889 2.18409 6.84241 2.18409L22.0005 0.347656Z"
          fill="#C63030"
        />
      </svg>
    ),
  };

  const parentsDates = {
    dates: ["2023-12-18", "2023-12-8", "2023-12-28"],
    svg: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 44 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0005 0.347656L37.1586 2.18409C40.4521 2.18409 43.1221 4.8545 43.1221 8.14796V27.5303C43.1221 39.1953 33.6657 48.6519 22.0005 48.6519C10.3353 48.6519 0.878906 39.1953 0.878906 27.5303V8.14796C0.878906 4.8545 3.54889 2.18409 6.84241 2.18409L22.0005 0.347656Z"
          fill="#DB7575"
        />
      </svg>
    ),
  };

  const elderyDates = {
    dates: ["2023-12-05", "2023-12-6", "2023-12-4"],
    svg: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 44 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0005 0.347656L37.1586 2.18409C40.4521 2.18409 43.1221 4.8545 43.1221 8.14796V27.5303C43.1221 39.1953 33.6657 48.6519 22.0005 48.6519C10.3353 48.6519 0.878906 39.1953 0.878906 27.5303V8.14796C0.878906 4.8545 3.54889 2.18409 6.84241 2.18409L22.0005 0.347656Z"
          fill="#07A0A0"
        />
      </svg>
    ),
  };

  const teachersDates = {
    dates: ["2023-12-13", "2023-12-15", "2023-12-3"],
    svg: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 44 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0005 0.347656L37.1586 2.18409C40.4521 2.18409 43.1221 4.8545 43.1221 8.14796V27.5303C43.1221 39.1953 33.6657 48.6519 22.0005 48.6519C10.3353 48.6519 0.878906 39.1953 0.878906 27.5303V8.14796C0.878906 4.8545 3.54889 2.18409 6.84241 2.18409L22.0005 0.347656Z"
          fill="#C1A633"
        />
      </svg>
    ),
  };

  const youthDates = {
    dates: ["2023-12-11", "2023-12-1", "2023-12-27"],
    svg: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 44 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0005 0.347656L37.1586 2.18409C40.4521 2.18409 43.1221 4.8545 43.1221 8.14796V27.5303C43.1221 39.1953 33.6657 48.6519 22.0005 48.6519C10.3353 48.6519 0.878906 39.1953 0.878906 27.5303V8.14796C0.878906 4.8545 3.54889 2.18409 6.84241 2.18409L22.0005 0.347656Z"
          fill="#64508C"
        />
      </svg>
    ),
  };

  const kidsDates = {
    dates: ["2023-12-02", "2023-12-11", "2023-12-25"],
    svg: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 44 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0005 0.347656L37.1586 2.18409C40.4521 2.18409 43.1221 4.8545 43.1221 8.14796V27.5303C43.1221 39.1953 33.6657 48.6519 22.0005 48.6519C10.3353 48.6519 0.878906 39.1953 0.878906 27.5303V8.14796C0.878906 4.8545 3.54889 2.18409 6.84241 2.18409L22.0005 0.347656Z"
          fill="#78D5D7"
        />
      </svg>
    ),
  };
  const Slider = [
    <RegisterNowCard
      image={teacher}
      title="عنوان"
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أري"
    />,
    <RegisterNowCard
      image={family}
      title="عنوان"
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أر"
    />,
    <RegisterNowCard
      image={childern}
      title="عنوان"
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أر"
    />,
    <RegisterNowCard
      image={eldery}
      title="عنوان"
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أر"
    />,
    <RegisterNowCard
      image={teacher}
      title="عنوان"
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أر"
    />,
    <RegisterNowCard
      image={family}
      title="عنوان"
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أر"
    />,
    <RegisterNowCard
      image={childern}
      title="عنوان"
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أر"
    />,
    <RegisterNowCard
      image={eldery}
      title="عنوان"
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أر"
    />,
  ];
  const handleCardClick = (title) => {
    // Handle the click event, you can use the 'title' parameter or any other data you need
  
  };
  const SliderItems = [
    <YouthSliderCard
    onClick={() => openPopup()}
      smallBgColor="bg-secondary"
      title="لورم ايبسوم"
      bgcolor="bg-primary"
      color2="text-white"
      date="15-9-2023"
      image={teacher}
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
    />,
    <YouthSliderCard
    onClick={() => openPopup()}
      smallBgColor="bg-secondary"
      title="لورم ايبسوم"
      bgcolor="bg-primary"
      color2="text-white"
      date="15-9-2023"
      image={teacher}
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
    />,
    <YouthSliderCard
    onClick={() => openPopup()}
      smallBgColor="bg-secondary"
      title="لورم ايبسوم"
      bgcolor="bg-primary"
      color2="text-white"
      date="15-9-2023"
      image={teacher}
      text="لوريم ايبسوم دولار سيت أميت سيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
    />,
  ];

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="left-0 right-0">
      <Navbar />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
        <p className=" absolute    text-primary font-extrabold text-[35px] leading-[48px]  top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          آخر الفعاليات
        </p>
      </div>

      <div
        
        className="flex cursor-pointer flex-col items-center gap-y-3 justify-center mb-10 mt-20 ml-[15%] mr-[15%]"
      >
        <div  className="flex flex-col items-center justify-center w-full pl-[10%] pr-[10%]  ">
          <OneItemCarousel
            ArrowColor="#095EB2"
            ShowArrow={true}
            items={SliderItems}
          />
        </div>
      </div>

      <div className=" w-full bg-[#F2F7FB] pt-10 pb-6 ">
        <div className="flex flex-col items-center gap-y-3 justify-center mb-10 mt-20 pl-[15%] pr-[15%]">
          <div className="flex flex-col items-center justify-center w-full   ">
            <OneItemCarousel
              showDots={true}
              numberOfItems={4}
              items={Slider}
              color="bg-[#2EE5C2] outline outline-2 outline-[#2EE5C2]"
            />
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <FullPagePopup onClose={closePopup}>
          <div className="flex items-center justify-start mr-[200px] ml-[200px]">
            <div className="grid grid-cols-1 gap-y-10 ">
              <div className="flex flex-col items-end">
                <p className="  font-extrabold text-primary text-[35px]">
                  عنوان
                </p>
                <p className="   font-normal text-right text-[#666666] text-[15px]">
                  لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج
                  أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                  ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                  سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                  كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت
                  فوليوبتاتي فيلايتينج أليايت,سيت دو أي يللأمكو لابورأس نيسي يت
                  أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار
                  إن ريبريهينديرأيت فوليوبتاتي فيلايت كايلليوم دولار أيو فيجايت
                  نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
                  بت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات
                  نون بت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات
                  كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا
                  ديسيريونتموليت انيم أيدي ايست لابوريوم. نون بت نيولا
                  باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
                  بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم
                  أيدي ايست لابوريوم.
                </p>
              </div>
              <img src={portrait1} />
              <div className=" grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center">
                  <img src={women} />
                  <p className="text-center text-[#666666] text-[15px] font-normal leading-[41px] line-clamp-4">
                    لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج
                    أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                    ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                    سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                    كونسيكيوات . ديواس أ (Clipping group)
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src={eldery} />
                  <p className="text-center text-[#666666] text-[15px] font-normal leading-[41px] line-clamp-4">
                    لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج
                    أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                    ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                    سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                    كونسيكيوات . ديواس أ (Clipping group)
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src={teacher} />
                  <p className="text-center text-[#666666] text-[15px] font-normal leading-[41px] line-clamp-4">
                    لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج
                    أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                    ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                    سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                    كونسيكيوات . ديواس أ (Clipping group)
                  </p>
                </div>
              </div>
              <img src={portrait2} />

              <div className="grid grid-cols-1">
                <ul className="list-disc  rtl">
                  <li className="marker-red pb-6">
                    <p className="   font-normal line-clamp-2 text-[15px] leading-[41px] text-[#666666]">
                    لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أ (Clipping group)
                    </p>
                    </li>
                    <li className="marker-red pb-6">
                    <p  className="   font-normal line-clamp-2 text-[15px] leading-[41px] text-[#666666]">
                    لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أ (Clipping group)
                    </p>
                    </li>
                    <li className="marker-red pb-6">
                    <p className="   font-normal line-clamp-2 text-[15px] leading-[41px] text-[#666666]">
                    لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أ (Clipping group)
                    </p>
                  </li>
                </ul>
              </div>
              <div className=" grid grid-cols-2 gap-6">
                <img src={childern} />
                <img src={family} />
              </div>
            </div>
          </div>
        </FullPagePopup>
      )}

      <div className="relative mt-[200px] ">
        <div className="absolute flex flex-col space-y-6 text-black w-full h-full items-center -mt-20 justify-center ">
          <div className="flex flex-row items-center space-x-20  justify-center">
            <div className="flex flex-col items-center justify-center space-y-3">
              <Calendar
                dates={[
                  womenDates,
                  elderyDates,
                  kidsDates,
                  parentsDates,
                  teachersDates,
                  youthDates,
                ]}
              />
              <div className="flex flex-row items-center justify-center space-x-1 pt-5">
                <div className="rounded-[35px] text-white px-3 py-1 text-[12px] font-bold text-right bg-[#C63030] ">
                  سيدات
                </div>
                <div className="rounded-[35px] text-white px-4 py-1 text-[12px] font-bold text-right bg-[#07A0A0] ">
                  كبار السن
                </div>
                <div className="rounded-[35px] text-white px-4 py-1 text-[12px] font-bold text-right bg-[#DB7575] ">
                  آباء و وصاه
                </div>
                <div className="rounded-[35px] text-white px-4 py-1 text-[12px] font-bold text-right bg-[#C1A633] ">
                  المعلمين
                </div>
                <div className="rounded-[35px] text-white px-4 py-1 text-[12px] font-bold text-right bg-[#64508C] ">
                  شباب
                </div>
                <div className="rounded-[35px] text-white px-4 py-1 text-[12px] font-bold text-right bg-[#78D5D7] ">
                  اطفال
                </div>
              </div>
            </div>
            <div
              className="flex cursor-pointer flex-col space-y-3 items-center justify-center"
            >
              <div onClick={() => navigate("/parents")} className="flex flex-col items-end justify-end">
                <p className=" text-[38px] text-primary  text-right">عنوان</p>
                <div className="rounded-[35px] w-40 text-white  px-4 py-1 text-[28px] font-bold text-center bg-[#DB7575] ">
                  آباء و وصاه
                </div>
                <p className=" font-normal w-[650px] line-clamp-2 text-[18px] text-[#666666] text-right ">
                  لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                  أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                  ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                  سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                  كونسيكيوات . ديواس أيوتي{" "}
                </p>
              </div>

              <div
                onClick={() => navigate("/eldery")}
                className="flex cursor-pointer flex-col items-end justify-end "
              >
                <p className=" text-[38px]  text-primary  text-right">عنوان</p>
                <div className="rounded-[35px] text-white w-40 px-4 py-1 text-[28px] font-bold text-center bg-[#07A0A0] ">
                  كبار السن
                </div>
                <p className=" font-normal w-[650px] line-clamp-2 text-[18px] text-[#666666] text-right ">
                  لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                  أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                  ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                  سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                  كونسيكيوات . ديواس أيوتي{" "}
                </p>
              </div>

              <div className="flex cursor-pointer flex-col items-end justify-end ">
                <p className=" text-[38px] text-primary  text-right">عنوان</p>
                <div className="rounded-[35px] text-white w-40 px-4 py-1 text-[28px] font-bold text-center bg-[#78D5D7] ">
                  اطفال
                </div>
                <p className=" font-normal w-[650px] line-clamp-2 text-[18px] text-[#666666] text-right ">
                  لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                  أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                  ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                  سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                  كونسيكيوات . ديواس أيوتي{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <img src={Ellipsee} className=" w-screen h-[635px] " />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
