"use client"

import Link from "next/link"
import { ArrowUpRight, ChevronUp } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { portfolioData } from "@/lib/data"

const socialIcons: Record<string, React.FC<{ className?: string }>> = {
  linkedin: FaLinkedin,
  github: SiGithub,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative flex items-center justify-center py-8">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/30 bg-background text-xs text-muted-foreground/50">
            ◆
          </span>
        </div>

        <div className="text-center pb-10">
          <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
            Got a project in mind?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
            Let&apos;s build something
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="underline underline-offset-4 decoration-border/50 group-hover:decoration-foreground/30 transition-all">
                {portfolioData.email}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <span className="hidden sm:block text-muted-foreground/20">/</span>
            <div className="flex items-center gap-3">
              {portfolioData.socials.map((social) => {
                const Icon = socialIcons[social.icon]
                if (!Icon) return null
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border/30 text-muted-foreground/60 hover:text-foreground hover:border-foreground/30 hover:bg-accent/50 hover:-translate-y-0.5 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/home" className="shrink-0">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary/25 to-primary/5 text-primary font-bold text-xs ring-1 ring-primary/15">
                AH
              </span>
            </Link>
            <div className="flex items-center gap-3 text-xs text-muted-foreground/50">
              <span>&copy; {new Date().getFullYear()} {portfolioData.name}</span>
              <span className="text-muted-foreground/20">|</span>
              <span>Built with Next.js</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {["About", "Skills", "Projects", "Contact"].map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={scrollToTop}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/30 text-muted-foreground/40 hover:text-foreground hover:border-foreground/30 hover:bg-accent/50 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
