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
      <div className="w-[93%] mx-auto bg-[var(--brand-bg)] rounded-lg shadow-sm">

        <div
          className={`relative max-w-[1350px] mx-auto flex items-center justify-between px-8 py-5 transition-all duration-300 ${
            scrolled ? "text-[var(--brand-deep)]" : "text-[var(--brand-deep)]"
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
                  from-[#02130E] via-[var(--brand-deep)] to-[var(--brand-teal)]
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
                       bg-[var(--brand-deep)] text-white hover:bg-[var(--brand-teal)] transition"
          >
            LET’S TALK
          </a>

          {/* HAMBURGER MENU (visible from lg → mobile) */}
          <button
            className="xl:hidden text-2xl text-[var(--brand-deep)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* MOBILE / TABLET / LG MENU */}
        {isOpen && (
          <div className="xl:hidden bg-[var(--brand-bg)] text-[var(--brand-deep)] text-center shadow-md">

            {[
              { label: "ORGANISATIONS", href: "/services/organisation" },
              { label: "EDUCATION", href: "/services/education" },
              { label: "EVENTS", href: "/services/events" },
              { label: "ABOUT US", href: "/about" },
            ].map((item) => (
              <div
                key={item.label}
                className="border-b border-gray-300 py-5 text-[13px] tracking-[0.18em] uppercase 
                           font-medium hover:bg-[var(--brand-teal)] hover:text-white transition"
              >
                <a
                  href={item.href}
                  className="
                    block w-full
                    text-[15px]
                    uppercase tracking-[0.25em]
                    font-display font-bold
                    bg-clip-text
                    bg-linear-to-b from-[#02130E] via-[var(--brand-deep)] to-[var(--brand-teal)]
                    py-2
                  "
                >
                  {item.label}
                </a>
              </div>
            ))}

            
            <div className="py-4 border-b border-gray-300">
              <a
                href="/contact"
                className="inline-block bg-[var(--brand-deep)] text-white rounded-full px-8 py-3 text-[12px] 
                           tracking-[0.18em] font-semibold hover:bg-[var(--brand-teal)] transition"
              >
                LET’S TALK
              </a>
            </div>

            <div className="py-4 border-b border-gray-300">
              <a
                href="/availablecourses"
                className="inline-block bg-[var(--brand-deep)] text-white rounded-full px-8 py-3 text-[12px] 
                           tracking-[0.18em] font-semibold hover:bg-[var(--brand-teal)] transition  uppercase"
              >
                 Available Courses
              </a>
            </div>

          </div>
        )}

      </div>
    </header>
  );
}
