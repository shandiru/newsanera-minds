export default function CTASection() {
  return (
    <section
      className="px-4 py-20 text-white font-body"
      style={{ backgroundColor: "#002E1B" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
          Ready to Transform Your Wellbeing?
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl mb-8 opacity-90 font-sans">
          Get in touch to discuss how these programs can support your team,
          students, or event attendees.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/contact")}
          className="bg-white text-black text-sm md:text-base px-6 py-2 rounded-md font-medium font-sans hover:bg-gray-200 flex items-center gap-1 mx-auto transition"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
