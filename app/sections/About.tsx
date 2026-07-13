"use client"

import SectionHeader from "../components/SectionHeader"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"
import { Shield, Award, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Patient Safety First",
    desc: "100% sterilized equipment and strict infection control protocols.",
  },
  {
    icon: Award,
    title: "Award-Winning Care",
    desc: "Recognized for excellence in dental care and patient satisfaction.",
  },
  {
    icon: Heart,
    title: "Compassionate Approach",
    desc: "We treat every patient like family with gentle, personalized care.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Board-certified specialists with decades of combined experience.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        tag="About Us"
        title="Excellence in Every Smile"
        subtitle="For over two decades, Radiant Dental has been transforming smiles and changing lives through world-class dental care."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
              alt="Dental clinic interior"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
            <div className="font-serif text-4xl font-bold">20+</div>
            <div className="text-sm opacity-90">Years of Excellence</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
            A Legacy of Trust & Innovation
          </h3>
          <p className="text-text-light leading-relaxed mb-6">
            Founded in 2006, Radiant Dental has grown from a single-chair clinic to one of the most
            trusted dental care providers in the region. Our commitment to combining cutting-edge
            technology with compassionate care has earned us the trust of over 30,000 patients.
          </p>
          <p className="text-text-light leading-relaxed mb-8">
            We believe that everyone deserves a healthy, beautiful smile. That is why we have invested
            in the latest dental technology and assembled a team of specialists who are passionate about
            delivering exceptional results with minimal discomfort.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-primary/5 px-5 py-3 rounded-xl">
              <div className="font-serif text-2xl font-bold text-primary">30K+</div>
              <div className="text-xs text-text-light">Happy Patients</div>
            </div>
            <div className="bg-primary/5 px-5 py-3 rounded-xl">
              <div className="font-serif text-2xl font-bold text-primary">10+</div>
              <div className="text-xs text-text-light">Specialists</div>
            </div>
            <div className="bg-primary/5 px-5 py-3 rounded-xl">
              <div className="font-serif text-2xl font-bold text-primary">4.9★</div>
              <div className="text-xs text-text-light">Google Rating</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, i) => {
          const { ref, isVisible } = useScrollReveal()
          const Icon = value.icon

          return (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-primary/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                <Icon size={24} />
              </div>
              <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
              <p className="text-text-light text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
