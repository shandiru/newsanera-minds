"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookNowPage() {
  const [form, setForm] = useState({
    option: "",
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isWhatsAppLoading, setIsWhatsAppLoading] = useState(false);

  const whatsappNumber = "447414786958";

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send to WhatsApp
  const sendWhatsApp = async () => {
    if (!form.option || !form.name || !form.email || !form.message) {
      setStatus("Please fill all fields before sending.");
      return;
    }

    setIsWhatsAppLoading(true);
    setStatus("Opening WhatsApp...");

    try {
      const text = `New%20Enquiry%0A%0AOption:%20${form.option}%0AName:%20${form.name}%0AEmail:%20${form.email}%0AMessage:%20${form.message}`;
      const url = `https://wa.me/${whatsappNumber}?text=${text}`;
      window.open(url, "_blank");
      setStatus("WhatsApp message ready to send!");
    } catch (error) {
      console.error(error);
      setStatus("Failed to open WhatsApp. Please try again.");
    } finally {
      setIsWhatsAppLoading(false);
    }
  };

  // Send Email
  const sendEmail = async () => {
    if (!form.option || !form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    setIsEmailLoading(true);
    setStatus("Sending email...");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          option: form.option,
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("Email sent successfully 🎉");
      setForm({ option: "", name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email. Please try again.");
    } finally {
      setIsEmailLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f7f5] to-[#e9ece7] px-4 py-20 font-body">
      <div className="w-full max-w-[720px] bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-[#e2e7e1] p-10">
        {/* CONTACT INFO */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <a href="mailto:contact@saneraminds.com" className="flex items-center gap-2 px-5 py-3 border border-[#cfd5cf] rounded-full bg-white text-[#0d2f25] shadow-sm hover:bg-[#f5f7f5] transition">
            <span className="font-medium">E-mail</span>
          </a>
        </div>

        {/* TITLE */}
        <h1 className="text-center text-4xl md:text-5xl font-serif tracking-[0.35em] bg-gradient-to-b from-[#1a604c] to-[#0d2f25] bg-clip-text text-transparent mb-3 uppercase" style={{ fontWeight: 600 }}>
          Get In Touch
        </h1>

        <p className="text-center text-[17px] text-[#062016]/80 mb-10 max-w-lg mx-auto">
          Book a complimentary initial assessment with one of our therapists.
        </p>

        {/* FORM */}
        <form className="max-w-md mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-[#0d2f25] font-medium">Select a type *</label>
            <select name="option" value={form.option} onChange={handleInput} className="w-full border border-[#cfd5cf] rounded-xl py-3 px-4 bg-white shadow-sm">
              <option value="">Choose an option...</option>
              <option value="Organisation">Organisation</option>
              <option value="School">School</option>
              <option value="University">University</option>
              <option value="Events">Events</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[#0d2f25] font-medium">Name *</label>
            <input name="name" type="text" value={form.name} onChange={handleInput} className="w-full border border-[#d6dcd6] rounded-xl py-3 px-4 shadow-sm" />
          </div>

          <div className="space-y-1">
            <label className="text-[#0d2f25] font-medium">Email *</label>
            <input name="email" type="email" value={form.email} onChange={handleInput} className="w-full border border-[#d6dcd6] rounded-xl py-3 px-4 shadow-sm" />
          </div>

          <div className="space-y-1">
            <label className="text-[#0d2f25] font-medium">Message *</label>
            <textarea name="message" value={form.message} onChange={handleInput} rows="4" className="w-full border border-[#d6dcd6] rounded-xl py-3 px-4 shadow-sm resize-none" />
          </div>
        </form>

        {/* BUTTONS */}
        <div className="mt-10 max-w-md mx-auto space-y-4">
          {/* WhatsApp Button */}
          <button
            onClick={sendWhatsApp}
            disabled={isWhatsAppLoading}
            className={`w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold shadow-md ${isWhatsAppLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isWhatsAppLoading ? "Opening..." : "Send via WhatsApp"}
          </button>

          {/* Email Button */}
          <button
            onClick={sendEmail}
            disabled={isEmailLoading}
            className={`w-full py-3.5 rounded-xl bg-[#0a3d2f] text-white font-semibold shadow-md ${isEmailLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isEmailLoading ? "Sending..." : "Send via Email"}
          </button>

          <p className="text-xs text-center text-black">
            By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
          </p>

          {status && <p className="text-sm text-[#0d2f25] font-medium text-center pt-2">{status}</p>}
        </div>
      </div>
    </main>
  );
}
