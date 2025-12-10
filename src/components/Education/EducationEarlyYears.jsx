"use client"
import useAOS from "../useAOS"

export default function EducationEarlyYears() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-5" data-aos="fade-right">
          <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">
            Supporting Emotional Regulation in Early Years
          </h2>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            We offer workshops for nurseries and early years settings, helping young children
            recognise, understand, and manage their emotions from an early age.
          </p>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            Using playful activities like storytelling, movement, and creative exercises, children
            build foundational emotional awareness, social connection, and resilience.
          </p>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            These skills help children settle calmly, communicate confidently, and participate fully
            in learning environments.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <img
            src="/edu.png"
            alt="Early Years Workshop"
            className="w-full h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(6,32,22,0.2)] mix-blend-multiply pointer-events-none" />
        </div>

      </div>
    </section>
  )
}
