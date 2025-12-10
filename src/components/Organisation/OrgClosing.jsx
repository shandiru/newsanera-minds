"use client"
import useAOS from "../useAOS"

export default function OrgClosing() {
  useAOS()

  return (
    <section className="bg-white py-20 px-6 text-center">

      <p
        className="org-close-copy font-body max-w-3xl mx-auto text-[var(--brand-deep)]/90 text-lg md:text-xl mb-6"
        data-aos="fade-up"
      >
        Whether you’re a small business or a large organisation, our goal is to help you build a
        workplace where people feel supported, capable, and calm  even during the busiest times.
      </p>

      <h3
        className="font-display text-2xl md:text-3xl text-[var(--brand-deep)]"
        data-aos="fade-up"
      >
        Because healthy teams do better work.{" "}
        <span className="italic text-[var(--brand-teal)]">Let's build yours.</span>
      </h3>

      <a
        href="/contact"
        className="org-close-cta inline-block mt-8 px-6 py-3 rounded-lg bg-[var(--brand-teal)] text-white font-body tracking-wide hover:opacity-90 transition"
        data-aos="zoom-in"
      >
        Get in touch
      </a>

    </section>
  )
}
