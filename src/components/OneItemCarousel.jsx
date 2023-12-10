import React, { useState, useRef } from "react";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OneItemCarousel = ({ items, color, showDots, ShowArrow, ArrowColor, numberOfItems }) => {
  const [currentSlide, setCurrentSlide] = useState(items.length - 1);
  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    slidesToShow: numberOfItems ? numberOfItems : 1,
    slidesToScroll: numberOfItems ? numberOfItems : 1,
    dots: false,
    initialSlide: numberOfItems ?  items.length - numberOfItems  : items.length - 1, // Set the initial slide to the last index
    afterChange: (index) => setCurrentSlide(index),
  };

  const handleDotClick = (index) => {
    const targetSlide = index * numberOfItems;
    setCurrentSlide(targetSlide);
    sliderRef.current.slickGoTo(targetSlide);
  };
  
  const SliderDots = ({ items, currentSlide, handleDotClick, color, numberOfItems }) => {
    const numberOfDots = Math.ceil(items.length / numberOfItems);
  
    return (
      <div className="flex gap-x-1">
        {Array.from({ length: numberOfDots }).map((_, index) => (
          <CustomDot
            key={index}
            color={color}
            current={currentSlide >= index * numberOfItems && currentSlide < (index + 1) * numberOfItems}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    );
  };
  

  return (
    <div className="w-full relative">
      <Slider className="pl-5" ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div className="w-full h-full overflow-hidden" key={index}>
            {item}
          </div>
        ))}
      </Slider>
      <div className="absolute -left-10 top-1/2">
        {ShowArrow && (
          <CustomPrevArrow
            ArrowColor={ArrowColor}
            currentSlide={currentSlide}
            onClick={() => sliderRef.current.slickPrev()}
          />
        )}
      </div>
      <div className="flex items-center justify-center gap-x-3 mt-5">
        {showDots && (
          <SliderDots
            numberOfItems={numberOfItems ? numberOfItems : 1}
            ArrowColor={ArrowColor}
            items={items}
            currentSlide={currentSlide}
            handleDotClick={handleDotClick}
            color={color}
          />
        )}
      </div>
      <div className="absolute -right-12 top-1/2">
        {ShowArrow && (
          <CustomNextArrow
            ArrowColor={ArrowColor}
            onClick={() => sliderRef.current.slickNext()}
            currentSlide={currentSlide}
            items={items}
          />
        )}
      </div>
    </div>
  );
};


const CustomDot = ({ current, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`h-3 w-3 rounded-full cursor-pointer -mt-3 mx-1 ${
        current ? color : "bg-white outline outline-2 outline-primary"
      }`}
    ></button>
  );
};

const CustomPrevArrow = ({ onClick, currentSlide, ArrowColor }) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onClick}
      width="17"
      height="22"
      viewBox="0 0 17 30"
      fill={currentSlide === 0 ? "#B8B8B8" : ArrowColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9807 0.0566788C15.7629 0.226719 16.29 0.691477 16.511 1.48498C16.7548 2.35216 16.4884 3.07198 15.8706 3.68411C13.4901 6.05895 11.1039 8.42812 8.71772 10.7973C7.52747 11.9875 6.34288 13.1891 5.03361 14.5041L15.8819 25.3524C16.7888 26.2592 16.8398 27.5515 16.0406 28.3904C15.2414 29.2292 13.8868 29.2405 12.997 28.3564C8.88209 24.2642 4.77289 20.1549 0.680692 16.0401C-0.209168 15.1445 -0.231838 13.8863 0.646682 13.0078C4.75587 8.87021 8.87641 4.74967 13.0083 0.640459C13.5524 0.102009 14.2212 -0.113363 14.9807 0.0566673V0.0566788Z"
        fill={currentSlide === 0 ? "#B8B8B8" : ArrowColor}
      />
    </svg>
  );
};

const CustomNextArrow = ({ onClick, currentSlide, items, ArrowColor }) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onClick}
      width="17"
      height="22"
      viewBox="0 0 17 30"
      fill={currentSlide >= items.length - 1 ? "#B8B8B8" : ArrowColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.85709 0.0566788C1.07492 0.226709 0.547813 0.691477 0.326763 1.48498C0.0830431 2.35216 0.349433 3.07198 0.967233 3.68411C3.34774 6.05895 5.73392 8.42812 8.1201 10.7973C9.31036 11.9875 10.495 13.1891 11.8042 14.5041L0.955903 25.3524C0.0490431 26.2592 -0.00196689 27.5515 0.797203 28.3904C1.59637 29.2292 2.951 29.2405 3.84086 28.3564C7.95574 24.2642 12.065 20.1549 16.1572 16.0401C17.047 15.1445 17.0697 13.8863 16.1912 13.0078C12.082 8.87021 7.96141 4.74967 3.82952 0.640459C3.2854 0.102009 2.61659 -0.113373 1.8571 0.0566673L1.85709 0.0566788Z"
        fill={currentSlide >= items.length - 1 ? "#B8B8B8" : ArrowColor}
      />
    </svg>
  );
};

export default OneItemCarousel;
