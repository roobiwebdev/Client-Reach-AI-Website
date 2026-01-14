"use client";

import React from "react";
// ... imports
import { ArrowRight } from "lucide-react";
import { useBooking } from "@/contexts/booking-context";

export const EfficiencyCallout = () => {
  const { openBookingPopup } = useBooking();

  return (
    <section className="py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          AI Tools Improve Efficiency. <br />
          <span className="text-brand-500">
            An AI Workforce Drives Exponential Growth.
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
          Client Reach AI builds smart digital teams for clinics like AI
          receptionists, follow-up helpers, patient coordinators, and marketing
          assistants. They work together as one team to help you get more
          bookings, save lost revenue, and keep your clinic running smoothly.
        </p>
        <button
          onClick={openBookingPopup}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:opacity-90 transition-all"
        >
          Book My Free Audit Now <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};
