import React from "react";

const programs = [
  {
    title: "Stress & Resilience Mastery",
    description:
      "Empower your team with evidence-based tools to manage stress, prevent burnout and stay resilient in fast-paced environments. This program blends practical strategies with simple daily habits that strengthen wellbeing and focus.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        />
      </svg>
    ),
    badge: "high-pressure teams, corporate staff, frontline roles",
  },
  {
    title: "Mental Health Awareness for Managers",
    description:
      "Give leaders the confidence to recognise early signs of distress, have supportive conversations and respond with clarity and care. Build a culture where mental health is understood, valued and actively supported.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        />
      </svg>
    ),
    badge: "team leaders, managers, HR professionals",
  },
  {
    title: "Psychological Safety & Team Culture",
    description:
      "Transform communication and connection across your organisation. This workshop helps teams create trust, handle conflict constructively and work together with openness and confidence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      </svg>
    ),
    badge: "teams wanting better collaboration and stronger culture",
  },
  {
    title: "Mindfulness & Emotional Regulation Series",
    description:
      "A calming, skills-based series designed to help employees stay grounded, focused and emotionally balanced. Participants learn simple, practical techniques that reduce overwhelm and restore mental clarity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
      </svg>
    ),
    badge: "teams experiencing pressure, rapid change or fatigue",
  },
  {
    title: "Emotional Intelligence for Leaders",
    description:
      "Develop confident, compassionate leaders through EQ-based training that enhances communication, decision-making and people-focused leadership. Build stronger relationships and more effective teams.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
      </svg>
    ),
    badge: "leadership teams, aspiring leaders, managers",
  },
  {
    title: "Change Management & Organisational Resilience",
    description:
      "Support your workforce through transitions with tools grounded in psychological science. Teams learn how to adapt, manage uncertainty and stay connected during periods of change.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    badge: "organisations navigating growth, restructuring or new systems",
  },
  {
    title: "Focus & Productivity Skills Training",
    description:
      "Improve concentration, reduce mental clutter and boost productivity with practical cognitive tools. Employees learn how to work smarter, protect their focus and maintain mental energy.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    badge: "high-demand roles, hybrid teams, corporate environments",
  },
  {
    title: "Burnout Prevention Program",
    description:
      "A specialised series for teams at risk of chronic stress. This program teaches early burnout recognition, personal recovery strategies and sustainable self-care that supports long-term wellbeing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
    badge: "educators, healthcare teams, corporate staff under high workload",
  },
];

export default function ProgramsSection() {
  return (
    <section className="px-4 py-16 bg-[#EFF0EA] font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#116F59]/50 bg-white p-6 shadow-sm transition-all hover:border-[#116F59] hover:shadow-lg"
            >
              <div>
                <div className="mb-4 inline-flex rounded-lg bg-[#116F59]/10 p-3 text-[#116F59] transition-colors hover:bg-[#116F59] hover:text-[#E0F9EA]">
                  {program.icon}
                </div>

                {/* Program Title */}
                <h3 className="mb-3 text-xl font-semibold text-[#002E1B] font-body">
                  {program.title}
                </h3>

                {/* Program Description */}
                <p className=" font-body mb-4 text-sm text-[#002E1B]/80 leading-relaxed font-sans">
                  {program.description}
                </p>
              </div>

              {/* Badge */}
              <span className=" inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs bg-[#002E1B] text-[#E0F9EA] font-sans">
                Ideal for: {program.badge}
              </span>

              {/* Hover Gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#116F59]/5 to-[#002E1B]/5 opacity-0 transition-opacity hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
