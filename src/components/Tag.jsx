import React from "react";
const Tag = ({color,text}) => {
  return (
<div className={`rounded-3xl ${color} py-1 px-5 `}>
<p className="   text-white text-[22px] font-bold">{text}</p>
</div>
  );
};

export default Tag;
