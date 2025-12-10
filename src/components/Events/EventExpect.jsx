"use client"
import useAOS from "../useAOS"

export default function EventExpect() {
  useAOS()

   const items = [
    "Therapist-led sessions that are interactive and warm. No awkward icebreakers or lectures.",
    "Breathing exercises and grounding techniques to calm your system and help you stay present.",
    "Connection exercises that spark real conversation, laughter, and meaningful bonding.",
    "Topics like stress, self-worth, confidence, boundaries, emotional regulation, and more.",
    "Customisable content so you can pick the topics that match your group’s vibe.",
    "A CBT-based toolkit with exercises you can actually use in everyday life.",
    "Flexible formats from Zoom workshops to in-person sessions  in your space or ours.",
  ]

  return (
    <section className="bg-[#eff0ea] py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b] mb-6"
          data-aos="fade-up"
        >
          What to Expect
        </h2>

        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="group" data-aos="fade-up">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[#11604b]" />
                <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
              <div className="ml-[18px] mt-3 h-px bg-[#11604b]/15 group-last:hidden" />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
