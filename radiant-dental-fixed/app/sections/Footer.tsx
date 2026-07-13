"use client"

import { Tooth, MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Book Appointment", href: "#appointment" },
]

const treatmentLinks = [
  "Dental Implants",
  "Root Canal",
  "Teeth Whitening",
  "Invisible Aligners",
  "Smile Makeover",
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-serif text-2xl font-bold mb-4">
              <Tooth className="w-8 h-8 text-accent" />
              Radiant Dental
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium dental care with a patient-first approach. Your smile is our passion.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 text-sm hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Treatments</h4>
            <ul className="space-y-3">
              {treatmentLinks.map((t) => (
                <li key={t}>
                  <span className="text-white/60 text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">123 Dental Street, Bandra West, Mumbai 400050</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white/60 text-sm hover:text-accent-light transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:info@radiantdental.com" className="text-white/60 text-sm hover:text-accent-light transition-colors">
                  info@radiantdental.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent flex-shrink-0" />
                <span className="text-white/60 text-sm">Mon-Sat: 9 AM - 8 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                <span className="text-white/60 text-sm">Emergency: 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <span>© 2026 Radiant Dental. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
