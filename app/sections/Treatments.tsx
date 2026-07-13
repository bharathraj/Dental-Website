"use client"

import { treatments } from "../lib/data"
import SectionHeader from "../components/SectionHeader"
import { motion } from "framer-motion"
import {
  Tooth,
  Sparkles,
  Sun,
  Smile,
  Wrench,
  Gem,
  Layers,
  Baby,
  Scissors,
  Leaf,
  Crown,
  Hospital,
  ArrowRight,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Tooth,
  Sparkles,
  Sun,
  Smile,
  Wrench,
  Gem,
  Layers,
  Baby,
  Scissors,
  Leaf,
  Crown,
  Hospital,
}

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        tag="Our Services"
        title="Comprehensive Dental Treatments"
        subtitle="From routine care to advanced cosmetic procedures, we offer a full spectrum of dental services tailored to your unique needs."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {treatments.map((treatment, i) => {
          const Icon = iconMap[treatment.icon] || Tooth

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="group relative bg-white rounded-3xl p-8 border border-primary/[0.06] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:border-accent/15 hover:-translate-y-2 transition-all duration-400 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mb-5 text-accent">
                <Icon size={28} />
              </div>

              <h3 className="font-serif text-xl font-bold text-primary mb-3">
                {treatment.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-5">
                {treatment.description}
              </p>

              <button
                onClick={() => {
                  const el = document.querySelector("#appointment")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
