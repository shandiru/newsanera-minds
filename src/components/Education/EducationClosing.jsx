"use client"
import useAOS from "../useAOS"

export default function EducationClosing() {
  useAOS()

   return (
    <section className="bg-[var(--brand-bg)] py-20 px-6 text-center">

      <p
        className="font-body max-w-3xl mx-auto text-[var(--brand-deep)]/90 text-lg md:text-xl mb-6"
        data-aos="fade-up"
      >
        Let’s build educational sectors where wellbeing is woven into every lesson and every person
        feels seen, supported, and safe to grow.
      </p>

      <a
        href="/contact"
        className="inline-block mt-6 px-6 py-3 rounded-lg bg-[var(--brand-teal)] text-white font-body tracking-wide hover:opacity-90 transition"
        data-aos="zoom-in"
      >
        Get in touch
      </a>

    </section>
  )
}
