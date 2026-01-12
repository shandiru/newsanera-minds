"use client"
import useAOS from "../useAOS"

export default function AboutContent() {
  useAOS()
 return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6 font-body text-[var(--brand-deep)]/90 text-[17px] md:text-lg">
        <p data-aos="fade-up">
        We partner with businesses and organizations to cultivate stronger, more resilient teams. We work with nurseries, schools, and universities to foster emotional resilience and self-awareness. We support small businesses in enhancing wellbeing and team cohesion. We help events create meaningful, wellbeing-focused experiences that truly resonate. Our goal is to create impactful moments that inspire growth, connection, and lasting positive change.
        </p>
      </div>
    </section>
  )
}
