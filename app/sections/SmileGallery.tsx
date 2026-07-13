"use client"

import { useState } from "react"
import SectionHeader from "../components/SectionHeader"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"

const cases = [
  {
    title: "Smile Makeover",
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
  },
  {
    title: "Teeth Whitening",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
  },
  {
    title: "Veneers",
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
  },
]

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPos, setSliderPos] = useState(50)

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
      <div className="relative h-64 md:h-80">
        {/* After image (full width) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale" />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          onMouseDown={(e) => {
            const rect = e.currentTarget.parentElement!.getBoundingClientRect()
            const handleMove = (moveEvent: MouseEvent) => {
              const x = moveEvent.clientX - rect.left
              const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
              setSliderPos(percentage)
            }
            const handleUp = () => {
              document.removeEventListener("mousemove", handleMove)
              document.removeEventListener("mouseup", handleUp)
            }
            document.addEventListener("mousemove", handleMove)
            document.addEventListener("mouseup", handleUp)
          }}
          onTouchStart={(e) => {
            const rect = e.currentTarget.parentElement!.getBoundingClientRect()
            const handleMove = (moveEvent: TouchEvent) => {
              const x = moveEvent.touches[0].clientX - rect.left
              const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
              setSliderPos(percentage)
            }
            const handleUp = () => {
              document.removeEventListener("touchmove", handleMove)
              document.removeEventListener("touchend", handleUp)
            }
            document.addEventListener("touchmove", handleMove)
            document.addEventListener("touchend", handleUp)
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-primary rounded-full" />
              <div className="w-0.5 h-4 bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-accent/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
          After
        </div>
      </div>
      <div className="bg-white p-4 text-center">
        <h4 className="font-semibold text-primary">{title}</h4>
      </div>
    </div>
  )
}

export default function SmileGallery() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Smile Gallery"
          title="Transformations That Speak"
          subtitle="Drag the slider to see the incredible before and after results our patients have achieved."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => {
            const { ref, isVisible } = useScrollReveal()

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <BeforeAfterSlider before={c.before} after={c.after} title={c.title} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
