import { useState } from 'react';
import { useBookingContext } from '../BookingContext';
import { format, startOfMonth, endOfMonth, addMonths, subMonths, eachDayOfInterval, isToday, isSameDay, parse } from 'date-fns';

const Calendar = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Get the first and last day of the current month
  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  // Get all days in the current month
  const daysInMonth = eachDayOfInterval({ start: startOfCurrentMonth, end: endOfCurrentMonth });

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleDateSelection = (date: Date) => {
    updateBookingData('firstAppointmentDate', format(date, 'yyyy-MM-dd'));
  };

  // Ensure firstAppointmentDate is always valid (fallback to today's date if undefined)
  const firstAppointmentDate = bookingData.firstAppointmentDate
    ? parse(bookingData.firstAppointmentDate, 'yyyy-MM-dd', new Date())
    : new Date();

  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-black">Date of First Appointment</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevMonth}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00bba3] text-white hover:bg-teal-600 transition-all duration-300"
          >
            &lt;
          </button>
          <span className="text-2xl font-semibold text-black">
            {format(currentDate, 'MMMM yyyy')}
          </span>
          <button
            onClick={handleNextMonth}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00bba3] text-white hover:bg-teal-600 transition-all duration-300"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-4 text-center">
        {/* Day headers (Sun, Mon, etc.) */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="font-bold text-gray-700">{day}</div>
        ))}

        {/* Blank spaces before the first day of the month */}
        {Array.from({ length: daysInMonth[0].getDay() }, (_, i) => (
          <div key={i} className="text-gray-200"> </div>
        ))}

        {/* Calendar dates */}
        {daysInMonth.map((date) => (
          <div
            key={date.toString()}
            onClick={() => handleDateSelection(date)}
            className={`cursor-pointer p-3 rounded-full 
              ${isToday(date) ? 'bg-teal-400 text-white' : ''} 
              ${isSameDay(date, firstAppointmentDate) ? 'bg-[#00bba3] text-white' : 'text-black hover:bg-teal-200'}
            `}
          >
            {format(date, 'd')}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => alert(`Appointment set for ${format(firstAppointmentDate, 'MMMM dd, yyyy')}`)}
        className="w-full max-w-xs mt-6 py-3 bg-[#00bba3] text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 mx-auto"
      >
        Confirm Appointment
      </button>
    </div>
  );
};

export default Calendar;
