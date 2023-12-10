import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FullBleedCarousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(items.length - 1);
  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: false,
    initialSlide: items.length - 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  const handlePrevArrowClick = () => {
    const newIndex = currentSlide - 1 >= 0 ? currentSlide - 1 : items.length - 1;
    setCurrentSlide(newIndex);
    sliderRef.current.slickGoTo(newIndex);
  };

  return (
    <div className="w-[1200px] ">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div className="mx-2 h-[440px]" key={index}>
            {item}
          </div>
        ))}
      </Slider>
      <div className="flex items-center justify-center gap-x-3 mt-5">
        <CustomPrevArrow onClick={handlePrevArrowClick} />
        <SliderDots
          items={items}
          currentSlide={currentSlide}
          handleDotClick={handleDotClick}
        />
        <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
};

const SliderDots = ({ items, currentSlide, handleDotClick }) => {
  return (
    <div className="flex gap-x-1">
      {items.map((_, index) => (
        <CustomDot
          key={index}
          current={index === currentSlide}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
};

const CustomDot = ({ current, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-4 w-4 rounded-full cursor-pointer mx-1 ${
        current
          ? "bg-secondary outline outline-2 outline-secondary"
          : "bg-white outline outline-2 outline-primary"
      }`}
    ></button>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onClick}
      width="17"
      height="22"
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9807 0.0566788C15.7629 0.226719 16.29 0.691477 16.511 1.48498C16.7548 2.35216 16.4884 3.07198 15.8706 3.68411C13.4901 6.05895 11.1039 8.42812 8.71772 10.7973C7.52747 11.9875 6.34288 13.1891 5.03361 14.5041L15.8819 25.3524C16.7888 26.2592 16.8398 27.5515 16.0406 28.3904C15.2414 29.2292 13.8868 29.2405 12.997 28.3564C8.88209 24.2642 4.77289 20.1549 0.680692 16.0401C-0.209168 15.1445 -0.231838 13.8863 0.646682 13.0078C4.75587 8.87021 8.87641 4.74967 13.0083 0.640459C13.5524 0.102009 14.2212 -0.113363 14.9807 0.0566673V0.0566788Z"
        fill="#095EB2"
      />
    </svg>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onClick}
      width="17"
      height="22"
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.85709 0.0566788C1.07492 0.226709 0.547813 0.691477 0.326763 1.48498C0.0830431 2.35216 0.349433 3.07198 0.967233 3.68411C3.34774 6.05895 5.73392 8.42812 8.1201 10.7973C9.31036 11.9875 10.495 13.1891 11.8042 14.5041L0.955903 25.3524C0.0490431 26.2592 -0.00196689 27.5515 0.797203 28.3904C1.59637 29.2292 2.951 29.2405 3.84086 28.3564C7.95574 24.2642 12.065 20.1549 16.1572 16.0401C17.047 15.1445 17.0697 13.8863 16.1912 13.0078C12.082 8.87021 7.96141 4.74967 3.82952 0.640459C3.2854 0.102009 2.61659 -0.113373 1.8571 0.0566673L1.85709 0.0566788Z"
        fill="#095EB2"
      />
    </svg>
  );
};

export default FullBleedCarousel;
