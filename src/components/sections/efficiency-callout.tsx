"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { openCalendlyPopup } from "@/utils/calendly";

export const EfficiencyCallout = () => (
  <section className="py-24 bg-white dark:bg-dark-bg">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
        Unlock Hidden Revenue <br />
        <span className="text-brand-500">
          in Your Business
        </span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
        Client Reach AI builds smart digital teams for businesses — including AI
        receptionists, follow-up agents, customer support assistants, and
        marketing automation systems. These AI agents work together as one
        digital workforce to help you capture more leads, recover lost revenue,
        and keep your business running smoothly.
      </p>
      <button
        onClick={openCalendlyPopup}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:opacity-90 transition-all"
      >
        Book My Free Audit Now <ArrowRight size={18} />
      </button>
    </div>
  </section>
);
