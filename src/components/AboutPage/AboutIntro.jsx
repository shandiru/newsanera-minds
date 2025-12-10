"use client"
import useAOS from "../useAOS"

export default function AboutIntro() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-12 md:py-16 px-6 text-center">
      <p
        className="font-body max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl"
        data-aos="fade-up"
      >
        We’re a team of accredited psychotherapists who found ourselves clicking
        through the same e-learning... and honestly? It felt more like a
        ‘tick-box’ exercise than something genuinely useful. So we decided to do
        something about it.
      </p>
    </section>
  )
}
