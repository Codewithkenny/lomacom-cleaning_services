import { useState, useEffect } from 'react';
import { useBookingContext } from '../BookingContext';
import { useNavigate } from 'react-router-dom';
import {
  format,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  eachDayOfInterval,
  isSameDay,
  isToday,
  parse,
} from 'date-fns';

const Calendar = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  // Retrieve saved date from local storage and bookingData on component mount
  useEffect(() => {
    const storedDate = localStorage.getItem('selectedDate');
    if (storedDate) {
      setSelectedDate(parse(storedDate, 'yyyy-MM-dd', new Date()));
    } else if (bookingData.firstAppointmentDate) {
      setSelectedDate(parse(bookingData.firstAppointmentDate, 'yyyy-MM-dd', new Date()));
    } else {
      setSelectedDate(new Date()); // Default to today's date if no data is found
    }
  }, [bookingData.firstAppointmentDate]);
  
  // Update local storage whenever selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      localStorage.setItem('selectedDate', formattedDate);
    }
  }, [selectedDate]);

  // Navigate to the next step after selecting a date
  const handleNextStep = () => {
    if (!selectedDate) {
      alert('Please select a date before proceeding.');
      return;
    }
    navigate('/domestic-cleaning/booking/hours');
  };

  // Get all days in the current month
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  // Handle selecting a date
  const handleDateSelection = (date: Date) => {
    const formattedDate = format(date, 'yyyy-MM-dd'); // Ensure the date is formatted as a string
    setSelectedDate(date);
    updateBookingData({ firstAppointmentDate: formattedDate });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 p-4 bg-gray-50 border rounded-lg max-w-screen-md mx-auto">
      {/* Calendar */}
      <div className="flex flex-col items-center lg:w-1/2">
        {/* Header */}
        <div className="flex justify-between items-center w-full mb-4">
          <button
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            aria-label="Previous Month"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00bba3] text-white hover:bg-teal-600 transition-all duration-300"
          >
            &lt;
          </button>
          <span className="text-xl font-semibold text-black">
            {format(currentDate, 'MMMM yyyy')}
          </span>
          <button
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            aria-label="Next Month"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00bba3] text-white hover:bg-teal-600 transition-all duration-300"
          >
            &gt;
          </button>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-2 text-center w-full">
          {/* Day headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="font-bold text-gray-700">{day}</div>
          ))}

          {/* Blank spaces before the first day of the month */}
          {Array.from({ length: daysInMonth[0].getDay() }, (_, i) => (
            <div key={`empty-${i}`} className="text-gray-200"> </div>
          ))}

          {/* Calendar Dates */}
          {daysInMonth.map((date) => (
            <div
              key={date.toString()}
              onClick={() => handleDateSelection(date)}
              aria-label={format(date, 'MMMM dd, yyyy')}
              className={`cursor-pointer p-3 rounded-full text-center transition-all duration-300 
                ${selectedDate && isSameDay(date, selectedDate) ? 'bg-[#00bba3] text-white font-bold' : 'text-black'} 
                ${isToday(date) ? 'border-2 border-[#00bba3]' : ''}`}
              
            >
              {format(date, 'd')}
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Section */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold mb-4 text-center">
          {selectedDate ? 'Your Selected Appointment Date' : 'Select a Date'}
        </h2>
        <div className="text-xl text-black font-bold">
          {selectedDate ? format(selectedDate, 'MMMM dd, yyyy') : 'No date selected'}
        </div>
        <button
          onClick={handleNextStep}
          disabled={!selectedDate}  // Disable if no date is selected
          className="w-full max-w-xs mt-6 py-3 bg-[#00bba3] text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Calendar;
