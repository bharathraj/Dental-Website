"use client"

import { useState } from "react"
import SectionHeader from "../components/SectionHeader"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const treatmentOptions = [
  "Dental Implants",
  "Root Canal",
  "Teeth Whitening",
  "Invisible Aligners",
  "Braces",
  "Smile Makeover",
  "Veneers",
  "Kids Dentistry",
  "Wisdom Tooth",
  "Gum Treatment",
  "Crowns & Bridges",
  "Full Mouth Rehab",
  "General Checkup",
]

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section id="appointment" className="py-24 px-6 bg-gradient-to-br from-primary to-[#0f2d6e]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          tag="Book Now"
          title="Schedule Your Visit"
          subtitle="Fill out the form below and our team will confirm your appointment within 24 hours."
          dark
        />

        <motion.form
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white/8 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-accent focus:bg-white/15 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-accent focus:bg-white/15 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-accent focus:bg-white/15 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm font-medium">Treatment Required</label>
              <select
                required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-accent focus:bg-white/15 outline-none transition-all appearance-none"
              >
                <option value="" className="bg-primary">Select Treatment</option>
                {treatmentOptions.map((t) => (
                  <option key={t} value={t} className="bg-primary">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm font-medium">Preferred Date</label>
              <input
                type="date"
                required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-accent focus:bg-white/15 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm font-medium">Preferred Time</label>
              <select
                required
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-accent focus:bg-white/15 outline-none transition-all appearance-none"
              >
                <option value="" className="bg-primary">Select Time</option>
                <option value="morning" className="bg-primary">Morning (9 AM - 12 PM)</option>
                <option value="afternoon" className="bg-primary">Afternoon (12 PM - 4 PM)</option>
                <option value="evening" className="bg-primary">Evening (4 PM - 8 PM)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-white/90 text-sm font-medium">Additional Message</label>
              <textarea
                rows={3}
                placeholder="Any specific concerns or requirements..."
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-accent focus:bg-white/15 outline-none transition-all resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                  submitted
                    ? "bg-emerald-500 text-white"
                    : "bg-accent text-white hover:bg-accent-light hover:-translate-y-0.5"
                }`}
              >
                {submitted ? (
                  <span className="inline-flex items-center gap-2">
                    <Check size={20} /> Appointment Booked!
                  </span>
                ) : (
                  "Book Appointment"
                )}
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
