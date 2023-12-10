import React from "react";

const ImageOnSVG = ({ imageUrl }) => {
  return (
    <div className="w-[260px] h-[300px] shadow-2xl shadow-slate-300  flex items-center justify-center relative overflow-hidden bg-[#F2F7FB] custom-shape">
     <img className="h-[350px] w-[300px]" src={imageUrl} />
</div>

  );
};

export default ImageOnSVG;
