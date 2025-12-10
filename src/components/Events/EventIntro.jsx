"use client"
import useAOS from "../useAOS"

export default function EventIntro() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Mental wellbeing workshops aren’t just for corporate settings! We also create meaningful,
          down-to-earth sessions for events, small businesses and parties, who want to learn
          something new or connect on a deeper level.
        </p>

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed mt-5"
          data-aos="fade-up"
        >
          Whether you’re hosting an event, planning a team away day, organising a unique weekend,
          or just want to bring your circle together for something different  our workshops
          are grounded, practical, and genuinely uplifting.
        </p>

      </div>
    </section>
  )
}
