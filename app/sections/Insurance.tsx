"use client"

import SectionHeader from "../components/SectionHeader"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"

const insurers = [
  "Star Health",
  "HDFC ERGO",
  "ICICI Lombard",
  "Bajaj Allianz",
  "Max Bupa",
  "New India Assurance",
  "Oriental Insurance",
  "United India",
]

export default function Insurance() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Insurance Partners"
          title="We Accept All Major Insurance"
          subtitle="We partner with leading insurance providers to make quality dental care accessible and affordable."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {insurers.map((insurer, i) => {
            const { ref, isVisible } = useScrollReveal()

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-bg rounded-xl p-6 flex items-center justify-center border border-primary/5 hover:border-accent/20 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-primary text-sm text-center">{insurer}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
