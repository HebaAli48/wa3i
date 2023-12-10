import React from "react";
import Ellipse from "../assets/Ellipse.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Badge from "../components/Badge";
import MoreInfo from "../components/MoreInfo";
import pillar1 from "../assets/pillar1.png";
import pillar2 from "../assets/pillar2.png";
import pillar3 from "../assets/pillar3.png";
import CustomizedVideo from "../components/CustomizedVideo";
import video from "../assets/video.mp4";
import image from "../assets/teen.png";
const PillarsMain = () => {
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
      <Navbar showRightMenu={true} items={items} index={1} />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
      </div>
      <div className="flex items-end  justify-end ml-[15%] mr-[15%]  pr-10  mb-10 ">
        <p className="  font-extrabold text-right text-[35px] text-primary ">
          أليات تنفيذ المبادرة
        </p>
      </div>

      <div className="flex flex-row items-start  ml-[15%] mr-[15%] justify-evenly gap-x-10 mb-20">
        <div className="flex flex-col items-center justify-center">
          <Badge
            image={pillar1}
            link='/pillarone'
            title="التشبيك"
            text="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمب ايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري
            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
            أيوتي أرير "
          />
          <p className="  font-normal w-[300px] text-[15px] text-center">
            بناء الشراكات المحلية والدولية لتبادل الخبرات وتبني التجارب الناجحة.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Badge
            image={pillar2}
            link='/pillartwo'
            title="تدريب"
            text="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمب ايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري
            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
            أيوتي أرير "
          />
          <p className="  font-normal w-[300px] text-[15px] text-center">
            بناء قدرات المواطنين على استخدام مهارات المواطنة الرقمية من خلال
            خدمات تدريبية وتقديم الدعم الاستشارة عبر الانترنت بالتعاون مع مقدمي
            هذه الخدمات.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Badge
            image={pillar3}
            link='/pillarthree'
            title="معرفة"
            text="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمب ايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري
            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
      أيوتي أرير"
          />
          <p className="  font-normal w-[300px] text-[15px] text-center">
            إتاحة المعرفة المتخصصة عن مفهوم المواطنة الرقمية ومحاورها الأساسية
            وتطبيقاتها والنماذج الناجحة و تمكين المواطنين من الوصول الي
            المعلومات واستخدامها بطريقة آمنة وفعالة والاستفادة من إمكانات
            الخدمات الحكومية الرقمية الجديدة والشعور بالثقة في البيئة الرقمية.
          </p>
        </div>
      </div>
      <div className=" w-full bg-[#F2F7FB] pt-10 pb-10">
        <div className="flex items-end  justify-end ml-[200px] mr-[200px] pr-12 mb-10 ">
          <p className="  font-extrabold text-right text-[35px] text-primary ">
            نماذج من المجتمع
          </p>
        </div>

        <div className="flex flex-row space-x-12  items center justify-center ml-[200px] mr-[200px] mb-20">
          <CustomizedVideo video={video} color="#2EE5C2" />
          <CustomizedVideo video={video} color="#2EE5C2" />
          <CustomizedVideo video={video} color="#2EE5C2" />
        </div>
      </div>

      <div className=" w-full pt-10 pb-10">
        <div className="flex items-end  justify-end ml-[200px] mr-[200px] pr-12 mb-10 ">
          <p className="  font-extrabold text-right text-[35px] text-primary ">
            احداث ذات صلة
          </p>
        </div>

        <div className="flex flex-row space-x-12  items center justify-center ml-[200px] mr-[200px] mb-20">
          <MoreInfo image={image} text="لوريم ابسوم" color="bg-[#2EE5C2]" />
          <MoreInfo image={image} text="لوريم ابسوم" color="bg-[#2EE5C2]" />
          <MoreInfo image={image} text="لوريم ابسوم" color="bg-[#2EE5C2]" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PillarsMain;
