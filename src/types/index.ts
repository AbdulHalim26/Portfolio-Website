export interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  links: {
    github?: string
    live?: string
  }
  highlight?: boolean
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "design" | "devops" | "networking" | "other"
}

export interface Experience {
  title: string
  organization: string
  period: string
  description: string
  type: "education" | "work" | "achievement"
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface PortfolioData {
  name: string
  role: string
  tagline: string
  bio: string
  avatar?: string
  location: string
  email: string
  socials: SocialLink[]
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
}
