import React, { useState} from "react";
import image from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import LeftSideMenu from "./LeftSideMenu";
import DropDown from "./DropDown";
import AccountPopUp from "./AccountPopUp";
const Navbar = ({ showLeftMenu, showRightMenu, items, index , leftMenuItems ,showLeftDropDown }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="flex flex-col right-0 left-0">
        <div className="flex flex-row-reverse items-center gap-x-[40px]   h-[50px] z-30 bg-primary rounded-b-[28px]">
          <p onClick={() => navigate("/aboutus")} className="font-normal text-[22px]   leading-[32.4px] mr-[303px] text-white hover:text-secondary hover:underline hover:underline-offset-8 cursor-pointer ">
            من نحن
          </p>
          <p onClick={() => navigate("/events")} className="font-normal text-[22px]   leading-[32.4px] text-white hover:text-secondary hover:underline hover:underline-offset-8 cursor-pointer  ">
            فعاليات
          </p>
          <p onClick={() => navigate("/keytopics")} className="font-normal text-[22px]   leading-[32.4px] text-white hover:text-secondary hover:underline hover:underline-offset-8 cursor-pointer  ">
            مواضيع هامة
          </p>
          <p
            onClick={() => navigate("/guidelines")}
            className="font-normal text-[22px]   leading-[32.4px] text-white hover:text-secondary hover:underline hover:underline-offset-8 cursor-pointer "
          >
            مصادرالمعرفة والدعم
          </p>
        </div>

        <div className="flex flex-row-reverse items-center justify-between  h-[195.5px] z-20 -mt-20 bg-white shadow-lg rounded-b-3xl">
          <img  onClick={() => navigate("/")} src={image} className="h-[95.58px] cursor-pointer mr-[210px] mt-[88px] " />
          <div className="flex flex-row-reverse items-center ml-[210px] gap-x-10 ">
            <SearchBar />
            <AccountPopUp index={2} isOpen={isModalOpen} closeModal={closeModal}/>
            <div  onClick={openModal} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="flex flex-row-reverse items-center hover:scale-105 cursor-pointer transform origin-top-left transition-transform  ">
              <div className="z-20">
                <svg
                  className="mt-[88px] -ml-10"
                  width="56"
                  height="59"
                  viewBox="0 0 52 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.37428 2.24307L25.8881 0L44.4017 2.24307C48.4249 2.24307 51.6862 5.50435 51.6862 9.52743V33.2018C51.6862 47.4493 40.1364 59 25.8881 59C11.6408 59 0.0898438 47.4493 0.0898438 33.2018V9.52743C0.0898438 5.50436 3.35107 2.24307 7.37426 2.24307"
                    fill={ isHovered ? "white" : "#2EE5C2" }
                    stroke={ isHovered ? "#095EB2" : "#2EE5C2" }
                    strokeWidth="2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.7175 28.2693C27.5107 28.2693 29.0643 27.6259 30.3334 26.3569C31.6024 25.0879 32.2457 23.5352 32.2457 21.7411C32.2457 19.948 31.6024 18.3953 30.3334 17.1253C29.0643 15.8563 27.5107 15.2129 25.7175 15.2129C23.9235 15.2129 22.3709 15.8563 21.1019 17.1253C19.8329 18.3943 19.1895 19.948 19.1895 21.7411C19.1895 23.5352 19.8329 25.0879 21.1019 26.3569C22.3709 27.6259 23.9244 28.2693 25.7175 28.2693Z"
                    fill={ isHovered ? "#095EB2" : "white" }
                   
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.1405 36.056C37.1037 35.5281 37.0296 34.9513 36.9205 34.3436C36.8108 33.7302 36.6691 33.1507 36.4999 32.6209C36.3242 32.0742 36.0856 31.5332 35.7915 31.0156C35.4864 30.4774 35.1266 30.0096 34.7246 29.6245C34.3029 29.2215 33.7873 28.8975 33.1907 28.6608C32.5961 28.4259 31.9376 28.3066 31.2331 28.3066C30.9569 28.3066 30.6893 28.4203 30.1727 28.7566C29.8542 28.9642 29.4823 29.2037 29.0671 29.4695C28.712 29.6959 28.2312 29.9072 27.6365 30.0998C27.0571 30.2867 26.469 30.3816 25.8876 30.3816C25.3071 30.3816 24.7191 30.2867 24.1386 30.0998C23.5449 29.9072 23.064 29.6959 22.709 29.4695C22.2974 29.2065 21.9254 28.967 21.6033 28.7566C21.0868 28.4203 20.819 28.3066 20.5419 28.3066C19.8375 28.3066 19.1791 28.4259 18.5853 28.6608C17.9889 28.8975 17.4732 29.2215 17.0514 29.6245C16.6483 30.0096 16.2898 30.4783 15.9845 31.0156C15.6902 31.5332 15.4518 32.0742 15.2771 32.6218C15.1069 33.1516 14.9652 33.7302 14.8554 34.3436C14.7466 34.9504 14.672 35.5271 14.6356 36.0569C14.5999 36.5754 14.582 37.1136 14.582 37.6575C14.582 39.0721 15.0319 40.2171 15.9186 41.0625C16.7941 41.8957 17.9531 42.3183 19.363 42.3183H32.4138C33.8237 42.3183 34.9821 41.8956 35.8584 41.0625C36.7449 40.218 37.195 39.0721 37.195 37.6565C37.195 37.1108 37.1762 36.5716 37.1405 36.056H37.1405Z"
                    fill={ isHovered ? "#095EB2" : "white" }
                    
                  />
                </svg>
              </div>

              <button className={`  h-[40px] w-[150px] pr-9 leading-[28px] mt-[88px] align-middle bg-secondary ${isHovered? 'bg-white text-primary outline outline-2 outline-primary':'text-white'}    rounded-3xl z-10 text-[17px] font-bold`}>
                تسجيل دخول
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-row items-center justify-center z-10">
          <div className="">
            {showRightMenu && (
              <Menu items={items} align="right-0" index={index} />
            )}
          </div>
          <div onClick={() => navigate("/women")} className="w-[12.5%] flex text-primary cursor-pointer items-center justify-center hover:text-white hover:bg-[#C63030] h-[53px] hover:scale-110 transform origin-top-left transition-transform shadow-lg rounded-b-3xl bg-white">
            <p className="  font-bold text-base leading-[21px]">
              سيدات
            </p>
          </div>

          <div onClick={() => navigate("/eldery")} className="w-[12.5%] flex text-primary cursor-pointer items-center justify-center hover:text-white hover:bg-[#07A0A0] h-[53px] hover:scale-110 transform origin-top-left transition-transform shadow-lg rounded-b-3xl bg-white  ">
            <p className="    font-bold text-base leading-[21px]">
              كبار السن
            </p>
          </div>
          <div onClick={() => navigate("/parents")} className="w-[12.5%] flex text-primary cursor-pointer items-center justify-center hover:text-white hover:bg-[#DB7575] h-[53px] hover:scale-110 transform origin-top-left transition-transform shadow-lg rounded-b-3xl bg-white  ">
            <p className="    font-bold text-base leading-[21px]">
              آباء و وصاه
            </p>
          </div>
          <div  onClick={() => navigate("/teachers")} className="w-[12.5%] flex text-primary cursor-pointer items-center justify-center hover:text-white hover:bg-[#C1A633]  h-[53px] hover:scale-110 transform origin-top-left transition-transform shadow-lg rounded-b-3xl bg-white  ">
            <p className="    font-bold text-base leading-[21px]">
              المعلمين
            </p>
          </div>
          <div onClick={() => navigate("/youth")} className="w-[12.5%] flex text-primary cursor-pointer items-center justify-center hover:text-white hover:bg-[#64508C] h-[53px] hover:scale-110 transform origin-top-left transition-transform shadow-lg rounded-b-3xl bg-white  ">
            <p className="    font-bold text-base leading-[21px]">
              شباب
            </p>
          </div>
          <div className="w-[12.5%] flex text-primary cursor-pointer items-center justify-center hover:text-white hover:bg-[#78D5D7] h-[53px] hover:scale-110 transform origin-top-left transition-transform shadow-lg rounded-b-3xl bg-white  ">
            <p className="    font-bold text-base leading-[21px]">
              اطفال
            </p>
          </div>

          <div className="left-0">{showLeftMenu && <LeftSideMenu  items={leftMenuItems} />}</div>
          <div className="left-0">{showLeftDropDown && <DropDown  items={leftMenuItems} />}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
