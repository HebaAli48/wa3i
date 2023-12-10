import React , {useState} from "react";
import Ellipse from "../assets/Ellipse.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import image from "../assets/couple.png";
import portrait1 from "../assets/portrait1.png";
import portrait2 from "../assets/portrait2.png";
import image2 from "../assets/working.png";
import women from '../assets/women.png';
import childern from '../assets/childern.png';
import family from '../assets/family.png';
import eldery from '../assets/eldery.png';
import FullPagePopup from "../components/FullPagePopUp";
const Conferences = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
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
      <Navbar showRightMenu={true} items={items} />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
      </div>
      <div className="flex flex-col  items-center gap-y-3 justify-center mb-10 ml-[180px] mr-[180px] ">
        <div className=" flex flex-row gap-x-28 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img className=" rounded-[35px] h-[450px]" src={image} />
          </div>

          {isPopupOpen && (
        <FullPagePopup onClose={closePopup}>
          <div className="flex items-center justify-start mr-[200px] ml-[200px]">
          <div className="grid grid-cols-1 gap-y-10 ">
           <div className="flex flex-col items-end">
           <p className="  font-extrabold text-primary text-[35px]">عنوان</p>
           <p className="   font-normal text-right text-[#666666] text-[15px]">لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايتينج أليايت,سيت دو أي يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم. نون بت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.</p>
           </div>
           <img src={portrait1}/>
           <div className=" grid grid-cols-2 gap-6">
           <img src={women}/>
           <img src={eldery}/>
           </div>
           <img src={portrait2}/>
           <div className=" grid grid-cols-2 gap-6">
           <img src={childern}/>
           <img src={family}/>
           </div>
           </div>
          </div>
        </FullPagePopup>
      )}

          <div className="flex flex-col items-end justify-end ">
            <p className="  font-bold text-[35px] mb-6 text-right text-primary ">
            مؤتمرات
            </p>
            <p className="  w-[500px] font-normal mb-5 leading-9 text-right text-[15px] text-[#666666] ">
              لوريم ايبسوم دولار سيت يلس أميت ,كونسيكتيتور أدايبا يسكينج
              أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا
              أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن
              يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
              أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي
              كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت
              أوككايكات كيوبايداتات نون بت نيولا باراياتيور. أيكسسيبتيور ساينت
              أوككايكات كيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
              سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودساينت
              أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا
              ديسيريونتموليت انيم أيدي ايست لابوريوم. نون بت نيولا باراياتيور.
              أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان
              كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full  pt-10 pb-6 ">
        <div className="flex flex-col items-end  justify-end ml-[240px] mr-[200px] pr-12 mb-10 ">
          <p className="  font-extrabold text-right text-[35px] text-primary ">
          أرشيف المسابقات
          </p>
          <div className="flex flex-col justify-center w-full items-center mt-16 ">
          <div className=" grid grid-cols-3 gap-y-14 gap-x-16">
          <img className="cursor-pointer" onClick={()=>openPopup()} src={image2}/>
            <img className="cursor-pointer" onClick={()=>openPopup()} src={image2}/>
            <img className="cursor-pointer" onClick={()=>openPopup()} src={image2}/>
            <img className="cursor-pointer" onClick={()=>openPopup()} src={image2}/>
            <img className="cursor-pointer" onClick={()=>openPopup()} src={image2}/>
            <img className="cursor-pointer" onClick={()=>openPopup()} src={image2}/>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Conferences;
