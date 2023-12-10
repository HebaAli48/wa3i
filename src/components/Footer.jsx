import React, {useState} from "react";
import background from "../assets/FooterBg.png";
import AccountPopUp from "./AccountPopUp";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <><AccountPopUp index={2} isOpen={isModalOpen} closeModal={closeModal} /><div className="relative w-full h-[200px]">
      <div className=" absolute h-[200px] w-full flex pl-16 pr-20 gap-x-6 flex-row-reverse items-center justify-evenly ">

        <div className="flex flex-col gap-y-1  items-end w-[210px] justify-center">
          <p  className="   text-[25px] font-bold leading-8 text-right text-primary">
            سجل الآن
          </p>
          <p className="   text-[10px]  font-normal leading-5 text-right text-primary">
            يبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
            مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
            كتيّب بمثابة دليل أو
          </p>
          <button onClick={openModal} className=" bg-transparent ring-1 text-right px-3 ring-primary py-1 w-[160px] rounded-xl text-primary text-[18px]   font-normal ">
            {" "}
            <span className="absolute -mx-12 mt-[6.5px] ">
              {" "}
              <svg
                width="27"
                height="18"
                viewBox="0 0 37 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.21164 7.95576C1.21206 7.95535 1.2124 7.95487 1.21288 7.95445L8.43633 0.765838C8.97748 0.227308 9.85276 0.229328 10.3914 0.770538C10.93 1.31169 10.9279 2.18697 10.3868 2.72557L5.53697 7.55189H34.8138C35.5774 7.55189 36.1963 8.1708 36.1963 8.93432C36.1963 9.69782 35.5774 10.3167 34.8138 10.3167H5.53704L10.3867 15.1431C10.9279 15.6817 10.93 16.5569 10.3914 17.0981C9.8527 17.6394 8.97735 17.6412 8.43626 17.1028L1.21281 9.91418C1.21239 9.91377 1.21205 9.91328 1.21157 9.91285C0.670138 9.37248 0.671868 8.49436 1.21164 7.95576Z"
                  fill="#095EB2" />
              </svg>
            </span>{" "}
            تسجيل دخول
          </button>
        </div>

        <div className="flex flex-col gap-y-1 items-end w-[210px] justify-center">
          <p className="   text-[25px] font-bold leading-8 text-right text-primary">
            نشرة واعي
          </p>
          <p className="   text-[10px]  font-normal leading-5 text-right text-primary">
            يبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
            مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
            كتيّب بمثابة دليل أو
          </p>

          <input placeholder="بريدك الاليكتروني" className=" placeholder-primary bg-transparent ring-1 pl-10 text-right underline-offset-8 underline px-3 ring-primary py-1 w-[200px] rounded-xl text-primary text-[18px] focus:outline-none   font-normal "/>
          <span className="absolute cursor-pointer mx-40 mt-[123px] ">
              {" "}
              <svg
                width="27"
                height="18"
                viewBox="0 0 37 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.21164 7.95576C1.21206 7.95535 1.2124 7.95487 1.21288 7.95445L8.43633 0.765838C8.97748 0.227308 9.85276 0.229328 10.3914 0.770538C10.93 1.31169 10.9279 2.18697 10.3868 2.72557L5.53697 7.55189H34.8138C35.5774 7.55189 36.1963 8.1708 36.1963 8.93432C36.1963 9.69782 35.5774 10.3167 34.8138 10.3167H5.53704L10.3867 15.1431C10.9279 15.6817 10.93 16.5569 10.3914 17.0981C9.8527 17.6394 8.97735 17.6412 8.43626 17.1028L1.21281 9.91418C1.21239 9.91377 1.21205 9.91328 1.21157 9.91285C0.670138 9.37248 0.671868 8.49436 1.21164 7.95576Z"
                  fill="#095EB2" />
              </svg>
            </span>
        </div>

        <div className="flex flex-col gap-y-1 items-end w-[210px] justify-center">
          <p className="   text-[25px] font-bold leading-8 text-right text-primary">
            استفسارات
          </p>
          <p className="   text-[10px]  font-normal leading-5 text-right text-primary">
            يبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
            مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
            كتيّب بمثابة دليل أو
          </p>
          <button onClick={()=>navigate('/contactus')} className=" bg-transparent ring-1 text-right px-3 ring-primary py-1 w-[160px] rounded-xl text-primary text-[18px]   font-normal ">
            {" "}
            <span className="absolute -mx-12 mt-[6.5px] ">
              {" "}
              <svg
                width="27"
                height="18"
                viewBox="0 0 37 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.21164 7.95576C1.21206 7.95535 1.2124 7.95487 1.21288 7.95445L8.43633 0.765838C8.97748 0.227308 9.85276 0.229328 10.3914 0.770538C10.93 1.31169 10.9279 2.18697 10.3868 2.72557L5.53697 7.55189H34.8138C35.5774 7.55189 36.1963 8.1708 36.1963 8.93432C36.1963 9.69782 35.5774 10.3167 34.8138 10.3167H5.53704L10.3867 15.1431C10.9279 15.6817 10.93 16.5569 10.3914 17.0981C9.8527 17.6394 8.97735 17.6412 8.43626 17.1028L1.21281 9.91418C1.21239 9.91377 1.21205 9.91328 1.21157 9.91285C0.670138 9.37248 0.671868 8.49436 1.21164 7.95576Z"
                  fill="#095EB2" />
              </svg>
            </span>{" "}
            تواصلوا معنا
          </button>
        </div>

        <div className="flex flex-col gap-y-1 items-end w-[210px] justify-center">
          <p className="   text-[25px] font-bold leading-8 text-right text-primary">
            تابعونا على{" "}
          </p>
          <p className="   text-[10px]  font-normal leading-5 text-right text-primary">
            يبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
            مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
            كتيّب بمثابة دليل أو
          </p>
          <div className="flex flex-row gap-x-3 -mx-7 w-full items-center justify-start">
            <svg
            className="cursor-pointer"
              width="43"
              height="49"
              viewBox="0 0 43 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.1218 48.3026C18.2705 48.3026 15.5044 47.7441 12.9004 46.6427C10.3852 45.5788 8.12637 44.0559 6.18654 42.1161C4.24673 40.1763 2.72375 37.9175 1.6599 35.4025C0.55847 32.7986 0 30.0326 0 27.1814V7.79825C0 4.50998 2.67548 1.83477 5.96409 1.83477L21.1218 -0.00195312L36.2794 1.83478C39.5677 1.83477 42.2429 4.50998 42.2429 7.79826V27.1814C42.2429 30.0326 41.6845 32.7986 40.5831 35.4025C39.5193 37.9176 37.9964 40.1763 36.0567 42.1161C34.1169 44.0559 31.8582 45.5788 29.3431 46.6427C26.7391 47.7441 23.9731 48.3026 21.1217 48.3026L21.1218 48.3026ZM14.4691 20.9261C13.9739 20.9261 13.7985 21.1016 13.7985 21.5967V25.462C13.7985 25.9571 13.9739 26.1326 14.4691 26.1326H17.6315V36.578C17.6315 37.0544 17.826 37.2486 18.3027 37.2486H22.2953C22.8514 37.2486 23.0299 37.0702 23.0299 36.5141V26.101H26.735C27.2737 26.101 27.4379 25.9443 27.4379 25.4304V21.565C27.4379 21.0526 27.2474 20.8621 26.735 20.8621H23.0299C23.0299 20.5284 23.0263 20.1986 23.0228 19.8795C23.0156 19.2334 23.0089 18.623 23.0299 17.9872C23.0299 17.106 23.4583 16.6776 24.3395 16.6776C25.2019 16.646 26.0789 16.646 26.9269 16.646C27.3748 16.646 27.5658 16.4549 27.5658 16.007V12.3658C27.5658 11.918 27.3748 11.7269 26.9269 11.7269H23.7968C22.9182 11.7269 22.1136 11.8628 21.3372 12.1423C20.0825 12.6044 19.1525 13.3774 18.494 14.5056C17.9136 15.5213 17.6315 16.702 17.6315 18.1151V20.9261L14.4691 20.9261Z"
                fill="#095EB2" />
            </svg>
            <svg
              className="cursor-pointer"
              width="43"
              height="49"
              viewBox="0 0 43 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.6867 48.3045C18.8354 48.3045 16.0693 47.7461 13.4653 46.6446C10.9502 45.5808 8.69131 44.0578 6.75148 42.118C4.81167 40.1783 3.28869 37.9195 2.22484 35.4044C1.12341 32.8005 0.564941 30.0346 0.564941 27.1833V7.8002C0.564941 4.51193 3.24042 1.83672 6.52903 1.83672L21.6867 0L36.8444 1.83673C40.1326 1.83672 42.8079 4.51193 42.8079 7.80021V27.1834C42.8079 30.0346 42.2494 32.8005 41.1481 35.4044C40.0843 37.9195 38.5614 40.1783 36.6216 42.1181C34.6819 44.0578 32.4231 45.5808 29.908 46.6446C27.3041 47.7461 24.538 48.3045 21.6867 48.3045L21.6867 48.3045ZM18.3399 18.2499V33.5231H23.0876V25.9433C23.0876 24.0059 23.424 22.0252 25.919 22.0252C28.3786 22.0252 28.3786 24.3562 28.3786 26.0582V33.4939H33.1269V25.143C33.1269 22.7053 32.8049 21.1086 32.0828 19.966C31.195 18.561 29.6746 17.878 27.4347 17.878C25.0713 17.878 23.5389 19.2033 22.9447 20.3382H22.8876V18.2499H18.3399ZM10.6179 18.2499V33.5231H15.3656V18.2499H10.6179ZM12.9917 10.6422C11.4777 10.6422 10.246 11.874 10.246 13.388C10.246 14.9178 11.4777 16.1624 12.9917 16.1624C14.5058 16.1624 15.7375 14.9178 15.7375 13.388C15.7375 11.874 14.5058 10.6422 12.9917 10.6422Z"
                fill="#095EB2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <img src={background} className="w-full block h-[200px]" />

      </div>
    </div></>
  );
};

export default Footer;
