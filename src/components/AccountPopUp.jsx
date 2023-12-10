import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Modal from "react-modal";
const AccountPopUp = ({ index, isOpen, closeModal }) => {
  const [item1, setItem] = useState(2);

  useEffect(() => {
    setItem(index);
  },[]);
  const handleIndex = (index) => {
    setItem(index);
  };

  const items = [
    //Account
    {
      id: 1,
      title: "Account",
      content: (
        <div className="relative w-[500px] h-[700px]">
          <div
            onClick={closeModal}
            className="absolute right-5 top-2 cursor-pointer w-8 h-8 flex items-center justify-center text-[30px] hover:bg-secondary hover:text-white text-primary rounded-full p-1 bg-white"
          >
            {" "}
            X{" "}
          </div>
          <div className="flex flex-col gap-y-8 items-center justify-center">
            <img src={logo} />
            <svg
              width="60"
              height="68"
              viewBox="0 0 60 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.97754 2.59778L29.9996 0.0507812L51.022 2.59778C55.5902 2.59778 59.2932 6.30094 59.2932 10.8691V37.7512C59.2932 53.9291 46.1786 67.0448 29.9996 67.0448C13.8219 67.0448 0.706055 53.9291 0.706055 37.7512V10.8691C0.706055 6.30093 4.4093 2.59778 8.97753 2.59778"
                fill="#095EB2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.8068 32.1497C31.8428 32.1497 33.6069 31.4191 35.048 29.9781C36.4889 28.5372 37.2194 26.7741 37.2194 24.737C37.2194 22.7009 36.4889 20.9378 35.048 19.4958C33.6069 18.0548 31.8428 17.3242 29.8068 17.3242C27.7695 17.3242 26.0066 18.0548 24.5657 19.4958C23.1246 20.9367 22.394 22.7008 22.394 24.737C22.394 26.7741 23.1246 28.5372 24.5657 29.9781C26.0066 31.4191 27.7708 32.1497 29.8068 32.1497Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.7772 40.9907C42.7355 40.3913 42.6512 39.7364 42.5274 39.0463C42.4028 38.3498 42.2418 37.6917 42.0498 37.0902C41.8502 36.4695 41.5792 35.8551 41.2455 35.2674C40.8989 34.6563 40.4905 34.1251 40.0339 33.6878C39.555 33.2302 38.9696 32.8623 38.2922 32.5935C37.617 32.3269 36.8692 32.1914 36.0693 32.1914C35.7558 32.1914 35.4518 32.3204 34.8652 32.7023C34.5036 32.938 34.0814 33.21 33.6098 33.5118C33.2066 33.7689 32.6607 34.0088 31.9853 34.2275C31.3275 34.4398 30.6598 34.5475 29.9994 34.5475C29.3404 34.5475 28.6727 34.4398 28.0135 34.2275C27.3395 34.0089 26.7934 33.7689 26.3902 33.5118C25.9228 33.2132 25.5006 32.9412 25.1348 32.7023C24.5485 32.3204 24.2443 32.1914 23.9296 32.1914C23.1296 32.1914 22.3821 32.3269 21.7079 32.5935C21.0306 32.8623 20.4451 33.2302 19.9661 33.6878C19.5084 34.1251 19.1013 34.6573 18.7545 35.2674C18.4206 35.8551 18.1499 36.4695 17.9514 37.0913C17.7583 37.6928 17.5973 38.3498 17.4726 39.0463C17.349 39.7353 17.2644 40.3902 17.223 40.9917C17.1824 41.5805 17.1621 42.1917 17.1621 42.8092C17.1621 44.4155 17.673 45.7156 18.6799 46.6755C19.6739 47.6216 20.99 48.1016 22.5909 48.1016H37.41C39.011 48.1016 40.3262 47.6216 41.3214 46.6755C42.328 45.7167 42.8389 44.4155 42.8389 42.8081C42.8389 42.1884 42.8176 41.5762 42.7772 40.9907L42.7772 40.9907Z"
                fill="white"
              />
            </svg>
            <p className="  font-normal text-[34px] text-primary">
              اسم المستخدم
            </p>
            <input
              placeholder="البريد الإلكتروني"
              className=" w-[400px] focus:outline-transparent placeholder-primary border-[#707070] border-b-2 text-right  px-2 py-4"
            />
            <input
              placeholder="رقم التليفون"
              className="w-[400px] focus:outline-transparent placeholder-primary border-[#707070] border-b-2 text-right  px-2 py-4"
            />
            <input
              placeholder="كلمة المرور"
              className="w-[400px] focus:outline-transparent placeholder-primary border-[#707070] border-b-2 text-right  px-2 py-4"
            />
          </div>
          <button className="absolute bottom-9 left-10   font-bold text-[18px] bg-primary text-white rounded-3xl py-2 px-4">
            حفظ و رجوع
          </button>
        </div>
      ),
    },
   // Login
    {
      id: 2,
      title: "Login",
      content: (
        <div className="relative w-[500px] h-[700px]">
          <div
            onClick={closeModal}
            className="absolute right-5 top-2 cursor-pointer w-8 h-8 flex items-center justify-center text-[30px] hover:bg-secondary hover:text-white text-primary rounded-full p-1 bg-white"
          >
            {" "}
            X{" "}
          </div>
          <div className="flex flex-col gap-y-8 items-center justify-center">
            <img src={logo} />
            <svg
              width="60"
              height="68"
              viewBox="0 0 60 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.97754 2.59778L29.9996 0.0507812L51.022 2.59778C55.5902 2.59778 59.2932 6.30094 59.2932 10.8691V37.7512C59.2932 53.9291 46.1786 67.0448 29.9996 67.0448C13.8219 67.0448 0.706055 53.9291 0.706055 37.7512V10.8691C0.706055 6.30093 4.4093 2.59778 8.97753 2.59778"
                fill="#095EB2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.8068 32.1497C31.8428 32.1497 33.6069 31.4191 35.048 29.9781C36.4889 28.5372 37.2194 26.7741 37.2194 24.737C37.2194 22.7009 36.4889 20.9378 35.048 19.4958C33.6069 18.0548 31.8428 17.3242 29.8068 17.3242C27.7695 17.3242 26.0066 18.0548 24.5657 19.4958C23.1246 20.9367 22.394 22.7008 22.394 24.737C22.394 26.7741 23.1246 28.5372 24.5657 29.9781C26.0066 31.4191 27.7708 32.1497 29.8068 32.1497Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.7772 40.9907C42.7355 40.3913 42.6512 39.7364 42.5274 39.0463C42.4028 38.3498 42.2418 37.6917 42.0498 37.0902C41.8502 36.4695 41.5792 35.8551 41.2455 35.2674C40.8989 34.6563 40.4905 34.1251 40.0339 33.6878C39.555 33.2302 38.9696 32.8623 38.2922 32.5935C37.617 32.3269 36.8692 32.1914 36.0693 32.1914C35.7558 32.1914 35.4518 32.3204 34.8652 32.7023C34.5036 32.938 34.0814 33.21 33.6098 33.5118C33.2066 33.7689 32.6607 34.0088 31.9853 34.2275C31.3275 34.4398 30.6598 34.5475 29.9994 34.5475C29.3404 34.5475 28.6727 34.4398 28.0135 34.2275C27.3395 34.0089 26.7934 33.7689 26.3902 33.5118C25.9228 33.2132 25.5006 32.9412 25.1348 32.7023C24.5485 32.3204 24.2443 32.1914 23.9296 32.1914C23.1296 32.1914 22.3821 32.3269 21.7079 32.5935C21.0306 32.8623 20.4451 33.2302 19.9661 33.6878C19.5084 34.1251 19.1013 34.6573 18.7545 35.2674C18.4206 35.8551 18.1499 36.4695 17.9514 37.0913C17.7583 37.6928 17.5973 38.3498 17.4726 39.0463C17.349 39.7353 17.2644 40.3902 17.223 40.9917C17.1824 41.5805 17.1621 42.1917 17.1621 42.8092C17.1621 44.4155 17.673 45.7156 18.6799 46.6755C19.6739 47.6216 20.99 48.1016 22.5909 48.1016H37.41C39.011 48.1016 40.3262 47.6216 41.3214 46.6755C42.328 45.7167 42.8389 44.4155 42.8389 42.8081C42.8389 42.1884 42.8176 41.5762 42.7772 40.9907L42.7772 40.9907Z"
                fill="white"
              />
            </svg>
            <p className="  font-normal text-[34px] text-primary">
              تسجيل دخول
            </p>
            <input
              placeholder="البريد الإلكتروني"
              className=" w-[400px] pr-4  placeholder-[#707070] border-primary rounded-3xl border-2 text-right  px-2 py-4"
            />
            <input
              placeholder="كلمة المرور"
              className="w-[400px] pr-4 placeholder-[#707070] border-primary  rounded-3xl border-2 text-right  px-2 py-4"
            />
          </div>
          <button className="absolute bottom-40 left-14   font-bold text-[18px] bg-primary text-white rounded-3xl py-2 px-10">
            تسجيل
          </button>
          <button onClick={()=>handleIndex(3)} className="absolute bottom-10 left-[70px]   text-primary underline-offset-8 underline font-normal text-[16px] ">
            انشاء حساب
          </button>
          <button onClick={()=>handleIndex(4)} className="absolute bottom-10 left-[340px]   text-secondary  font-normal text-[16px] ">
            هل نسيت كلمة المرور؟
          </button>
        </div>
      ),
    },
    //SignUp
    {
      id: 3,
      title: "SignUp",
      content: (
        <div className="relative w-[500px] h-[700px]">
          <div
            onClick={closeModal}
            className="absolute right-5 top-2 cursor-pointer w-8 h-8 flex items-center justify-center text-[30px] hover:bg-secondary hover:text-white text-primary rounded-full p-1 bg-white"
          >
            {" "}
            X{" "}
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <img src={logo} />
            <svg
              width="60"
              height="68"
              viewBox="0 0 60 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.97754 2.59778L29.9996 0.0507812L51.022 2.59778C55.5902 2.59778 59.2932 6.30094 59.2932 10.8691V37.7512C59.2932 53.9291 46.1786 67.0448 29.9996 67.0448C13.8219 67.0448 0.706055 53.9291 0.706055 37.7512V10.8691C0.706055 6.30093 4.4093 2.59778 8.97753 2.59778"
                fill="#095EB2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.8068 32.1497C31.8428 32.1497 33.6069 31.4191 35.048 29.9781C36.4889 28.5372 37.2194 26.7741 37.2194 24.737C37.2194 22.7009 36.4889 20.9378 35.048 19.4958C33.6069 18.0548 31.8428 17.3242 29.8068 17.3242C27.7695 17.3242 26.0066 18.0548 24.5657 19.4958C23.1246 20.9367 22.394 22.7008 22.394 24.737C22.394 26.7741 23.1246 28.5372 24.5657 29.9781C26.0066 31.4191 27.7708 32.1497 29.8068 32.1497Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.7772 40.9907C42.7355 40.3913 42.6512 39.7364 42.5274 39.0463C42.4028 38.3498 42.2418 37.6917 42.0498 37.0902C41.8502 36.4695 41.5792 35.8551 41.2455 35.2674C40.8989 34.6563 40.4905 34.1251 40.0339 33.6878C39.555 33.2302 38.9696 32.8623 38.2922 32.5935C37.617 32.3269 36.8692 32.1914 36.0693 32.1914C35.7558 32.1914 35.4518 32.3204 34.8652 32.7023C34.5036 32.938 34.0814 33.21 33.6098 33.5118C33.2066 33.7689 32.6607 34.0088 31.9853 34.2275C31.3275 34.4398 30.6598 34.5475 29.9994 34.5475C29.3404 34.5475 28.6727 34.4398 28.0135 34.2275C27.3395 34.0089 26.7934 33.7689 26.3902 33.5118C25.9228 33.2132 25.5006 32.9412 25.1348 32.7023C24.5485 32.3204 24.2443 32.1914 23.9296 32.1914C23.1296 32.1914 22.3821 32.3269 21.7079 32.5935C21.0306 32.8623 20.4451 33.2302 19.9661 33.6878C19.5084 34.1251 19.1013 34.6573 18.7545 35.2674C18.4206 35.8551 18.1499 36.4695 17.9514 37.0913C17.7583 37.6928 17.5973 38.3498 17.4726 39.0463C17.349 39.7353 17.2644 40.3902 17.223 40.9917C17.1824 41.5805 17.1621 42.1917 17.1621 42.8092C17.1621 44.4155 17.673 45.7156 18.6799 46.6755C19.6739 47.6216 20.99 48.1016 22.5909 48.1016H37.41C39.011 48.1016 40.3262 47.6216 41.3214 46.6755C42.328 45.7167 42.8389 44.4155 42.8389 42.8081C42.8389 42.1884 42.8176 41.5762 42.7772 40.9907L42.7772 40.9907Z"
                fill="white"
              />
            </svg>
            <p className="  font-normal text-[34px] text-primary">
              انشاء حساب
            </p>
            <div className="flex flex-row items-center justify-center gap-x-2 w-[400px]">
              <input
                placeholder="الاسم الأول"
                className=" pr-4 w-auto  placeholder-[#707070] border-primary rounded-3xl border-2 text-right  px-2 py-4"
              />
              <input
                placeholder="اسم العائلة"
                className="pr-4 w-auto placeholder-[#707070] border-primary  rounded-3xl border-2 text-right  px-2 py-4"
              />
            </div>
            <input
              placeholder="البريد الإلكتروني"
              className=" w-[420px] pr-4  placeholder-[#707070] border-primary rounded-3xl border-2 text-right  px-2 py-4"
            />
            <input
              placeholder="رقم التليفون"
              className="w-[420px] pr-4  placeholder-[#707070] border-primary  rounded-3xl border-2 text-right  px-2 py-4"
            />
            <input
              placeholder="كلمة المرور"
              className="w-[420px] pr-4 placeholder-[#707070] border-primary  rounded-3xl border-2 text-right  px-2 py-4"
            />
            <input
              placeholder="تأكيد كلمة المرور"
              className="w-[420px] pr-4 placeholder-[#707070] border-primary  rounded-3xl border-2 text-right  px-2 py-4"
            />
          </div>
          <button  className="absolute bottom-5 left-14   font-bold text-[18px] bg-primary text-white rounded-3xl py-2 px-10">
          إنشئ حساب
          </button>
          <button onClick={()=>handleIndex(2)} className="absolute bottom-7 left-[380px]   text-primary underline-offset-8 underline font-normal text-[16px] ">
          تسجيل دخول
          </button>
        </div>
      ),
    },
    //Forgot Password 
    {
      id: 4,
      title: "Forgot Password",
      content: (
        <div  className="relative w-[500px] h-[700px]">
          <div onClick={closeModal} className="absolute right-5 top-2 cursor-pointer w-8 h-8 flex items-center justify-center text-[30px] hover:bg-secondary hover:text-white text-primary rounded-full p-1 bg-white">
            {" "}
            X{" "}
          </div>
          <div className="flex flex-col gap-y-8 items-center justify-center">
            <img src={logo} />
            <svg
              width="60"
              height="68"
              viewBox="0 0 60 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.97754 2.59778L29.9996 0.0507812L51.022 2.59778C55.5902 2.59778 59.2932 6.30094 59.2932 10.8691V37.7512C59.2932 53.9291 46.1786 67.0448 29.9996 67.0448C13.8219 67.0448 0.706055 53.9291 0.706055 37.7512V10.8691C0.706055 6.30093 4.4093 2.59778 8.97753 2.59778"
                fill="#095EB2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.8068 32.1497C31.8428 32.1497 33.6069 31.4191 35.048 29.9781C36.4889 28.5372 37.2194 26.7741 37.2194 24.737C37.2194 22.7009 36.4889 20.9378 35.048 19.4958C33.6069 18.0548 31.8428 17.3242 29.8068 17.3242C27.7695 17.3242 26.0066 18.0548 24.5657 19.4958C23.1246 20.9367 22.394 22.7008 22.394 24.737C22.394 26.7741 23.1246 28.5372 24.5657 29.9781C26.0066 31.4191 27.7708 32.1497 29.8068 32.1497Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.7772 40.9907C42.7355 40.3913 42.6512 39.7364 42.5274 39.0463C42.4028 38.3498 42.2418 37.6917 42.0498 37.0902C41.8502 36.4695 41.5792 35.8551 41.2455 35.2674C40.8989 34.6563 40.4905 34.1251 40.0339 33.6878C39.555 33.2302 38.9696 32.8623 38.2922 32.5935C37.617 32.3269 36.8692 32.1914 36.0693 32.1914C35.7558 32.1914 35.4518 32.3204 34.8652 32.7023C34.5036 32.938 34.0814 33.21 33.6098 33.5118C33.2066 33.7689 32.6607 34.0088 31.9853 34.2275C31.3275 34.4398 30.6598 34.5475 29.9994 34.5475C29.3404 34.5475 28.6727 34.4398 28.0135 34.2275C27.3395 34.0089 26.7934 33.7689 26.3902 33.5118C25.9228 33.2132 25.5006 32.9412 25.1348 32.7023C24.5485 32.3204 24.2443 32.1914 23.9296 32.1914C23.1296 32.1914 22.3821 32.3269 21.7079 32.5935C21.0306 32.8623 20.4451 33.2302 19.9661 33.6878C19.5084 34.1251 19.1013 34.6573 18.7545 35.2674C18.4206 35.8551 18.1499 36.4695 17.9514 37.0913C17.7583 37.6928 17.5973 38.3498 17.4726 39.0463C17.349 39.7353 17.2644 40.3902 17.223 40.9917C17.1824 41.5805 17.1621 42.1917 17.1621 42.8092C17.1621 44.4155 17.673 45.7156 18.6799 46.6755C19.6739 47.6216 20.99 48.1016 22.5909 48.1016H37.41C39.011 48.1016 40.3262 47.6216 41.3214 46.6755C42.328 45.7167 42.8389 44.4155 42.8389 42.8081C42.8389 42.1884 42.8176 41.5762 42.7772 40.9907L42.7772 40.9907Z"
                fill="white"
              />
            </svg>
            <p className="  font-normal text-[34px] text-primary">
              هل نسيت كلمة المرور؟
            </p>
            <input
              placeholder="البريد الإلكتروني"
              className=" w-[400px] pr-4  placeholder-[#707070] border-primary rounded-3xl border-2 text-right  px-2 py-4"
            />
          </div>
          <button className="absolute bottom-64 left-14   font-bold text-[18px] bg-primary text-white rounded-3xl py-2 px-10">
            ارسل
          </button>
          <button className="absolute bottom-64 left-[300px]   text-primary underline-offset-8 underline font-normal text-[16px] ">
            لم تتلقى رسالة؟ اعد الارسال
          </button>
          <div onClick={()=>setItem(2)} >

          
          <button className="absolute bottom-40 left-[380px]   text-primary underline-offset-8 underline  font-normal text-[16px] ">
            تسجيل دخول
          </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center shadow-slate-300 shadow-lg"
      overlayClassName="fixed z-50  inset-0 bg-gray-500 bg-opacity-50"
      ariaHideApp={false} // Prevents a warning about appElement not being defined
    >
      <div className="bg-white p-8 rounded-[35px]">
        {item1 === 1 ? <>{items[0].content}</> : ""}
        {item1 === 2 ? <>{items[1].content}</> : ""}
        {item1 === 3 ? <>{items[2].content}</> : ""}
        {item1 === 4 ? <>{items[3].content}</> : ""}
      </div>
    </Modal>
  );
};

export default AccountPopUp;
