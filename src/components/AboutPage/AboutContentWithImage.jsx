"use client"
import useAOS from "../useAOS"

export default function AboutContentWithImage() {
  useAOS()

  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-5" data-aos="fade-right">
          <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-teal)]">
            Our Story
          </h2>
          <p className="font-body text-[var(--brand-deep)]/90 text-[17px] md:text-lg leading-relaxed">
            We built Sanera Minds to bring learning back to life: people-centred, warm, practical, and genuinely uplifting. Our work is rooted in the belief that people learn best when they feel supported, understood, and inspired. We’re here to create experiences that make that possible..
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <img
            src="/about1.png"
            alt="Sanera Minds Workshop"
            className="w-full h-[380px] object-cover"
          />
        </div>

      </div>
    </section>
  )
}
