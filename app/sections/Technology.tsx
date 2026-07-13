"use client"

import { technologies } from "../lib/data"
import SectionHeader from "../components/SectionHeader"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"

export default function Technology() {
  return (
    <section id="technology" className="py-24 px-6 bg-gradient-to-br from-primary to-[#0f2d6e]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Advanced Technology"
          title="State-of-the-Art Equipment"
          subtitle="We invest in the latest dental technology to ensure precise diagnostics, comfortable treatments, and exceptional results."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => {
            const { ref, isVisible } = useScrollReveal()

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/8 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/12 hover:-translate-y-1 hover:border-accent/30 transition-all duration-400"
              >
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
