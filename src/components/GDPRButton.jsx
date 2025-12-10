"use client";

import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false); // Show consent banner
  const [accepted, setAccepted] = useState(null); // true/false/null
  const [showIcon, setShowIcon] = useState(false); // Show cookie icon

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* GDPR Banner */}
      {visible && (
        <div
          className="fixed bottom-4 left-4 right-4 md:bottom-6 text-center md:right-6 md:left-auto max-w-full md:max-w-xs p-4 rounded-lg 
                     shadow-lg z-50 bg-[var(--brand-bg)] text-[var(--brand-deep)] dark:bg-[var(--brand-teal)] dark:text-white transition-all"
        >
          <p className="text-sm mb-2">
            We use cookies to improve your experience.
          </p>
          <p className="mb-3">
            <a
              href="/privacy"
              className="underline text-[var(--brand-teal)] hover:text-[#0d3d32] dark:text-[var(--brand-bg)] dark:hover:text-[#d4f0e0]"
            >
              See our Privacy Policy
            </a>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="bg-[var(--brand-teal)] text-white px-4 py-2 rounded text-sm hover:bg-[#0d3d32] transition"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="bg-white text-[var(--brand-deep)] px-4 py-2 rounded text-sm hover:bg-[#e0e2d8] transition"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--brand-teal)] shadow-lg border border-white 
                       flex items-center justify-center hover:scale-105 transition cursor-pointer"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
}
