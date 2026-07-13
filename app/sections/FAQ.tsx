"use client"

import { useState } from "react"
import { faqs } from "../lib/data"
import SectionHeader from "../components/SectionHeader"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader
        tag="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about our dental services."
      />

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-accent/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]"
                  : "border-primary/[0.06]"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-primary pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent flex-shrink-0"
                >
                  <ChevronDown size={22} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-text-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
