"use client"
import useAOS from "../useAOS"

export default function AboutClosing() {
  useAOS()

 return (
    <section className="bg-white py-20 px-6 text-center">
      <p
        className="font-body max-w-3xl mx-auto text-[var(--brand-deep)]/90 text-lg md:text-xl mb-6"
        data-aos="fade-up"
      >
        Whether it’s online, in-person, or hybrid, our sessions are interactive,
        practical, and always human.
      </p>

      <h3
        className="font-display text-2xl md:text-3xl text-[var(--brand-deep)]"
        data-aos="fade-up"
      >
        It’s time for a new era.{" "}
        <span className="italic text-[var(--brand-teal)]">Welcome to Sanera Minds.</span>
      </h3>

      <a
        href="/contact"
        className="inline-block mt-8 px-6 py-3 rounded-lg bg-[var(--brand-teal)] text-white tracking-wide hover:opacity-90 transition"
        data-aos="zoom-in"
      >
        Get in touch
      </a>
    </section>
  )
}
