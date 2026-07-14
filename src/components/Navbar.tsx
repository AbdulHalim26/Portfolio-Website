"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.href.slice(1))
    ).filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className={cn(
            "relative mx-auto mt-3 flex h-14 items-center justify-between rounded-2xl border transition-all duration-500 px-4",
            scrolled
              ? "border-border/20 bg-background/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              : "border-transparent bg-background/20 backdrop-blur-sm"
          )}
        >
          <Link href="/home" className="relative z-10">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary/25 to-primary/5 text-primary font-bold text-xs tracking-tight ring-1 ring-primary/15 transition-all duration-300 hover:ring-primary/40">
              AH
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5 relative z-10" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3 py-1.5 text-sm transition-all duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground/70 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              )
            })}
            <span className="mx-1.5 h-4 w-px bg-border/40" />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground/70 hover:text-foreground hover:bg-accent/60 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-1 relative z-10">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground/70 hover:text-foreground hover:bg-accent/60 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground hover:bg-accent/60 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-1">
          <div className="rounded-2xl border border-border/20 bg-background/80 backdrop-blur-2xl shadow-xl overflow-hidden">
            <nav className="flex flex-col p-2 gap-0.5" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "relative rounded-xl px-4 py-3 text-sm transition-all duration-200",
                      isActive
                        ? "text-foreground font-medium bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
