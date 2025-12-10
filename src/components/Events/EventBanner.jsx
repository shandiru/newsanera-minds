"use client"
import useAOS from "../useAOS"

export default function EventBanner() {
  useAOS()

  return (
    <div
      className="relative h-[280px] md:h-[380px] w-full overflow-hidden"
      data-aos="zoom-in"
    >
      <img
        src="/s1.jpeg"
        alt="Workshops"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,32,22,0.82)] via-[rgba(6,32,22,0.78)] to-[rgba(17,96,75,0.72)]" />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-6 pt-30">
        <h1
          className="font-display text-white text-3xl md:text-5xl font-bold uppercase tracking-wide"
          data-aos="fade-up"
        >
          <span className="small-caps">Events</span>
        </h1>

        {/* Added Button */}
        <a
          href="/availablecourses?cat=events"
          data-aos="fade-up"
          data-aos-delay="150"
          className="px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-white bg-[var(--brand-teal)] shadow-lg shadow-black/50 transition-all duration-300 hover:bg-[#0d4a36] hover:shadow-xl hover:shadow-black/60"
        >
           Available Courses
        </a>
      </div>
    </div>
  )
}
