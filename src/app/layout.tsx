import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const baseUrl = "https://abdulhalim.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Muhammad Abdul Halim | Full-Stack Developer",
    template: "%s | Abdul Halim",
  },
  description:
    "Personal portfolio of Muhammad Abdul Halim — Informatics student at UNSIKA, passionate about web development, AI, and blockchain technology.",
  keywords: [
    "Muhammad Abdul Halim",
    "Abdul Halim",
    "Full-Stack Developer",
    "Next.js Developer",
    "UNSIKA",
    "Web Developer Indonesia",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Abdul Halim" }],
  creator: "Muhammad Abdul Halim",
  openGraph: {
    title: "Muhammad Abdul Halim | Full-Stack Developer",
    description:
      "Informatics student at UNSIKA, passionate about web development, AI, and blockchain technology.",
    url: baseUrl,
    siteName: "Abdul Halim Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdul Halim | Full-Stack Developer",
    description:
      "Informatics student at UNSIKA, passionate about web development, AI, and blockchain technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Abdul Halim",
              url: baseUrl,
              jobTitle: "Full-Stack Developer",
              email: "halimjunior52@gmail.com",
              alumniOf: "Universitas Singaperbangsa Karawang",
              knowsAbout: [
                "Web Development",
                "Next.js",
                "React",
                "Node.js",
                "TypeScript",
                "FastAPI",
                "PostgreSQL",
                "Blockchain",
                "AI",
              ],
              sameAs: [
                "https://www.linkedin.com/in/abdulhalim-dev/",
                "https://github.com/abdulhalim-dev",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
