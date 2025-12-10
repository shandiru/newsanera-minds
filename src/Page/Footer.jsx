"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f4f5ef] text-[var(--brand-deep)] pt-16 pb-10 px-6 border-t border-[#dfe1d8] font-bold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-[15px] md:text-base">
        
        {/* BRAND / INTRO */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl tracking-wide text-[var(--brand-deep)]">
            SANERA MINDS
          </h2>
          <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[var(--brand-deep)]/85 font-body">
            Empowering a new era of mental wellness with therapist-led learning
            and meaningful wellbeing experiences for organisations, educational 
            settings, and events.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="font-body">
          <h3 className="font-display text-xl md:text-2xl text-[var(--brand-teal)] mb-4 ">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[15px] md:text-[16px] ">
            <li>
              <a href="/" className="hover:text-[var(--brand-teal)] transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-[var(--brand-teal)] transition">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-[var(--brand-teal)] transition">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[var(--brand-teal)] transition">Contact</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[var(--brand-teal)] transition">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-[var(--brand-teal)] transition">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* OUR WORK */}
        <div className="font-body">
          <h3 className="font-display text-xl md:text-2xl text-[var(--brand-teal)] mb-4">
            Our Work
          </h3>
          <ul className="space-y-2 text-[15px] md:text-[16px]">
            <li>
              <a href="/services/organisation" className="hover:text-[var(--brand-teal)] transition">
                Organisations
              </a>
            </li>
            <li>
              <a href="/services/education" className="hover:text-[var(--brand-teal)] transition">
                Education
              </a>
            </li>
            <li>
              <a href="/services/events" className="hover:text-[var(--brand-teal)] transition">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="font-body">
          <h3 className="font-display text-xl md:text-2xl text-[var(--brand-teal)] mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-[15px] md:text-[16px]">

            <li>
              <a href="mailto:contact@saneraminds.com" className="hover:text-[var(--brand-teal)] transition">
                E-mail
              </a>
            </li>

            <li>
              <a href="https://wa.me/447414786958" target="_blank" className="hover:text-[var(--brand-teal)] transition">
                WhatsApp
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-[var(--brand-teal)] transition">
                Enquiry Form
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* LOGO + ACCREDITATION ROW */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
        <img src="/logo png.png" alt="Sanera Minds Logo" className="h-16 md:h-20 object-contain" />
        <img src="/babcp.png" alt="BABCP Accredited" className="h-24 md:h-28 object-contain" />
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-[13px] md:text-sm text-[var(--brand-deep)]/75 font-body">
        © {new Date().getFullYear()} Sanera Minds. All rights reserved.
      </div>
    </footer>
  );
}
