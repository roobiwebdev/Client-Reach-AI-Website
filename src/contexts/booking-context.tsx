"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isOpen: boolean;
  openBookingPopup: () => void;
  closeBookingPopup: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingPopup = () => setIsOpen(true);
  const closeBookingPopup = () => setIsOpen(false);

  return (
    <BookingContext.Provider
      value={{ isOpen, openBookingPopup, closeBookingPopup }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
