import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext<any>(null);

export const useBookingContext = () => {
  return useContext(BookingContext);
};

const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookingData, setBookingData] = useState({
    address: '',
    services: [],
    frequency: '',
    duration: '',
    options: [],
  });

  const updateBookingData = (newData: Partial<typeof bookingData>) => {
    setBookingData((prevState) => ({ ...prevState, ...newData }));
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
