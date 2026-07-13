"use client"

import { useEffect, useState } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix: string
  label: string
  format?: boolean
  isDecimal?: boolean
}

export default function AnimatedCounter({ value, suffix, label, format = false, isDecimal = false }: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal(0.3)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepTime = duration / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const display = isDecimal
    ? `${count.toFixed(1)}${suffix}`
    : format
    ? `${Math.floor(count).toLocaleString()}${suffix}`
    : `${Math.floor(count)}${suffix}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] border border-primary/5 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:border-accent/20 hover:-translate-y-1 transition-all duration-400"
    >
      <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
        {display}
      </div>
      <div className="text-sm font-medium text-text-light">{label}</div>
    </motion.div>
  )
}
