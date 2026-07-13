"use client"

import { testimonials } from "../lib/data"
import SectionHeader from "../components/SectionHeader"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-bg to-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Patient Stories"
          title="What Our Patients Say"
          subtitle="Real reviews from real patients who trust us with their smiles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => {
            const { ref, isVisible } = useScrollReveal()
            const initials = testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-primary/[0.06] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-text leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold">
                    {initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">
                      {testimonial.name}
                    </h4>
                    <span className="text-text-light text-xs">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
