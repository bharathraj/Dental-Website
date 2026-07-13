"use client"

import SectionHeader from "../components/SectionHeader"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

const blogs = [
  {
    title: "Dental Care Tips for a Healthier Smile",
    excerpt: "Discover the essential daily habits that can transform your oral health and keep your smile bright for years to come.",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
    category: "Oral Health",
  },
  {
    title: "Benefits of Dental Implants",
    excerpt: "Learn why dental implants are considered the gold standard for tooth replacement and how they can restore your confidence.",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
    category: "Implants",
  },
  {
    title: "Root Canal Myths Debunked",
    excerpt: "Separate fact from fiction about root canal treatments. Modern techniques make this procedure virtually painless.",
    date: "Jan 5, 2026",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
    category: "Endodontics",
  },
  {
    title: "Best Age for Braces",
    excerpt: "Is there really a best age for orthodontic treatment? Find out why braces can work at any stage of life.",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
    category: "Orthodontics",
  },
  {
    title: "Teeth Whitening Guide",
    excerpt: "Everything you need to know about professional teeth whitening — from preparation to aftercare.",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
    category: "Cosmetic",
  },
]

export default function Blog() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        tag="From Our Blog"
        title="Dental Health Insights"
        subtitle="Stay informed with expert tips, treatment guides, and the latest in dental care technology."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => {
          const { ref, isVisible } = useScrollReveal()

          return (
            <motion.article
              key={i}
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-primary/[0.06] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-400"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-text-light text-xs mb-3">
                  <Calendar size={14} />
                  {blog.date}
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
