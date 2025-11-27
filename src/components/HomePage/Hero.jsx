import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero3.png')",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        
        {/* Decorative Line */}
        <div className="w-20 h-[2px] bg-[#11604B] mx-auto mb-6 opacity-80"></div>

        {/* Headline */}
       <h1
  className="
    relative 
    text-4xl md:text-6xl
    uppercase 
    tracking-[0.25em] 
    font-display
    font-bold
    text-white
    px-3 py-1
    leading-tight
  "
>
  EMPOWERING A NEW ERA OF MENTAL WELLNESS
</h1>


       
        {/* Button */}
        <a
          href="/contact"
          className="
            mt-10 inline-block
            px-12 py-4
            rounded-full
            text-sm font-semibold
            uppercase tracking-[0.25em]
            text-white
            bg-[#11604B]
            shadow-lg shadow-black/40
            transition-all duration-300
            hover:bg-[#0d4a36]
            hover:shadow-xl hover:shadow-black/50
          "
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
