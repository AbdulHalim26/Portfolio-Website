# Portfolio — Muhammad Abdul Halim

Personal portfolio website built with **Next.js**, showcasing projects, skills, and experience.

**Live**: [abdulhalim.vercel.app](https://abdulhalim.vercel.app)

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide, react-icons
- **UI**: shadcn/ui (Radix primitives)
- **Form**: react-hook-form + zod
- **Email**: Resend
- **Analytics**: Vercel Analytics
- **Database**: Upstash Redis (visitor counter)
- **Testing**: Vitest + Testing Library

## Features

- Interactive splash page with robot conversation
- Hero with typing effect and floating background
- Skills showcase with brand icons and animations
- Projects with tab filtering and detail dialogs
- Experience timeline with color-coded entries
- Contact form with email integration
- Dark-first theme with toggle
- Floating pill navbar
- SEO (OG, JSON-LD, sitemap, robots)
- Fully responsive

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Running Tests

```bash
npm test           # run tests
npm test -- --coverage  # with coverage report
```

## Deployment

Auto-deployed via Vercel on every push to `main`.
