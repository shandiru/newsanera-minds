"use client"
import useAOS from "../useAOS"

export default function EducationWhyItMatters() {
  useAOS()

   return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        {/* Heading */}
        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b]"
          data-aos="fade-up"
        >
          Why It Matters
        </h2>

        {/* Image Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
          data-aos="fade-up"
        >
          <img 
            src="/e1.jpeg" 
            alt="Why it matters 1" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />

          <img 
            src="/e2.jpeg" 
            alt="Why it matters 2" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />

          <img 
            src="/e3.jpeg" 
            alt="Why it matters 3" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

      </div>
    </section>
  )
}
