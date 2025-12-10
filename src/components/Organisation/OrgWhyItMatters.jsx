"use client"
import useAOS from "../useAOS"
import { motion } from "framer-motion"

export default function OrgWhyItMatters() {
  useAOS()

 return (
     <section className="bg-[var(--brand-bg)] py-16 px-6 text-center">
       <div className="max-w-3xl mx-auto space-y-5">
 
         <h2
           className="font-display text-2xl md:text-3xl text-[var(--brand-teal)]"
           data-aos="fade-up"
         >
           Why It Matters
         </h2>
 
         <p
           className="org-why font-body text-[var(--brand-deep)]/90 text-lg md:text-xl leading-relaxed"
           data-aos="fade-up"
         >
           Mental health isn’t separate from performance — it drives it.
         </p>
 
         {/* --- IMAGE GRID WITH HOVER/ACTIVE ANIMATION --- */}
         <div
           className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"
           data-aos="fade-up"
         >
           {["/w1.png", "/w2.jpeg", "/w3.png"].map((src, i) => (
             <motion.div
               key={i}
               whileHover={{
                 y: -8,
                 scale: 1.03,
                 borderColor: "var(--brand-teal)",
               }}
               whileTap={{
                 y: -8,
                 scale: 1.03,
                 borderColor: "var(--brand-teal)",
               }}
               transition={{
                 duration: 0.22,
                 ease: "easeOut",
               }}
               className="border border-[#bfc8c5] rounded-xl overflow-hidden bg-white cursor-pointer"
             >
               <img
                 src={src}
                 alt={`Why It Matters ${i + 1}`}
                 className="w-full h-full object-cover"
               />
             </motion.div>
           ))}
         </div>
 
         <p
           className="org-why font-body text-[var(--brand-deep)]/90 text-lg md:text-xl"
           data-aos="fade-up"
         >
           Supporting mental health isn’t just kindness — it’s smart business.
         </p>
 
       </div>
     </section>
   );
}
