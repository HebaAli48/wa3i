import React, { useEffect } from 'react';
import image from '../assets/kids.png';

const CoursesPopup = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    if (isOpen) {
      body.style.overflowY = 'hidden';
      html.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'auto';
      html.style.overflowY = 'auto';
    }

    return () => {
      body.style.overflowY = 'auto';
      html.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} bg-gray-500 z-40 bg-opacity-75 overflow-y-auto`}>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white relative pt-10 pb-10 pl-20 pr-20 rounded-[35px] drop-shadow-[10px_10px_10px_rgba(9,94,178,0.3)] ">
         <div  onClick={handleClose} className='absolute right-5 top-2 cursor-pointer w-8 h-8 flex items-center justify-center text-[30px] hover:bg-secondary hover:text-white text-primary rounded-full p-1 bg-white' > X </div>
          <div className='grid grid-cols-3 gap-10'>
            <img className='rounded-3xl' src={image} alt="Course" />
            <img className='rounded-3xl'  src={image} alt="Course" />
            <img className='rounded-3xl' src={image} alt="Course" />
            <img className='rounded-3xl' src={image} alt="Course" />
            <img className='rounded-3xl' src={image} alt="Course" />
            <img className='rounded-3xl' src={image} alt="Course" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPopup;
