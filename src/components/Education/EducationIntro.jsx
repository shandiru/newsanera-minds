"use client"
import useAOS from "../useAOS"

export default function EducationIntro() {
  useAOS()

   return (
    <section className="bg-[#eff0ea] py-14 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b]"
          data-aos="fade-up"
        >
          Mental Wellbeing Workshops for Nurseries, Schools & Universities
        </h2>

         <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
           Learning starts with feeling safe, supported, and seen.
        </p> 

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          We create thoughtful, down-to-earth workshops designed specifically for nurseries,
          schools, colleges, and universities. Whether you’re supporting your staff, students,
          or both  our sessions give people the tools and confidence to approach mental health
          with awareness, empathy, and practical skills they can use every day.
        </p>

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Led by accredited psychotherapists, our workshops bring evidence-based practice to life
          through warmth, connection, and practical learning you can genuinely use.
        </p>

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Flexible, assessment-based approach. We tailor every session to your specific needs 
          from staff wellbeing training, neurodiversity workshops, and student mental health days
          to curriculum-linked workshops.
        </p>

      </div>
    </section>
  )
}
