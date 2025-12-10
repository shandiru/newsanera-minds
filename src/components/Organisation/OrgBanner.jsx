"use client"
import useAOS from "../useAOS"

export default function OrgBanner() {
  useAOS()

  return (
    <div
      className="relative h-[300px] md:h-[400px] w-full overflow-hidden"
      data-aos="zoom-in"
    >
      <img
        src="/s1.jpeg"
        alt="Organisation Workshops"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[rgba(6,32,22,0.72)]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 space-y-6 pt-30">
        <h1
          className="font-display text-white text-3xl md:text-5xl font-bold uppercase tracking-wide"
          data-aos="fade-up "
        >
          <span className="small-caps">Organisations</span>
        </h1>

        {/* Added Button */}
        <a
         href="/availablecourses?cat=organisations"
          data-aos="fade-up"
          data-aos-delay="150"
          className="px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-white bg-[#11604B] shadow-lg shadow-black/50 transition-all duration-300 hover:bg-[#0d4a36] hover:shadow-xl hover:shadow-black/60"
        >
          Available Courses
        </a>
      </div>
    </div>
  )
}
