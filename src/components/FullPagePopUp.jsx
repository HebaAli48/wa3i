// FullPagePopup.js

import React from "react";

const FullPagePopup = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="bg-white p-8 w-full h-full max-w-full max-h-full overflow-auto">
      <div  onClick={onClose} className='absolute right-5 top-2 cursor-pointer w-8 h-8 flex items-center justify-center text-[30px] hover:bg-secondary hover:text-white text-primary rounded-full p-1 bg-white' > X </div>
        {children}
      </div>
    </div>
   
  );
};

export default FullPagePopup;
