import React from "react";
import Navbar from "../components/Navbar";

const Base = () => {
  return (
    <div>
      <Navbar />
      <div className="-z-20">
        <svg
          className="-mt-56  "
          width="1620"
          height="500"
          viewBox="0 0 1920 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.03"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M960.5 500C1564.62 500 2054.36 385.833 2054.36 245C2054.36 104.167 1564.62 -10 960.5 -10C356.379 -10 -133.357 104.167 -133.357 245C-133.357 385.833 356.379 500 960.5 500Z"
            fill="#1B60AD"
          />
        </svg>
      </div>
    </div>
  );
};

export default Base;
