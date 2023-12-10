import React, { useState } from 'react';

const Calendar = ({ dates }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(selectedDate);
    const startingDay = firstDayOfMonth(selectedDate);
    const calendarDays = Array.from({ length: totalDays }, (_, index) => index + 1);
  
    return (
      <div className="calendar w-auto rounded-[35px] outline outline-4 outline-secondary px-4 ">
        <div className="header flex justify-end items-center p-2">
          <p className="text-[#666666] text-right pr-10 pb-10 font-bold text-[43px] leading-[41px]">
            {selectedDate.toLocaleString('ar-EG', { month: 'long' })} {selectedDate.getFullYear()}
          </p>
        </div>
        <div className="days grid grid-cols-7 gap-y-3 gap-x-8 p-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="day-header text-center text-[#666666] font-bold">
              {day}
            </div>
          ))}
          {Array.from({ length: startingDay }, (_, index) => (
            <div key={index} className="empty-day"></div>
          ))}
          {calendarDays.map((day) => {
            const dateStr = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`;
            const hasSVG = dates.some((dateInfo) => dateInfo.dates.includes(dateStr));
  
            return (
              <div
                key={day}
                className={`calendar-day flex items-center justify-center p-2 text-center cursor-pointer ${
                  hasSVG ? 'text-white' : ''
                }`}
                onClick={() => handleDateClick(day)}
              >
                {dates.map((dateInfo, dateIndex) => {
                  return dateInfo.dates.includes(dateStr) && (
                    <div key={dateIndex} className="svg-wrapper absolute -z-20">
                      {dateInfo.svg}
                    </div>
                  );
                })}
                <span>{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  return (
    <div className="calendar-container">
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
