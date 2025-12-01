"use client";
import { useState } from "react";
import { Building2, School, Sparkles } from "lucide-react";

export default function HeroSection({ selectedCategory, setSelectedCategory }) {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 px-4
        bg-[linear-gradient(135deg,#EEF5F2,#F5F8F4)]
        font-body
      "
    >
      <div className="mx-auto max-w-6xl text-center pt-10 md:pt-10 sm:pt-10 lg:pt-0 xl:pt-10">
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl font-body">
          Transform Your Team's
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#002E1B] to-[#116F59]">
            Mental Wellbeing
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 md:text-xl font-body">
          Expert-led training programs designed to build resilience, emotional
          intelligence, and psychological safety across organisations,
          education settings, and events.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 font-body">
          <button
            onClick={() => setSelectedCategory("organisations")}
            className={`inline-flex items-center gap-2 h-10 px-6 rounded-md transition-all ${
              selectedCategory === "organisations"
                ? "bg-[#002E1B] text-white"
                : "bg-white border shadow hover:bg-[#116F59] hover:text-white"
            }`}
          >
            <Building2 className="h-5 w-5" />
            Organisations
          </button>

          <button
            onClick={() => setSelectedCategory("education")}
            className={`inline-flex items-center gap-2 h-10 px-6 rounded-md transition-all ${
              selectedCategory === "education"
                ? "bg-[#002E1B] text-white"
                : "bg-white border shadow hover:bg-[#116F59] hover:text-white"
            }`}
          >
            <School className="h-5 w-5" />
            Education
          </button>

          <button
            onClick={() => setSelectedCategory("events")}
            className={`inline-flex items-center gap-2 h-10 px-6 rounded-md transition-all ${
              selectedCategory === "events"
                ? "bg-[#002E1B] text-white"
                : "bg-white border shadow hover:bg-[#116F59] hover:text-white"
            }`}
          >
            <Sparkles className="h-5 w-5" />
            Events
          </button>
        </div>
      </div>
    </section>
  );
}
