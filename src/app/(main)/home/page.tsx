import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

export const metadata: Metadata = {
  title: "Muhammad Abdul Halim | Full-Stack Developer",
  description: "Personal portfolio of Muhammad Abdul Halim — Informatics student at UNSIKA, passionate about web development, AI, and blockchain technology.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
