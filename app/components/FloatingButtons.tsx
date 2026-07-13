"use client"

import { useScrollPosition } from "../hooks/useScrollPosition"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, MessageCircle } from "lucide-react"

export default function FloatingButtons() {
  const { isScrolled } = useScrollPosition()

  return (
    <>
      <motion.a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)]"
      >
        <MessageCircle size={28} fill="white" />
      </motion.a>

      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-24 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_4px_15px_rgba(10,36,99,0.3)] hover:bg-accent hover:-translate-y-1 transition-all"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
