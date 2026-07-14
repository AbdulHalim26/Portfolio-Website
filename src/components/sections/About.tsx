"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/data"
import { SectionHeading } from "@/components/ui/section-heading"
import { GraduationCap, MapPin, Code, Award } from "lucide-react"

const stats = [
  { icon: GraduationCap, label: "Semester", value: "4" },
  { icon: Code, label: "Projects", value: "7+" },
  { icon: Award, label: "GPA", value: "3.84" },
  { icon: MapPin, label: "Location", value: "Karawang" },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="About Me"
          subtitle="Informatics student who codes, brews coffee, and explores Web3"
        />

        <div className="mt-12 grid md:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-3 space-y-4"
          >
            <div className="relative">
              <span className="text-6xl font-serif text-primary/20 absolute -top-6 -left-2 select-none">
                &ldquo;
              </span>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line pl-4 italic">
                {portfolioData.bio}
              </p>
            </div>
            <p className="text-sm text-muted-foreground/60 pl-4">
              Based in <span className="text-foreground font-medium">{portfolioData.location}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: "backOut" }}
                    className="rounded-xl border border-border/50 bg-card p-4 hover:border-primary/30 transition-colors text-center group"
                  >
                    <Icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
