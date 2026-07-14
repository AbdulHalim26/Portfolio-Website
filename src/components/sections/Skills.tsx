"use client"

import { motion } from "framer-motion"
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiFastapi, SiPostgresql, SiMongodb,
  SiOpenjdk, SiVercel, SiRailway, SiResend,
  SiOpencode,
  SiGit, SiGithub, SiJira, SiCisco,
} from "react-icons/si"
import { FaLock } from "react-icons/fa"
import { DiVisualstudio } from "react-icons/di"
import { portfolioData } from "@/lib/data"
import { SectionHeading } from "@/components/ui/section-heading"

function AntigravityIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M81 79C85.667 82.5 92.667 80.167 86.25 73.75C67 55.083 71.083 3.75 47.167 3.75C23.25 3.75 27.333 55.083 8.083 73.75C1.083 80.75 8.667 82.5 13.333 79C31.417 66.75 30.25 45.167 47.167 45.167C64.083 45.167 62.917 66.75 81 79Z" fill="#3186FF" />
      <path d="M81 79C85.667 82.5 92.667 80.167 86.25 73.75C67 55.083 71.083 3.75 47.167 3.75C23.25 3.75 27.333 55.083 8.083 73.75C1.083 80.75 8.667 82.5 13.333 79C31.417 66.75 30.25 45.167 47.167 45.167C64.083 45.167 62.917 66.75 81 79Z" fill="url(#antigravity)" />
      <defs>
        <linearGradient id="antigravity" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset=".25" stopColor="#EA4335" />
          <stop offset=".5" stopColor="#FBBC04" />
          <stop offset=".75" stopColor="#34A853" />
          <stop offset="1" stopColor="#4285F4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function KiroIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg fill="currentColor" fillRule="evenodd" height="1em" viewBox="0 0 24 24" width="1em" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M4.594 6.677C6.67-2.226 18.746-2.211 21.16 6.632c.353 1.297 1.725 7.582-1.673 13.747-1.545 2.797-5.841 5.49-6.99 1.883C8.6 25.477 3.315 24.1 5.789 18.609l-.318.143c-3.57 1.305-3.863-1.208-3.173-2.513.45-.84.727-1.335.937-1.897.353-.975.458-1.568.593-2.498.27-1.837.277-3.607.765-5.167zm8.37.01a.92.92 0 00-.81.428c-.217.323-.33.825-.33 1.462 0 .705.15 1.89 1.14 1.89h.008c.757 0 1.214-.705 1.214-1.89 0-.622-.127-1.125-.367-1.455a1.014 1.014 0 00-.855-.435zm4.08 0a.92.92 0 00-.81.428c-.217.323-.33.825-.33 1.462 0 .705.15 1.89 1.14 1.89h.008c.757 0 1.215-.705 1.215-1.89 0-.622-.128-1.125-.368-1.455a1.014 1.014 0 00-.855-.435z" />
    </svg>
  )
}

function GlmIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg fill="currentColor" fillRule="evenodd" height="1em" viewBox="0 0 24 24" width="1em" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.991 23.503a.24.24 0 00-.244.248.24.24 0 00.244.249.24.24 0 00.245-.249.24.24 0 00-.22-.247l-.025-.001zM9.671 5.365a1.697 1.697 0 011.099 2.132l-.071.172-.016.04-.018.054c-.07.16-.104.32-.104.498-.035.71.47 1.279 1.186 1.314h.366c1.309.053 2.338 1.173 2.286 2.523-.052 1.332-1.152 2.38-2.478 2.327h-.174c-.715.018-1.274.64-1.239 1.368 0 .124.018.23.053.337.209.373.54.658.96.8.75.23 1.517-.125 1.9-.782l.018-.035c.402-.64 1.17-.96 1.92-.711.854.284 1.378 1.226 1.099 2.167a1.661 1.661 0 01-2.077 1.102 1.711 1.711 0 01-.907-.711l-.017-.035c-.2-.323-.463-.58-.851-.711l-.056-.018a1.646 1.646 0 00-1.954.746 1.66 1.66 0 01-1.065.764 1.677 1.677 0 01-1.989-1.279c-.209-.906.332-1.83 1.257-2.043a1.51 1.51 0 01.296-.035h.018c.68-.071 1.151-.622 1.116-1.333a1.307 1.307 0 00-.227-.693 2.515 2.515 0 01-.366-1.403 2.39 2.39 0 01.366-1.208c.14-.195.21-.444.227-.693.018-.71-.506-1.261-1.186-1.332l-.07-.018a1.43 1.43 0 01-.299-.07l-.05-.019a1.7 1.7 0 01-1.047-2.114 1.68 1.68 0 012.094-1.101zm-5.575 10.11c.26-.264.639-.367.994-.27.355.096.633.379.728.74.095.362-.007.748-.267 1.013-.402.41-1.053.41-1.455 0a1.062 1.062 0 010-1.482zm14.845-.294c.359-.09.738.024.992.297.254.274.344.665.237 1.025-.107.36-.396.634-.756.718-.551.128-1.1-.22-1.23-.781a1.05 1.05 0 01.757-1.26zm-.064-4.39c.314.32.49.753.49 1.206 0 .452-.176.886-.49 1.206-.315.32-.74.5-1.185.5-.444 0-.87-.18-1.184-.5a1.727 1.727 0 010-2.412 1.654 1.654 0 012.369 0zm-11.243.163c.364.484.447 1.128.218 1.691a1.665 1.665 0 01-2.188.923c-.855-.36-1.26-1.358-.907-2.228a1.68 1.68 0 011.33-1.038c.593-.08 1.183.169 1.547.652zm11.545-4.221c.368 0 .708.2.892.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.892.524c-.568 0-1.03-.47-1.03-1.048 0-.579.462-1.048 1.03-1.048zm-14.358 0c.368 0 .707.2.891.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.891.524c-.569 0-1.03-.47-1.03-1.048 0-.579.461-1.048 1.03-1.048zm10.031-1.475c.925 0 1.675.764 1.675 1.706s-.75 1.705-1.675 1.705-1.674-.763-1.674-1.705c0-.942.75-1.706 1.674-1.706zm-2.626-.684c.362-.082.653-.356.761-.718a1.062 1.062 0 00-.238-1.028 1.017 1.017 0 00-.996-.294c-.547.14-.881.7-.752 1.257.13.558.675.907 1.225.783zm0 16.876c.359-.087.644-.36.75-.72a1.062 1.062 0 00-.237-1.019 1.018 1.018 0 00-.985-.301 1.037 1.037 0 00-.762.717c-.108.361-.017.754.239 1.028.245.263.606.377.953.305l.043-.01zM17.19 3.5a.631.631 0 00.628-.64c0-.355-.279-.64-.628-.64a.631.631 0 00-.628.64c0 .355.28.64.628.64zm-10.38 0a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64a.631.631 0 00-.628.64c0 .355.279.64.628.64zm-5.182 7.852a.631.631 0 00-.628.64c0 .354.28.639.628.639a.63.63 0 00.627-.606l.001-.034a.62.62 0 00-.628-.64zm5.182 9.13a.631.631 0 00-.628.64c0 .355.279.64.628.64a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64zm10.38.018a.631.631 0 00-.628.64c0 .355.28.64.628.64a.631.631 0 00.628-.64c0-.355-.279-.64-.628-.64zm5.182-9.148a.631.631 0 00-.628.64c0 .354.279.639.628.639a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64zm-.384-4.992a.24.24 0 00.244-.249.24.24 0 00-.244-.249.24.24 0 00-.244.249c0 .142.122.249.244.249zM11.991.497a.24.24 0 00.245-.248A.24.24 0 0011.99 0a.24.24 0 00-.244.249c0 .133.108.236.223.247l.021.001zM2.011 6.36a.24.24 0 00.245-.249.24.24 0 00-.244-.249.24.24 0 00-.244.249.24.24 0 00.244.249zm0 11.263a.24.24 0 00-.243.248.24.24 0 00.244.249.24.24 0 00.244-.249.252.252 0 00-.244-.248zm19.995-.018a.24.24 0 00-.245.248.24.24 0 00.245.25.24.24 0 00.244-.25.252.252 0 00-.244-.248z" />
    </svg>
  )
}

const categoryIcons: Record<string, string> = {
  frontend: "⚡",
  backend: "🛠️",
  networking: "🌐",
  other: "🧰",
}

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  networking: "Networking",
  other: "Tools & Others",
}

const skillColors: Record<string, string> = {
  HTML: "#E44D26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  "Next.js": "#e5e5e5",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#5FA04E",
  FastAPI: "#009688",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Java: "#ED8B00",
  "VS Code": "#007ACC",
  Vercel: "#e5e5e5",
  Railway: "#e5e5e5",
  Resend: "#e5e5e5",
  Opencode: "#e5e5e5",
  bcrypt: "#FF6B35",
  Git: "#F05032",
  GitHub: "#e5e5e5",
  Jira: "#0052CC",
  Cisco: "#1BA0D7",
  Kiro: "#9046FF",
  GLM: "#005BAC",
}

const skillIcons: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Java: SiOpenjdk,
  "VS Code": DiVisualstudio,
  Vercel: SiVercel,
  Railway: SiRailway,
  Git: SiGit,
  GitHub: SiGithub,
  Jira: SiJira,
  Cisco: SiCisco,
  Resend: SiResend,
  bcrypt: FaLock,
  Opencode: SiOpencode,
  Antigravity: AntigravityIcon,
  Kiro: KiroIcon,
  GLM: GlmIcon,
}

function SkillIcon({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) {
  const Icon = skillIcons[name]
  if (!Icon) return null
  return <Icon className={className} style={style} />
}

export function Skills() {
  const categories = [...new Set(portfolioData.skills.map((s) => s.category))]

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools I use daily and what I&apos;m comfortable with"
        />

        <div className="mt-12 space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">{categoryIcons[category]}</span>
                <h3 className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                  {categoryLabels[category]}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {portfolioData.skills
                  .filter((s) => s.category === category)
                  .map((skill, i) => {
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.35, delay: categoryIndex * 0.1 + i * 0.04, ease: "backOut" }}
                        className="group rounded-xl border border-border/50 bg-card px-4 py-3 hover:border-primary/30 hover:bg-accent/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2.5">
                          <SkillIcon
                            name={skill.name}
                            className="h-4 w-4 shrink-0 transition-colors group-hover:brightness-125"
                            style={{ color: skillColors[skill.name] }}
                          />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      </motion.div>
                    )
                  })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
