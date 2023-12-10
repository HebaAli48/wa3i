import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();

  const handleSlideChanged = ({ item }) => {
    setCurrentIndex(item);
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4},
  };

  const prevButton = (
    <div
      className={` rounded-full left-0 cursor-pointer mr-5 absolute top-1/2 transform -translate-y-11`}
      onClick={() => currentIndex !== 0 && carouselRef.current.slidePrev()}
    >
      <svg
        width="26"
        height="38"
        viewBox="0 0 26 38"
        style={{ fill: currentIndex === 0 ? "#B8B8B8" : "#095EB2" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.2912 1.14994L1.23312 17.6883C0.430107 18.3845 0.430107 19.5092 1.23312 20.2072L20.2912 36.7456C21.4505 37.7528 23.3365 37.7528 24.4978 36.7456C25.657 35.7384 25.657 34.1037 24.4978 33.0965L8.19461 18.9469L24.4978 4.80081C25.657 3.7918 25.657 2.15713 24.4978 1.14993C23.3365 0.142731 21.4505 0.142731 20.2912 1.14993"
        />
      </svg>
    </div>
  );

  const nextButton = (
    <div
      className={` rounded-full  cursor-pointer right-0 ml-5 absolute top-1/2 transform -translate-y-11`}
      onClick={() => currentIndex < items.length - 4 && handleNext()}
    >
      <svg
        width="26"
        height="38"
        viewBox="0 0 26 38"
        style={{
          fill: currentIndex >= items.length - 4 ? "#B8B8B8" : "#095EB2",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.70879 1.14994L24.767 17.6882C25.57 18.3844 25.57 19.5091 24.767 20.2071L5.70879 36.7453C4.54957 37.7525 2.66351 37.7525 1.50223 36.7453C0.343008 35.7381 0.343008 34.1034 1.50223 33.0963L17.8055 18.9467L1.50223 4.80078C0.343008 3.79178 0.343008 2.15712 1.50223 1.14993C2.66351 0.142731 4.54957 0.142731 5.70879 1.14993"
        />
      </svg>
    </div>
  );

  const handleInitialized = (c) => {
    setCurrentIndex(c.item);
    carouselRef.current = c.slide;
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 4;
    for (let i = 0; i < 4; i++) {
      carouselRef.current.slideNext();
    }
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative w-2/4 md:w-4/5 mt-10 bg-transparent mx-auto">
      
      <AliceCarousel
        disableDotsControls
        disableButtonsControls={false}
        autoPlay={false}
        infinite={false}
        responsive={responsive}
        mouseTracking
        items={items}
        startIndex={currentIndex}
        onSlideChanged={handleSlideChanged}
        onInitialized={handleInitialized}
        renderPrevButton={() => prevButton}
        renderNextButton={() => nextButton}
      />
    </div>
  );
}

export default Carousel;
