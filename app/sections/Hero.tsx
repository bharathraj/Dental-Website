"use client"

import { motion } from "framer-motion"
import { Calendar, Phone } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-primary/40 to-primary/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Now Accepting New Patients
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Your Smile,{" "}
          <span className="text-accent-light">Our Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Providing advanced dental care with experienced dentists, modern technology, and a
          patient-first approach. Experience the difference of truly personalized dental care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("#appointment")}
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-accent-light transition-all duration-300 shadow-[0_10px_30px_rgba(13,148,136,0.4)] hover:shadow-[0_15px_40px_rgba(13,148,136,0.5)] hover:-translate-y-1"
          >
            <Calendar size={20} />
            Book Appointment
          </button>
          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-base border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <Phone size={20} />
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
