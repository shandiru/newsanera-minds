import React, { useState, useEffect } from "react";

// Main image first, glass image second
const images = ["/hero3.png", "/hero4.png"];
const headingText = "EMPOWERING A NEW ERA OF MENTAL WELLNESS";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true); // Animate text on first load

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Change image
      setShowText(false); // Reset text animation
      setTimeout(() => setShowText(true), 100); // Animate text in
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url('${images[currentImage]}')` }}
    >
      <div className="absolute inset-0 bg-black/60 transition-all duration-1000"></div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <div className="w-20 h-[2px] bg-[#11604B] mx-auto mb-6 opacity-90"></div>

        {/* Animated heading */}
        <h1 className="relative text-4xl md:text-6xl uppercase tracking-[0.1em] font-display font-bold text-white px-3 py-1 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
          {headingText.split(" ").map((word, wIndex) => (
            <span key={wIndex} className="inline-block mr-2 whitespace-nowrap">
              {word.split("").map((char, i) => (
                <span
                  key={i}
                  className={`inline-block transform transition-all duration-700 ${
                    showText
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-6 scale-90"
                  }`}
                  style={{ transitionDelay: `${i * 50 + wIndex * 300}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* TWO NEW BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="/availablecourses"
            className="px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.25em] text-white bg-[#11604B] shadow-lg shadow-black/50 transition-all duration-300 hover:bg-[#0d4a36] hover:shadow-xl hover:shadow-black/60"
          >
            Available Courses
          </a>

          <a
            href="/contact"
            className="px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.25em] text-white border border-white bg-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black "
          >
            Bespoke Courses
          </a>
        </div>
      </div>
    </section>
  );
}
