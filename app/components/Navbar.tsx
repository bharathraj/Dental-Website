"use client"

import { useScrollPosition } from "../hooks/useScrollPosition"
import { motion } from "framer-motion"
import { Menu, X, CircleDot } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments" },
  { href: "#doctors", label: "Doctors" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const { isScrolled } = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 flex items-center justify-between transition-all duration-400 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(10,36,99,0.08)] border-b border-primary/5"
          : "py-5 bg-white/80 backdrop-blur-lg"
      }`}
    >
      <a href="#home" className="flex items-center gap-2 font-serif text-2xl font-bold text-primary">
       <CircleDot className="w-8 h-8 text-accent" />
        Radiant Dental
      </a>

      <ul className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollToSection(link.href)}
              className="relative text-sm font-medium text-text hover:text-accent transition-colors py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <button
          onClick={() => scrollToSection("#appointment")}
          className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-all duration-300 shadow-[0_4px_15px_rgba(10,36,99,0.3)] hover:shadow-[0_8px_25px_rgba(13,148,136,0.4)] hover:-translate-y-0.5"
        >
          Book Now
        </button>
      </div>

      <button
        className="lg:hidden p-2 text-primary"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 lg:hidden"
        >
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-text font-medium hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollToSection("#appointment")}
                className="w-full bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-all"
              >
                Book Appointment
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
