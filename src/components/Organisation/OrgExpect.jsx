"use client"
import useAOS from "../useAOS"

export default function OrgExpect() {
  useAOS()

   const items = [
    <>
      <span className="font-semibold text-[#11604b]">Therapist-led sessions that feel real and relevant.</span>{" "}
      Grounded, practical, and designed to fit naturally into the working day.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">Tailored wellbeing assessments.</span>{" "}
      We start by understanding your organisation’s needs, then design workshops that meet them.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">Training for managers and leaders.</span>{" "}
      Learn how to recognise signs of stress and create psychologically safe spaces.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">Coping and resilience strategies for staff.</span>{" "}
      CBT techniques and stress management tools that people can apply instantly.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">Flexible formats.</span>{" "}
      From 60–90 minute virtual sessions to full-day training  whatever works for your team.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">E-learning: supporting life’s hardest moments.</span>{" "}
       with modules on grief, loss, miscarriage, infertility, illness, and more tailored to staff needs delivered with compassion, privacy, and anytime access.
    </>,
  ]

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b] mb-6 text-center"
          data-aos="fade-up"
        >
          What to Expect
        </h2>

        <ul className="font-body text-[#062016]/90 text-[17px] md:text-lg space-y-5">
          {items.map((item, index) => (
            <li key={index} className="org-item" data-aos="fade-up">
              {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
