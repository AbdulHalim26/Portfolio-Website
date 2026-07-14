"use client"

import { motion } from "framer-motion"
import { Download, GraduationCap, Briefcase, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/data"
import { SectionHeading } from "@/components/ui/section-heading"

const typeConfig = {
  education: { icon: GraduationCap, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  work: { icon: Briefcase, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  achievement: { icon: Trophy, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
}

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Experience"
          subtitle="What I&apos;ve been up to — studies, organizations, and milestones"
        />

        <div className="mt-12 flex justify-center mb-10">
          <Button variant="outline" asChild className="rounded-full">
            <a href="/cv.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {portfolioData.experiences.map((exp, index) => {
              const config = typeConfig[exp.type]
              const Icon = config.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative pl-0 sm:pl-16"
                >
                  <div
                    className={`absolute left-2 sm:left-[9px] top-1 hidden sm:flex h-[30px] w-[30px] items-center justify-center rounded-full ${config.bg} ring-4 ring-background z-10`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${config.color}`} />
                  </div>

                  <div className={`rounded-xl border-l-4 ${config.border} bg-card p-4 hover:shadow-md transition-all duration-300`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-sm">{exp.title}</h3>
                          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${config.bg} ${config.color}`}>
                            {exp.type === "education" ? "Education" : exp.type === "work" ? "Org" : "Achievement"}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="shrink-0 text-[11px] text-muted-foreground/60 bg-muted/50 rounded-full px-2.5 py-0.5 whitespace-nowrap font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed mt-2">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
