"use client"
import useAOS from "../useAOS"

export default function AboutContent() {
  useAOS()
 return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6 font-body text-[#062016]/90 text-[17px] md:text-lg">
        <p data-aos="fade-up">
          We work with businesses and organisations looking to train and support their teams, including nurseries, schools and universities that are embedding emotional resilience and self-awareness, small businesses seeking wellbeing and team building, and events that want thoughtful, wellbeing-focused moments that stand out
        </p>
      </div>
    </section>
  )
}
