# Portfolio for Habibullah Abdulganiyu Ayomide

Single-page portfolio at `/` with anchor-scrolling nav. Modern minimalist, deep-blue + indigo accents, glassmorphism touches, subtle scroll fade-ins.

## Design system (src/styles.css)
- Background `#0F172A` (slate-950), surface `#111827`, foreground near-white
- Primary indigo `oklch` accent (~#6366F1), secondary violet (~#8B5CF6)
- Gradient token `--gradient-primary` for headline/CTA accents, `--shadow-glow` for hero card
- Fonts via `<link>` in `__root.tsx`: **Space Grotesk** (headings) + **Inter** (body)
- Tokens registered under `@theme inline`; no hard-coded colors in components

## Sections (all in src/routes/index.tsx, composed from small components in src/components/portfolio/)
1. **Nav** – sticky glass bar, anchor links, Resume CTA
2. **Hero** – name, headline, intro, two CTAs (View Projects, Connect on LinkedIn), placeholder avatar (gradient ring + initials "HA"), animated keyword chips (AI Fluency, Agentic AI, Workflow Automation, LLMs, Prompt Engineering, n8n), geometric SVG background
3. **About** – bio paragraphs, language badges (Hausa, Yoruba, Arabic, English)
4. **Education** – vertical timeline (ATBU, 3MTT Fellowship)
5. **Experience** – timeline cards (FlyRank AI, Luel AI, Independent Developer)
6. **Skills** – three grouped cards (AI & Automation, LLMs, Technical Competencies) with animated tag pills
7. **Featured Project** – AI Technical Content Analysis System; features list, status badge, GitHub link placeholder, architecture diagram placeholder block
8. **Building Next** – roadmap grid: Gaskiya AI, TruthLens, Quran Streak, FoodLink, Future Tools (each tagged "In Progress" / "Planned")
9. **GitHub Activity** – live fetch from `https://api.github.com/users/Habibullah2007-dev` + `/repos?sort=updated` in a TanStack loader (cached via QueryClient). Shows avatar, public repo count, followers, top 6 repos with stars/language; graceful fallback on rate-limit
10. **Resume** – preview card with Download + View buttons pointing to `/resume.pdf` placeholder (user replaces later)
11. **Contact** – info list + form that builds a `mailto:habibabdulganiyu001@gmail.com?subject=...&body=...` link on submit (client-side, zod-validated)
12. **Footer** – name, tagline, social links, copyright 2026

## SEO / head
- `index.tsx` head: title "Habibullah Abdulganiyu Ayomide — AI Automation Engineer", description with target keywords, og:title/description/type=website, twitter:card=summary_large_image, JSON-LD `Person` schema (name, jobTitle, alumniOf, sameAs links)
- Root keeps sitewide defaults only
- Semantic `<section id="...">`, single H1, alt text, lazy-loaded images

## Data
- Static TS arrays in `src/lib/portfolio-data.ts` for experience/education/skills/projects
- GitHub fetch via `queryOptions` + `ensureQueryData` in route loader

## Out of scope / placeholders
- Profile photo: stylized initials avatar (replaceable later)
- `public/resume.pdf`: empty placeholder file; buttons functional but user uploads real PDF
- No backend (mailto only), no Lovable Cloud

## Tech notes
- Animations: Tailwind utility transitions + IntersectionObserver hook for fade-up on scroll (no extra deps)
- Fully responsive with `grid-cols-[minmax(0,1fr)_auto]` + `min-w-0` patterns for header rows
- Mobile nav: collapsible sheet
