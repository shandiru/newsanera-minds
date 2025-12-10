"use client"
import useAOS from "../useAOS"

export default function EventImageBlock() {
  useAOS()

  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-5" data-aos="fade-right">
          <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-teal)]">
            Therapist-led, human-first
          </h2>

         <p className="font-body text-[var(--brand-deep)]/90 text-[17px] md:text-lg leading-relaxed">
            All sessions are guided by accredited psychotherapists and thoughtfully
            designed to provide a warm, welcoming, and meaningful experience. They
            foster authentic conversation, practical insights, and space for reflection
            and personal growth.
          </p>

          <p className="font-body text-[var(--brand-deep)]/90 text-[17px] md:text-lg leading-relaxed">
            These experiences are well-suited for a wide range of events, including
            corporate gatherings, team-building initiatives, and special occasions where
            thoughtful engagement and wellbeing are valued alongside enjoyment.
          </p>

        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <img
            src="/event.png"
            alt="Sanera Minds Workshops"
            className="w-full h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(6,32,22,0.20)] mix-blend-multiply pointer-events-none" />
        </div>

      </div>
    </section>
  )
}
