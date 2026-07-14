"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { portfolioData } from "@/lib/data"
import { SectionHeading } from "@/components/ui/section-heading"
import type { Project } from "@/types"
import * as React from "react"

const projectIcons: Record<string, string> = {
  "IHSG Platform": "📈",
  Autosup: "🤖",
  UMKMDesaGandoang: "🏘️",
  "AI Medical Waste Sorting System": "♻️",
  "SIREFA - Sistem Reservasi Fasilitas Aula": "🏛️",
  Ragakopi: "☕",
  "Sentiment Analysis - Mie Gacoan Karawang": "🍜",
}

const tabs = ["All", "Web App", "AI", "Other"]

function getProjectTag(project: Project): string {
  if (project.tech.some((t) => t.includes("AI") || t.includes("Machine"))) return "AI"
  if (project.tech.includes("Java") || project.tech.includes("Google Sites") || project.tech.includes("Data Mining"))
    return "Other"
  return "Web App"
}

function getScreenshotUrl(url: string) {
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`
}

const placeholderGradients = [
  "from-primary/20 to-purple-500/20",
  "from-cyan-500/20 to-blue-500/20",
  "from-amber-500/20 to-orange-500/20",
  "from-green-500/20 to-emerald-500/20",
  "from-pink-500/20 to-rose-500/20",
  "from-indigo-500/20 to-violet-500/20",
  "from-teal-500/20 to-cyan-500/20",
]

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = React.useState(false)
  const emoji = projectIcons[project.title] || "📁"
  const hasLiveUrl = !!project.links.live
  const gradient = placeholderGradients[index % placeholderGradients.length]

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={() => setOpen(true)}
        className="group cursor-pointer rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div className="relative h-40 sm:h-44 bg-muted overflow-hidden">
          {hasLiveUrl ? (
            <Image
              src={getScreenshotUrl(project.links.live!)}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <span className="text-5xl opacity-60">{emoji}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          {project.highlight && (
            <span className="absolute top-2 right-2 text-[10px] font-medium text-primary bg-background/80 backdrop-blur-sm rounded-full px-2 py-0.5">
              Featured
            </span>
          )}
          <div className="absolute bottom-2 left-3">
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors text-sm">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground/70 leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <Badge key={t} variant="secondary" className="text-[10px] px-1.5 py-0">
                {t}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{emoji}</span>
              <DialogTitle>{project.title}</DialogTitle>
            </div>
            <DialogDescription className="mt-2">{project.description}</DialogDescription>
          </DialogHeader>

          {hasLiveUrl && (
            <div className="relative w-full h-44 rounded-lg overflow-hidden bg-muted">
              <Image
                src={getScreenshotUrl(project.links.live!)}
                alt={`${project.title} preview`}
                fill
                className="object-cover object-top"
                sizes="500px"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            {project.links.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-4 w-4 mr-2" />
                  Source Code
                </a>
              </Button>
            )}
            {project.links.live && (
              <Button size="sm" asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export function Projects() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects =
    activeTab === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => getProjectTag(p) === activeTab)

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="Things I&apos;ve built — from Web3 to AI and everything in between"
        />

        <div className="mt-12 flex justify-center mb-8">
          <div className="inline-flex gap-1 rounded-xl border border-border/50 bg-card p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
