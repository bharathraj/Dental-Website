"use client"

import { stats } from "../lib/data"
import AnimatedCounter from "../components/AnimatedCounter"

export default function Stats() {
  return (
    <section id="stats" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {stats.map((stat, i) => (
          <AnimatedCounter
            key={i}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            format={stat.format}
            isDecimal={stat.isDecimal}
          />
        ))}
      </div>
    </section>
  )
}
