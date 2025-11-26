'use client';
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 mt-4">
      <div className="w-[93%] mx-auto bg-[#EFF0EA] rounded-lg shadow-sm">

        <div
          className={`relative max-w-[1350px] mx-auto flex items-center justify-between px-8 py-5 transition-all duration-300 ${
            scrolled ? "text-[#062016]" : "text-[#062016]"
          }`}
        >

          {/* LOGO */}
          <a href="/" className="z-10 relative">
            <img
              src="/logo png.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* DESKTOP NAV — ONLY ON XL AND ABOVE */}
          <nav className="hidden xl:flex items-center space-x-12 relative z-10">
            {[
              { label: "ORGANISATIONS", href: "/services/organisation" },
              { label: "EDUCATION", href: "/services/education" },
              { label: "EVENTS", href: "/services/events" },
              { label: "ABOUT US", href: "/about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative 
                  text-[16px]
                  uppercase 
                  tracking-[0.25em] 
                  font-display
                  font-bold
                  bg-clip-text 
                  bg-linear-to-b 
                  from-[#02130E] via-[#062016] to-[#11604B]
                  px-3 py-2 
                  rounded-md
                  transition-all duration-300
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA BUTTON — ONLY ON XL */}
          <a
            href="/contact"
            className="hidden xl:inline-block rounded-full px-8 py-[10px] text-[12px] tracking-[0.18em] font-semibold 
                       bg-[#062016] text-white hover:bg-[#11604B] transition"
          >
            LET’S TALK
          </a>

          {/* HAMBURGER MENU (visible from lg → mobile) */}
          <button
            className="xl:hidden text-2xl text-[#062016]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* MOBILE / TABLET / LG MENU */}
        {isOpen && (
          <div className="xl:hidden bg-[#EFF0EA] text-[#062016] text-center shadow-md">

            {[
              { label: "ORGANISATIONS", href: "/services/organisation" },
              { label: "EDUCATION", href: "/services/education" },
              { label: "EVENTS", href: "/services/events" },
              { label: "ABOUT US", href: "/about" },
            ].map((item) => (
              <div
                key={item.label}
                className="border-b border-gray-300 py-5 text-[13px] tracking-[0.18em] uppercase 
                           font-medium hover:bg-[#11604B] hover:text-white transition"
              >
                <a
                  href={item.href}
                  className="
                    block w-full
                    text-[15px]
                    uppercase tracking-[0.25em]
                    font-display font-bold
                    bg-clip-text
                    bg-linear-to-b from-[#02130E] via-[#062016] to-[#11604B]
                    py-2
                  "
                >
                  {item.label}
                </a>
              </div>
            ))}

            <div className="py-4">
              <a
                href="/contact"
                className="inline-block bg-[#062016] text-white rounded-full px-8 py-3 text-[12px] 
                           tracking-[0.18em] font-semibold hover:bg-[#11604B] transition"
              >
                LET’S TALK
              </a>
            </div>

          </div>
        )}

      </div>
    </header>
  );
}
