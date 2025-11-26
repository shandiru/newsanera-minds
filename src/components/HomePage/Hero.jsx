import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/heros.png')", // ✅ wrap the image path in url()
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        {/* Decorative Line */}
        <div className="w-20 h-[2px] bg-white mx-auto mb-6"></div>

        {/* Headline */}
      <h1
  className="
    font-serif
    text-white
    text-4xl md:text-6xl 
    font-bold
    uppercase
    tracking-[0.25em]
    leading-tight
    max-w-3xl mx-auto
  "
>
  EMPOWERING A NEW ERA OF MENTAL WELLNESS
</h1>

        

        <a
  href="/contact"
  className="
    mt-8 inline-block
    px-10 py-3
    rounded-full
    border border-white/70
    text-white
    text-sm font-medium
    uppercase tracking-[0.25em]
    backdrop-blur-sm
    transition-all duration-300
    hover:bg-white hover:text-black
    hover:border-white
    hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
  "
>
  Book Now
</a>

      </div>
    </section>
  );
}
