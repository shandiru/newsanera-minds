"use client"
import useAOS from "../useAOS"

export default function AboutBanner() {
  useAOS()

  return (
    <div
      className="relative h-[300px] md:h-[400px] w-full overflow-hidden"
      data-aos="zoom-in"
    >
      <img
        src="/s1.jpeg"
        alt="About Sanera Minds"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[rgba(6,32,22,0.72)]"></div>

      <div className="absolute inset-0 flex items-center justify-center text-center px-6 pt-30">
        <h1
          className="font-display text-white text-3xl md:text-5xl font-bold uppercase tracking-wide"
          data-aos="fade-up"
        >
          <span className="small-caps">About</span>{" "}
          <span className="">Sanera Minds</span>
        </h1>
      </div>
    </div>
  )
}
