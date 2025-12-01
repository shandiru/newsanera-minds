
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Programs Data
// Programs Data
const programs = [
  {
    title: "Stress & Resilience Mastery",
    description: "Empower your team with evidence-based tools to manage stress, prevent burnout and stay resilient in fast-paced environments. This program blends practical strategies with simple daily habits that strengthen wellbeing and focus.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
    badge: "high-pressure teams, corporate staff, frontline roles",
    category: "organisations",
  },
  {
    title: "Mental Health Awareness for Managers",
    description: "Give leaders the confidence to recognise early signs of distress, have supportive conversations and respond with clarity and care. Build a culture where mental health is understood, valued and actively supported.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
        <path d="m18 15-2-2"></path>
        <path d="m15 18-2-2"></path>
      </svg>
    ),
    badge: "team leaders, managers, HR professionals",
    category: "organisations",
  },
  {
    title: "Psychological Safety & Team Culture",
    description: "Transform communication and connection across your organisation. This workshop helps teams create trust, handle conflict constructively and work together with openness and confidence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    badge: "teams wanting better collaboration and stronger culture",
    category: "organisations",
  },
  {
    title: "Mindfulness & Emotional Regulation Series",
    description: "A calming, skills-based series designed to help employees stay grounded, focused and emotionally balanced. Participants learn simple, practical techniques that reduce overwhelm and restore mental clarity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
      </svg>
    ),
    badge: "teams experiencing pressure, rapid change or fatigue",
    category: "organisations",
  },
  {
    title: "Emotional Intelligence for Leaders",
    description: "Develop confident, compassionate leaders through EQ-based training that enhances communication, decision-making and people-focused leadership. Build stronger relationships and more effective teams.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
      </svg>
    ),
    badge: "leadership teams, aspiring leaders, managers",
    category: "organisations",
  },
  {
    title: "Change Management & Organisational Resilience",
    description: "Support your workforce through transitions with tools grounded in psychological science. Teams learn how to adapt, manage uncertainty and stay connected during periods of change.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    badge: "organisations navigating growth, restructuring or new systems",
    category: "organisations",
  },
  {
    title: "Focus & Productivity Skills Training",
    description: "Improve concentration, reduce mental clutter and boost productivity with practical cognitive tools. Employees learn how to work smarter, protect their focus and maintain mental energy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    badge: "high-demand roles, hybrid teams, corporate environments",
    category: "organisations",
  },
  {
    title: "Burnout Prevention Program",
    description: "A specialised series for teams at risk of chronic stress. This program teaches early burnout recognition, personal recovery strategies and sustainable self-care that supports long-term wellbeing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
    badge: "educators, healthcare teams, corporate staff under high workload",
    category: "organisations",
  },
 {
    title: "Emotional Regulation for Early Years (Nurseries & EYFS)",
    description: "A gentle, playful programme that teaches young children how to understand their feelings, express emotions safely and build healthy coping skills. Educators learn evidence-based strategies to support emotional development through stories, play and routine.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>,
    badge: "nurseries, early years settings, child-minders",
    category: "education",
  },
  {
    title: "Big Feelings: Emotional Literacy for Primary Pupils",
    description: "Help children recognise emotions, build resilience and communicate their needs effectively. This workshop uses age-appropriate tools, activities and role play to create confident, emotionally-aware learners.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
    badge: "primary schools, SEN settings, learning support teams",
    category: "education",
  },
  {
    title: "Supporting Neurodiversity in Education",
    description: "Equip staff with practical strategies to support autistic, ADHD, dyslexic and otherwise neurodivergent learners. This training promotes understanding, reduces overwhelm and empowers educators to create inclusive, sensory-aware learning environments.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></svg>,
    badge: "all educational staff, SEN departments, inclusion leads",
    category: "education",
  },
  {
    title: "Mental Health Awareness for Teachers & Support Staff",
    description: "This training helps educators recognise early signs of anxiety, depression, trauma and behavioural changes in students. Staff learn how to respond safely, hold supportive conversations and signpost effectively.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
    badge: "teachers, support teams, pastoral leaders",
    category: "education",
  },
  {
    title: "Creating Emotionally Safe Classrooms",
    description: "A practical workshop on building trust, reducing behaviour escalations and fostering positive teacher–student relationships. Learn classroom routines that help learners feel secure, connected and ready to learn.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
    badge: "primary & secondary educators, behaviour support staff",
    category: "education",
  },
  {
    title: "University Staff: Recognising & Responding to Student Distress",
    description: "Designed for lecturers, tutors and student services teams. This program teaches staff how to identify concerning behaviour, approach conversations with compassion and guide students towards appropriate support.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>,
    badge: "universities, colleges, student wellbeing teams",
    category: "education",
  },
  {
    title: "Student Wellbeing & Stress Resilience (Secondary–University)",
    description: "A practical skills workshop helping students manage academic pressure, exam stress and social challenges. Participants learn emotional regulation techniques, coping skills, and ways to stay grounded during demanding periods.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>,
    badge: "secondary schools, sixth forms, colleges, universities",
    category: "education",
  },
  {
    title: "Neurodiversity Awareness for Students",
    description: "An empowering session that helps learners understand neurodiversity, celebrate differences and build inclusive peer relationships. Students learn about sensory needs, communication styles and ways to support each other.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    badge: "schools, colleges, university societies",
    category: "education",
  },
  {
    title: "Study Skills for the Mind: Focus, Memory & Motivation",
    description: "Help students develop healthy study habits grounded in psychological science. This workshop covers focus strategies, memory techniques, time management and coping with academic overwhelm.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>,
    badge: "students aged 12+, exam-year groups, universities",
    category: "education",
  },
  {
    title: "Safeguarding & Trauma-Informed Practice in Education",
    description: "A specialised workshop teaching staff how trauma affects behaviour, learning and emotional responses. Teams learn how to respond with sensitivity, create routines that promote safety and reduce triggers.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>,
    badge: "educators working with vulnerable or high-needs students",
    category: "education",
  },
 {
    title: "Mindfulness & Calm Corner",
    description: "A peaceful space where guests can unwind, reset and experience guided mindfulness moments. Using short breathing practices, grounding techniques and sensory tools, this corner helps guests feel calmer and more present—ideal for high-energy events.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>,
    badge: "brand activations, wellness events, corporate parties",
    category: "events",
  },
  {
    title: "Stress Reset Station",
    description: "A quick, practical drop-in space teaching guests how to reduce tension, release stress and boost mental clarity in just a few minutes. Attendees walk away with simple techniques they can use anytime, anywhere.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>,
    badge: "corporate events, conferences, busy expos",
    category: "events",
  },
  {
    title: "Emotional Wellbeing & Self-Reflection Booth",
    description: "An uplifting corner where guests learn about emotional regulation, identify their current wellbeing state and take away personalised tips. Ideal for events that want to offer depth, connection and meaningful engagement.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    badge: "brand events, community events, launch parties",
    category: "events",
  },
  {
    title: "Neurodiversity-Friendly Zone",
    description: "An inclusive space designed to celebrate neurodiversity and promote understanding. Guests can explore sensory tools, learn about different neurotypes and discover ways to support focus, calm and communication.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></svg>,
    badge: "educational events, organisations, community festivals",
    category: "events",
  },
  {
    title: "Positive Psychology & Gratitude Wall",
    description: "A creative, interactive space where guests can write, draw or express messages of positivity, gratitude and hope. This station encourages connection, boosts mood and creates beautiful visual memories for the event.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>,
    badge: "corporate parties, charity events, wellbeing days",
    category: "events",
  },
  {
    title: "Mini Mental Health Check-In Booth",
    description: "A confidential, gentle drop-in experience where attendees can reflect on their mental wellbeing with a trained psychologist. Guests receive simple insights and take-home tools to support their mental health long after the event.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>,
    badge: "workplace events, conferences, employee wellbeing days",
    category: "events",
  },
  {
    title: "Focus & Energy Recharge Station",
    description: "A dynamic station offering tips for boosting brain energy, improving concentration and staying mentally sharp. Great for events where attendees need to stay focused and engaged over long periods.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    badge: "conferences, seminars, professional gatherings",
    category: "events",
  },
  {
    title: "Kids Big Feelings Corner (Family Events)",
    description: "A fun, interactive space teaching children simple emotional regulation skills through play, crafts and gentle guidance. Parents receive tips too—making it a valuable addition to any family-friendly event.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>,
    badge: "family festivals, community days, nursery or school events",
    category: "events",
  }
  
  // Add more programs and assign category: "organisations" | "education" | "events"
];

export default function ProgramsSection({ selectedCategory }) {
  const filteredPrograms = programs.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section className="px-4 py-16 bg-[#EFF0EA] font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#116F59]/50 bg-white p-6 shadow-sm hover:border-[#116F59] hover:shadow-lg"
              >
                <div>
                  <div className="mb-4 inline-flex rounded-lg bg-[#116F59]/10 p-3 text-[#116F59] transition-colors hover:bg-[#116F59] hover:text-[#E0F9EA]">
                    {program.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#002E1B] font-body">
                    {program.title}
                  </h3>

                  <p className="font-body mb-4 text-sm text-[#002E1B]/80 leading-relaxed ">
                    {program.description}
                  </p>
                </div>

                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs bg-[#002E1B] text-[#E0F9EA] font-body">
                  Ideal for: {program.badge}
                </span>

                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#116F59]/5 to-[#002E1B]/5 opacity-0 transition-opacity hover:opacity-100"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
