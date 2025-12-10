"use client"
import useAOS from "../useAOS"

export default function AboutWorkWith() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b] mb-6"
          data-aos="fade-up"
        >
          We work with:
        </h2>

        <ul className="font-body list-disc list-inside space-y-3 text-[#062016]/90 text-[17px] md:text-lg">
          <li data-aos="fade-up">Businesses & organisations looking to support their teams</li>
          <li data-aos="fade-up">Nurseries, schools & universities embedding emotional resilience</li>
          <li data-aos="fade-up">Small businesses seeking wellbeing & team-building</li>
          <li data-aos="fade-up">Events hiring us to create thoughtful wellbeing-focused moments</li>
        </ul>
      </div>
    </section>
  )
}
