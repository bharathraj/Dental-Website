"use client"

import { doctors } from "../lib/data"
import SectionHeader from "../components/SectionHeader"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        tag="Our Team"
        title="Meet Our Doctors"
        subtitle="Our team of highly qualified specialists brings decades of combined experience and a genuine passion for patient care."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-white rounded-3xl overflow-hidden border border-primary/[0.06] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-400"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-1">
                {doctor.name}
              </h3>
              <p className="text-accent font-semibold text-sm mb-1">
                {doctor.degree}
              </p>
              <p className="text-text-light text-sm mb-3">
                {doctor.specialization}
              </p>
              <div className="flex items-center gap-2 text-text-light text-sm mb-5">
                <Clock size={14} />
                {doctor.experience}
              </div>
              <button
                onClick={() => {
                  const el = document.querySelector("#appointment")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
