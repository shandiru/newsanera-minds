"use client";
import { Building2, School, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
    const navigate = useNavigate();
  return (
    <section
  className="
    relative overflow-hidden
    py-20 px-4
    bg-[linear-gradient(135deg,#EEF5F2,#F5F8F4)]
    font-body
  "
>

      <div className="mx-auto max-w-6xl text-center">
        
        {/* Tag */}
        <div
          className="
            mb-6 inline-flex items-center gap-2 
            rounded-full 
            px-4 py-2 text-sm font-medium
            bg-[#116F59]/10 text-[#116F59]
            font-medium
          "
        ></div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl font-body">
          Transform Your Team's
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#002E1B] to-[#116F59]">
            Mental Wellbeing
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 md:text-xl font-body">
          Expert-led training programs designed to build resilience, emotional
          intelligence, and psychological safety across organisations,
          education settings, and events.
        </p>

       {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 font-body">

          {/* Organisation */}
          <button
            onClick={() => navigate("/services/organisation")}
            className="
              inline-flex items-center gap-2 
              h-10 px-6 rounded-md 
              text-white 
              bg-[#002E1B] hover:bg-[#002E1B]/90 
              transition-all
            "
          >
            <Building2 className="h-5 w-5" />
            Organisation
          </button>

          {/* Education */}
          <button
            onClick={() => navigate("/services/education")}
            className="
              inline-flex items-center gap-2 
              h-10 px-6 rounded-md 
              border 
              bg-white shadow 
              hover:bg-[#116F59] hover:text-white 
              transition-all
            "
          >
            <School className="h-5 w-5" />
            Education
          </button>

          {/* Events */}
          <button
            onClick={() => navigate("/services/events")}
            className="
              inline-flex items-center gap-2 
              h-10 px-6 rounded-md 
              border 
              bg-white shadow 
              hover:bg-[#116F59] hover:text-white 
              transition-all
            "
          >
            <Sparkles className="h-5 w-5" />
            Events
          </button>

        </div>
      </div>
    </section>
  );
}
