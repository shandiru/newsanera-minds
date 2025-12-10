"use client"
import useAOS from "../useAOS"

export default function EventClosing() {
  useAOS()
return (
    <section className="bg-white py-18 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed mb-6"
          data-aos="fade-up"
        >
          Whether it’s a team offsite, a wellness event, or a gathering with friends  our sessions
          are designed to bring people together in a meaningful way. Each experience is tailored to
          your group  offering space to pause, connect, and recharge. Because wellbeing isn’t
          one-size-fits-all, and neither are we.
        </p>

      </div>
    </section>
  )
}
