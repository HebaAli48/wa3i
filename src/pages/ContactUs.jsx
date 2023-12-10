import React from "react";
import Ellipse from "../assets/Ellipse.png";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/teen.png";
const ContactUs = () => {
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
      <Navbar />
      <div className="-z-20 ">
        <img src={Ellipse} className="-mt-[450px] relative w-full h-[600px] " />
        <p className=" absolute    text-primary font-extrabold text-[35px] leading-[48px]  top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          تواصلوا معنا
        </p>
      </div>

      <div  className="flex relative flex-col justify-center w-full items-center mt-16 mb-56">
        <div className="flex flex-row items-start space-x-40 justify-center ">
          <div className="flex flex-col items-end justify-end gap-y-4">
            <p className="font-extrabold text-[35px] text-primary">
              {" "}
              يمكنكم أيضا التواصل معنا عن طريق{" "}
            </p>
            <div className="flex flex-row-reverse gap-x-2 items-center justify-center">
              <svg
                width="44"
                height="49"
                viewBox="0 0 44 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.9285 48.8477C16.2844 48.8477 10.9792 46.6504 6.99096 42.6602C3.00121 38.6699 0.803955 33.3652 0.803955 27.7227V8.34179C0.803955 5.05273 3.47974 2.37695 6.76929 2.37695L21.9285 0.539062L37.0876 2.37695C40.3738 2.37695 43.0471 5.05273 43.0471 8.34179V27.7227C43.0471 33.3652 40.8503 38.6699 36.8606 42.6602C32.8733 46.6504 27.5701 48.8477 21.9285 48.8477ZM10.2493 18.084C10.2444 18.1465 10.2366 18.2051 10.2288 18.2617L10.2273 18.2715C10.2146 18.3633 10.2024 18.4473 10.2024 18.541V30.541C10.2083 33.293 12.4514 35.5371 15.2029 35.543H29.2039C31.9612 35.5371 34.2044 33.293 34.2044 30.541V18.541C34.2044 18.4297 34.1907 18.332 34.176 18.2266L34.1716 18.1953C34.1668 18.1582 34.1619 18.123 34.1575 18.084L25.7415 26.5C24.7966 27.4434 23.5413 27.9648 22.2063 27.9648C20.8713 27.9648 19.616 27.4434 18.6711 26.5L10.2493 18.084H10.2493ZM15.2029 13.541C13.448 13.5488 11.8586 14.4492 10.9509 15.9492L20.0803 25.0859C20.6531 25.6523 21.407 25.9629 22.2034 25.9629C23.0056 25.9629 23.7595 25.6523 24.3264 25.0859L33.4617 15.9492C32.5671 14.4687 30.9358 13.5469 29.2039 13.541H15.2029Z"
                  fill="#095EB2"
                />
              </svg>
              <p className="font-normal text-[#666666] text-[22px]">
                البريد الإلكتروني
              </p>
            </div>

            <div className="flex flex-row-reverse gap-x-2 items-center justify-center">
              <svg
                width="44"
                height="50"
                viewBox="0 0 44 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.9285 49.168C16.2844 49.168 10.9792 46.9707 6.99096 42.9805C3.00121 38.9902 0.803955 33.6855 0.803955 28.043V8.66211C0.803955 5.37304 3.47974 2.69727 6.76929 2.69727L21.9285 0.859375L37.0876 2.69727C40.3738 2.69727 43.0471 5.37304 43.0471 8.66211V28.043C43.0471 33.6855 40.8503 38.9902 36.8606 42.9805C32.8733 46.9707 27.5701 49.168 21.9285 49.168ZM14.9861 13.0117C14.1838 13.0117 13.4236 13.3164 12.8459 13.873L11.6936 14.873C9.02174 17.9727 9.89429 21.752 11.0974 24.375C12.5061 27.4492 15.156 30.6367 18.3679 33.1211C21.5764 35.5996 24.886 37.0195 27.4495 37.0195C27.5247 37.0195 27.5955 37.0195 27.6716 37.0137H27.7146C29.3479 37.0137 30.9436 36.3457 32.093 35.1777L33.0051 34.1309C34.2083 32.9219 34.2078 30.959 33.0051 29.75C32.9578 29.7129 30.5877 27.8828 30.5667 27.8672C29.989 27.3184 29.2307 27.0156 28.4319 27.0156C27.6292 27.0156 26.8669 27.3203 26.2854 27.873L24.3792 29.4824C22.8157 28.8359 21.4172 27.9004 20.221 26.7012C19.0242 25.502 18.0916 24.1016 17.4485 22.5391L19.0452 20.6387C20.1936 19.4375 20.1985 17.5566 19.0569 16.3574C19.0422 16.3379 17.2024 13.9531 17.1677 13.9199C16.5877 13.334 15.8128 13.0117 14.9861 13.0117L14.9861 13.0117ZM23.9109 13.0137C23.3596 13.0137 22.9109 13.4609 22.9109 14.0137C22.9109 14.5664 23.3596 15.0137 23.9109 15.0137C26.0457 15.0156 28.0535 15.8496 29.5647 17.3613C31.0754 18.8711 31.9089 20.8789 31.9114 23.0137C31.9114 23.5664 32.3601 24.0137 32.9119 24.0137C33.4631 24.0137 33.9119 23.5664 33.9119 23.0137C33.906 17.5059 29.4197 13.0195 23.9109 13.0137ZM23.9109 17.0137C23.3596 17.0137 22.9109 17.4609 22.9109 18.0137C22.9109 18.5664 23.3596 19.0137 23.9109 19.0137C26.1169 19.0137 27.9114 20.8086 27.9114 23.0137C27.9114 23.5664 28.3601 24.0137 28.9114 24.0137C29.4626 24.0137 29.9114 23.5664 29.9114 23.0137C29.9114 19.7051 27.2195 17.0137 23.9109 17.0137Z"
                  fill="#095EB2"
                />
              </svg>

              <p className="font-normal text-[#666666] text-[22px]">
                رقم التليفون
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end gap-y-4">
            <p className="font-extrabold text-[35px] text-primary">
              الاستفسارات و الشكاوى و المقترحات
            </p>

            <div className="flex flex-col gap-y-3  items-end justify-center">
              <p className="font-bold text-[24px] text-primary text-right">
                الاسم الأول
              </p>
              <input className="w-[400px] text-right py-2 px-3 rounded-[35px] h-[60px] outline outline-2 outline-primary" />
            </div>

            <div className="flex flex-col gap-y-3  items-end justify-center">
              <p className="font-bold text-[24px] text-primary text-right">
                اسم العائلة
              </p>
              <input className="w-[400px] text-right py-2 px-3 rounded-[35px] h-[60px] outline outline-2 outline-primary" />
            </div>

            <div className="flex flex-col gap-y-3  items-end justify-center">
              <p className="font-bold text-[24px] text-primary text-right">
                البريد الإلكتروني
              </p>
              <input className="w-[400px] text-right py-2 px-3 rounded-[35px] h-[60px] outline outline-2 outline-primary" />
            </div>

            <div className="flex flex-col gap-y-3 items-end justify-center">
              <p className="font-bold text-[24px] text-primary text-right">
                الشكوى او المقترح
              </p>
              <textarea
                className="w-[400px] py-2 px-3 rounded-[35px] h-[100px] resize-none outline outline-2 outline-primary whitespace-normal overflow-hidden"
                dir="rtl"
              ></textarea>
            </div>
           <div className="flex items-start justify-start w-full -mx-5 mt-10">
            <button className="   font-bold text-[30px] bg-primary text-white rounded-[35px] py-2 px-16">
            ارسل
          </button>
          </div>
          </div>
        </div>

        

      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
