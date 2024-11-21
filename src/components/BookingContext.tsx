import React, { createContext, useContext, useState } from 'react';

// Define the type for your booking data
type BookingData = {
  address: string;      // Address field as string
  services: string[];   // Services should be an array of strings
  frequency: string;    // Frequency as a string
  duration: string;     // Duration as a string
  options: string[];    // Options as an array of strings
  pets: string;         // Pets as a string (e.g., "Yes" or "No")
  date: string;         // Date as a string (e.g., "2024-12-01")
  hours: string;        // Hours as a string (e.g., "2 hours")
};

// Create a context for booking data
const BookingContext = createContext<any>(null);

export const useBookingContext = () => {
  return useContext(BookingContext);
};

const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize state with the BookingData type
  const [bookingData, setBookingData] = useState<BookingData>({
    address: '',
    services: [], // Initialize services as an empty array
    frequency: '',
    duration: '',
    options: [], // Initialize options as an empty array
    pets: '',
    date: '',
    hours: '',
  });

  // Function to update booking data
  const updateBookingData = (newData: Partial<BookingData>) => {
    setBookingData((prevState) => ({
      ...prevState,
      ...newData,
      // Ensuring services and options are arrays (if newData contains them)
      services: Array.isArray(newData.services) ? newData.services : prevState.services,
      options: Array.isArray(newData.options) ? newData.options : prevState.options,
    }));
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
