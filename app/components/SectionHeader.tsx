"use client"

import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  tag: string
  title: string
  subtitle: string
  dark?: boolean
}

export default function SectionHeader({ tag, title, subtitle, dark = false }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="text-center mb-16"
    >
      <span className={`inline-block text-sm font-semibold uppercase tracking-[2px] mb-4 ${dark ? "text-accent-light" : "text-accent"}`}>
        {tag}
      </span>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${dark ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${dark ? "text-white/70" : "text-text-light"}`}>
        {subtitle}
      </p>
    </motion.div>
  )
}
