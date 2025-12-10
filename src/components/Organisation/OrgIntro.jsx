"use client"
import useAOS from "../useAOS"

export default function OrgIntro() {
  useAOS()

   return (
    <section className="bg-[var(--brand-bg)] py-14 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        <h2
          className="font-display text-2xl md:text-3xl text-[var(--brand-teal)]"
          data-aos="fade-up"
        >
          Mental Wellbeing Workshops for Organisations
        </h2>
 
        <p
          className="font-body text-[var(--brand-deep)]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
           When people thrive, so does the workplace.
        </p> 

        <p
          className="org-para font-body text-[var(--brand-deep)]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Our therapist-led workshops help organisations create healthier, more connected teams 
          reducing stress, preventing burnout, and building a culture where wellbeing isn’t just a
          buzzword, it’s part of how you work.
        </p>

        <p
          className="org-para font-body text-[var(--brand-deep)]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          We know every workplace is different. That's why every session is tailored to your people,
          your challenges, and your goals.
        </p>

      </div>
    </section>
  )
}
