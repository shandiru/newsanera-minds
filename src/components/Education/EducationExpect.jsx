"use client"
import useAOS from "../useAOS"

export default function EducationExpect() {
  useAOS()

   return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b] mb-6 text-center"
          data-aos="fade-up"
        >
          What to Expect
        </h2>

        <ul className="font-body text-[#062016]/90 text-[17px] md:text-lg space-y-5">

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              Thoughtful, down-to-earth workshops.
            </span>{" "}
            Designed for nurseries, schools, colleges, and universities  grounded, warm, and tailored
            to real needs.
          </li>

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              Led by accredited psychotherapists.
            </span>{" "}
            We translate evidence-based practice into real-world, practical tools that staff and
            students can use immediately.
          </li>

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              Flexible, assessment-based approach.
            </span>{" "}
            Every session is shaped around your environment  from staff training and student mental
            health days to curriculum-linked wellbeing workshops.
          </li>

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              Supportive workshops, assemblies & presentations.
            </span>{" "}
            Covering emotional regulation, self-esteem building, transitions, stress, and academic pressure.
          </li>

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              A vision for wellbeing woven into education.
            </span>{" "}
             When wellbeing is part of the learning environment, every child and adult feels
            seen, supported, and safe to grow.
          </li>

        </ul>
      </div>
    </section>
  )
}
