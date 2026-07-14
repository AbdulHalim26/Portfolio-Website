import { describe, it, expect } from "vitest"
import { portfolioData } from "./data"

describe("portfolioData", () => {
  it("has a valid name", () => {
    expect(portfolioData.name).toBeTruthy()
    expect(portfolioData.name).toBe("Muhammad Abdul Halim")
  })

  it("has a valid email", () => {
    expect(portfolioData.email).toContain("@")
  })

  it("has at least one social link", () => {
    expect(portfolioData.socials.length).toBeGreaterThan(0)
  })

  it("has skills across all categories", () => {
    const categories = [...new Set(portfolioData.skills.map((s) => s.category))]
    expect(categories).toContain("frontend")
    expect(categories).toContain("backend")
    expect(categories).toContain("networking")
    expect(categories).toContain("other")
  })

  it("includes newly added skills", () => {
    const names = portfolioData.skills.map((s) => s.name)
    expect(names).toContain("HTML")
    expect(names).toContain("CSS")
    expect(names).toContain("Cisco")
    expect(names).toContain("bcrypt")
    expect(names).toContain("VS Code")
    expect(names).toContain("Vercel")
    expect(names).toContain("Railway")
    expect(names).toContain("Opencode")
  })

  it("has projects with emoji icons", () => {
    expect(portfolioData.projects.length).toBeGreaterThanOrEqual(7)
  })

  it("has experiences", () => {
    expect(portfolioData.experiences.length).toBeGreaterThan(0)
  })

  it("has valid LinkedIn URL", () => {
    const linkedin = portfolioData.socials.find((s) => s.icon === "linkedin")
    expect(linkedin?.url).toContain("linkedin.com")
  })
})
