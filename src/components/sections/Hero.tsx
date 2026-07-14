"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/data"

const roles = ["Full-Stack Developer", "Next.js & FastAPI", "Web3 Explorer", "AI Enthusiast"]

function seededRandom(seed: number) {
  return ((seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff
}

const dots = Array.from({ length: 30 }).map((_, i) => {
  const seed = i * 7919
  return {
    top: `${seededRandom(seed) * 100}%`,
    left: `${seededRandom(seed + 1) * 100}%`,
    duration: `${14 + seededRandom(seed + 2) * 18}s`,
    delay: `${seededRandom(seed + 3) * 10}s`,
  }
})

function useTypingEffect(words: string[], speed = 80, deleteSpeed = 40, pause = 2000) {
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < word.length) {
          setCharIndex((c) => c + 1)
        } else {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1)
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, deleting ? deleteSpeed : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, index, words, speed, deleteSpeed, pause])

  return words[index].slice(0, charIndex)
}

const socialIcons: Record<string, React.ReactNode> = {
  github: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
}

export function Hero() {
  const typedText = useTypingEffect(roles, 90, 50, 2000)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-primary/30"
            style={{
              top: dot.top,
              left: dot.left,
              animation: `float ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      </div>

      <div className="flex flex-col items-center text-center max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative mx-auto h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/20">
            <Image
              src="/avatar.jpeg"
              alt={portfolioData.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <p className="text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 sm:mb-3 bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-[1.1]">
            {portfolioData.name}
          </h1>
          <div className="h-8 sm:h-10 md:h-12 flex items-center justify-center mb-4 sm:mb-6">
            <span className="text-lg sm:text-xl md:text-3xl font-semibold text-muted-foreground">
              {typedText}
              <span className="animate-pulse ml-0.5 text-primary">|</span>
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            {portfolioData.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Button asChild size="default" className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="default" asChild className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
        >
          {portfolioData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 sm:p-3 text-muted-foreground hover:text-foreground hover:bg-accent hover:scale-110 transition-all duration-200"
              aria-label={social.name}
            >
              {socialIcons[social.icon] || null}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1 text-muted-foreground/60">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
      </motion.div>
    </section>
  )
}
