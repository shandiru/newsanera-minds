"use client"
import useAOS from "../useAOS"

export default function EventFormats() {
  useAOS()

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2
          className="font-display text-2xl md:text-3xl text-[var(--brand-teal)] mb-4"
          data-aos="fade-up"
        >
          Flexible Formats
        </h2>

       <p
  className="font-body text-[var(--brand-deep)]/90 text-lg md:text-xl leading-relaxed"
  data-aos="fade-up"
>
  We offer flexible formats, from online workshops to in-person sessions,
  delivered either in your space or ours. Each experience is shaped with care to
  meet your group where they are.
</p>

<p
  className="font-body text-[var(--brand-deep)]/90 text-lg md:text-xl leading-relaxed"
  data-aos="fade-up"
  data-aos-delay="200"
>
  Whether it’s a team offsite, a wellness event, or an intimate gathering, our
  sessions create space to pause, connect, and recharge. Wellbeing is not
  one-size-fits-all  and neither are we.
</p>


      </div>
    </section>
  )
}
