"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

function seededRandom(seed: number) {
  return ((seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff
}

const particles = Array.from({ length: 20 }).map((_, i) => {
  const seed = i * 7919
  return {
    top: `${seededRandom(seed) * 100}%`,
    left: `${seededRandom(seed + 1) * 100}%`,
    size: 2 + seededRandom(seed + 2) * 3,
    duration: `${8 + seededRandom(seed + 3) * 12}s`,
    delay: `${seededRandom(seed + 4) * 8}s`,
  }
})

const bubbles = [
  { text: "", style: "opacity-0" },
  { text: "Hi! Welcome to my portfolio!", sub: "I'm the bot here 👋" },
  { text: "Interested in seeing what I've built?", sub: "Tap to explore! ✨" },
  { text: "Presenting... My Portfolio!", sub: "Hope you enjoy it 🚀" },
]


export default function SplashPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [phase, setPhase] = useState<"enter" | "exit">("enter")
  const [shake, setShake] = useState(false)

  const maxStep = 3

  const handleTap = useCallback(() => {
    if (phase === "exit") return

    setShake(true)
    setTimeout(() => setShake(false), 250)

    const next = step + 1
    setStep(next)

    if (next > maxStep) {
      setTimeout(() => {
        setPhase("exit")
        setTimeout(() => router.replace("/home"), 1000)
      }, 400)
    }
  }, [step, phase, router])

  const bubble = bubbles[Math.min(step, 3)]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background cursor-pointer overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{
          opacity: phase === "exit" ? 0 : 1,
          scale: phase === "exit" ? 1.03 : 1,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onClick={handleTap}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/15"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                animation: `float ${p.duration} ease-in-out infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
          {step >= 1 && (
            <motion.div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/[0.03] blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-lg mx-auto">
          {/* Speech bubble */}
          <AnimatePresence mode="wait">
            {step >= 1 && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "backOut" }}
                className="mb-4 sm:mb-5"
              >
                <div className="relative inline-block px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-card border border-border/30 shadow-lg max-w-xs mx-auto">
                  <p className="text-sm sm:text-base font-medium text-foreground">{bubble.text}</p>
                  {bubble.sub && (
                    <p className="text-[11px] sm:text-xs text-muted-foreground/60 mt-0.5">{bubble.sub}</p>
                  )}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-card border-r border-b border-border/30 rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Robot face */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            className={`inline-block ${shake ? "animate-shake" : ""}`}
          >
            <svg viewBox="0 0 120 100" className="w-28 h-24 sm:w-36 sm:h-32 mx-auto">
              {/* Robot body */}
              <rect x="30" y="25" width="60" height="60" rx="14"
                fill="currentColor" fillOpacity="0.08"
                stroke="currentColor" strokeWidth="2" strokeOpacity="0.2"
              />
              {/* Robot head */}
              <rect x="35" y="15" width="50" height="30" rx="8"
                fill="currentColor" fillOpacity="0.1"
                stroke="currentColor" strokeWidth="2" strokeOpacity="0.2"
              />
              {/* Antenna */}
              <motion.g
                animate={{ rotate: step >= 2 ? [0, 12, 0] : 0 }}
                transition={{ duration: 0.4, repeat: step >= 2 ? Infinity : 0, repeatDelay: 0.8 }}
                style={{ transformOrigin: "60px 15px" }}
              >
                <rect x="58" y="4" width="4" height="12" rx="2"
                  fill="currentColor" fillOpacity="0.12"
                  stroke="currentColor" strokeWidth="1" strokeOpacity="0.15"
                />
                <motion.circle cx="60" cy="3" r="3"
                  fill="currentColor"
                  fillOpacity={step >= 1 ? 0.5 : 0.15}
                  animate={{ fillOpacity: step >= 2 ? [0.5, 1, 0.5] : 0.5 }}
                  transition={{ duration: 0.5, repeat: step >= 2 ? Infinity : 0 }}
                />
              </motion.g>
              {/* Eyes */}
              <g>
                {step === 0 ? (
                  <>
                    <line x1="42" y1="27" x2="50" y2="27"
                      stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" />
                    <line x1="70" y1="27" x2="78" y2="27"
                      stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" />
                  </>
                ) : step === 1 ? (
                  <>
                    <line x1="42" y1="26" x2="50" y2="30"
                      stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
                    <line x1="70" y1="26" x2="78" y2="30"
                      stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
                  </>
                ) : step === 2 ? (
                  <>
                    <circle cx="46" cy="28" r="4"
                      fill="currentColor" fillOpacity="0.5" />
                    <circle cx="74" cy="28" r="4"
                      fill="currentColor" fillOpacity="0.5" />
                  </>
                ) : (
                  <motion.g
                    animate={{ scaleY: [1, 0.2, 1] }}
                    transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1.5 }}
                    style={{ transformOrigin: "60px 28px" }}
                  >
                    <path d="M42 26l4 4M46 26l-4 4"
                      stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
                    <path d="M70 26l4 4M74 26l-4 4"
                      stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
                  </motion.g>
                )}
              </g>
              {/* Mouth */}
              <motion.rect x="50" y="48" width="20" height={step >= 2 ? 10 : 6} rx="5"
                fill="currentColor" fillOpacity="0.12"
                stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.15"
                animate={{
                  scaleY: step >= 2 ? [1, 0.6, 1] : 1,
                  scaleX: step >= 2 ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: step >= 2 ? Infinity : 0, repeatDelay: 0.6 }}
                style={{ transformOrigin: "60px 53px" }}
              />
              {/* Ears */}
              <motion.rect x="24" y="32" width="8" height="16" rx="3"
                fill="currentColor" fillOpacity="0.06"
                stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.12"
                animate={{ rotate: step >= 2 ? [0, 10, 0] : 0 }}
                transition={{ duration: 0.3, repeat: step >= 2 ? Infinity : 0, repeatDelay: 0.8 }}
                style={{ transformOrigin: "28px 40px" }}
              />
              <motion.rect x="88" y="32" width="8" height="16" rx="3"
                fill="currentColor" fillOpacity="0.06"
                stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.12"
                animate={{ rotate: step >= 2 ? [0, -10, 0] : 0 }}
                transition={{ duration: 0.3, repeat: step >= 2 ? Infinity : 0, repeatDelay: 0.8 }}
                style={{ transformOrigin: "92px 40px" }}
              />
              {/* Hands */}
              {step >= 1 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.rect x="18" y="52" width="12" height="8" rx="4"
                    fill="currentColor" fillOpacity="0.06"
                    stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.12"
                    animate={{ rotate: step === 1 ? [0, -20, 0] : 0 }}
                    transition={{ duration: 0.6, repeat: step === 1 ? 2 : 0 }}
                    style={{ transformOrigin: "24px 56px" }}
                  />
                  <motion.rect x="90" y="52" width="12" height="8" rx="4"
                    fill="currentColor" fillOpacity="0.06"
                    stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.12"
                    animate={{ rotate: step === 1 ? [0, 20, 0] : 0 }}
                    transition={{ duration: 0.6, repeat: step === 1 ? 2 : 0 }}
                    style={{ transformOrigin: "96px 56px" }}
                  />
                </motion.g>
              )}
            </svg>
          </motion.div>

          {/* Name + title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase mt-4 text-muted-foreground"
          >
            Muhammad Abdul Halim
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-none"
          >
            Portfolio
          </motion.h1>

          {/* Progress dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-2 mt-5"
          >
            {[1, 2, 3].map((s) => (
              <motion.div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step >= s ? "bg-primary" : "bg-muted/50"
                }`}
                animate={{ width: step >= s ? 24 : 8 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>

          {step === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-6"
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-muted-foreground/30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5" />
                    <path d="M7 6l5 5 5-5" />
                  </svg>
                </motion.div>
                <p className="text-[11px] text-muted-foreground/30 tracking-[0.15em] uppercase font-medium">
                  Tap the robot to start
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
