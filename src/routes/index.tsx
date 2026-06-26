import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  Star,
  GitFork,
  Menu,
  X,
} from "lucide-react";
import { useReveal } from "@/lib/use-reveal";
import {
  PROFILE,
  KEYWORDS,
  LANGUAGES,
  EDUCATION,
  EXPERIENCE,
  SKILL_GROUPS,
  FEATURED,
  ROADMAP,
} from "@/lib/portfolio-data";

const PAGE_TITLE =
  "Habibullah Abdulganiyu Ayomide — AI Automation Engineer & Agentic AI Builder";
const PAGE_DESC =
  "Portfolio of Habibullah Abdulganiyu Ayomide — AI automation engineer, agentic AI builder, n8n workflow developer, and Computer & Communications Engineering student from Nigeria.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "AI Automation Engineer, AI Fluency, Agentic AI, Workflow Automation, n8n Automation, Prompt Engineering, AI Developer Nigeria, Multilingual NLP, Artificial Intelligence Portfolio",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: PROFILE.name,
          jobTitle: "AI Automation Engineer",
          email: `mailto:${PROFILE.email}`,
          url: "/",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Abubakar Tafawa Balewa University (ATBU)",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jos",
            addressCountry: "NG",
          },
          sameAs: [PROFILE.linkedin, PROFILE.github],
          knowsAbout: [
            "AI Automation",
            "Agentic AI",
            "Workflow Automation",
            "n8n",
            "Prompt Engineering",
            "Multilingual NLP",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <FeaturedProject />
        <BuildingNext />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------- Nav -------------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <a href="#top" className="min-w-0 truncate font-display text-lg font-semibold">
          <span className="text-gradient">HA.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href={PROFILE.resume}
            download
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          className="rounded-md border border-border p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="glass border-t border-border md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href={PROFILE.resume}
              download
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------- Hero -------------------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <GeometricBg />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for internships & AI collaborations
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            {PROFILE.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient">
              {PROFILE.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {PROFILE.headline}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {PROFILE.intro}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {KEYWORDS.map((k, i) => (
              <span
                key={k}
                className="glass rounded-full px-3 py-1 text-xs text-muted-foreground"
                style={{
                  animation: `floaty 6s ease-in-out ${i * 0.4}s infinite`,
                }}
              >
                {k}
              </span>
            ))}
          </div>
        </div>
        <Avatar />
      </div>
      <style>{`
        @keyframes floaty { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
      `}</style>
    </section>
  );
}

function Avatar() {
  return (
    <div className="relative mx-auto h-56 w-56 shrink-0 sm:h-72 sm:w-72">
      <div
        className="absolute -inset-3 rounded-full opacity-60 blur-2xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        className="relative grid h-full w-full place-items-center rounded-full"
        style={{
          background:
            "conic-gradient(from 180deg, oklch(0.65 0.18 240), oklch(0.70 0.16 220), oklch(0.65 0.18 240))",
        }}
      >
        <div className="grid h-[94%] w-[94%] place-items-center overflow-hidden rounded-full bg-surface ring-1 ring-border">
          <img
            src={PROFILE.avatar}
            alt={`${PROFILE.name} — portrait`}
            width={576}
            height={576}
            loading="eager"
            decoding="async"
            sizes="(min-width: 640px) 288px, 224px"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function GeometricBg() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M48 0 L0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

/* -------------------------- Section helpers -------------------------- */
function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-muted-foreground">{desc}</p>
      )}
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, className } = useReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* -------------------------- About -------------------------- */
function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="About" title="About Me" />
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Habibullah Abdulganiyu Ayomide is a Computer and Communications
                Engineering student at Abubakar Tafawa Balewa University (ATBU),
                Bauchi, Nigeria. He is passionate about leveraging AI to solve
                real-world problems in emerging markets, particularly across
                Africa.
              </p>
              <p>
                As the founder of <span className="text-foreground font-medium">AgentForge</span>,
                his work focuses on AI-powered automation systems, multilingual
                natural language processing, and intelligent agent workflows.
                Fluent in Hausa, Yoruba, Arabic, and English, he is interested
                in building AI tools that improve accessibility, fact-checking,
                education, and civic engagement.
              </p>
              <p>
                He is currently advancing his expertise through the 3MTT
                Fellowship and practical industry experience while exploring the
                future of agentic AI systems and workflow automation.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Languages
              </div>
              <ul className="mt-4 space-y-2">
                {LANGUAGES.map((l) => (
                  <li key={l} className="flex items-center justify-between text-sm">
                    <span>{l}</span>
                    <span className="h-1.5 w-24 overflow-hidden rounded-full bg-secondary">
                      <span
                        className="block h-full"
                        style={{
                          width: "92%",
                          background: "var(--gradient-primary)",
                        }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {PROFILE.location}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- Education -------------------------- */
function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Education & Learning Journey"
          />
          <Timeline
            items={EDUCATION.map((e) => ({
              title: e.title,
              org: e.org,
              period: e.period,
              body: e.detail,
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- Experience -------------------------- */
function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Experience" />
          <Timeline
            items={EXPERIENCE.map((e) => ({
              title: e.role,
              org: e.org,
              period: e.period,
              points: e.points,
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}

function Timeline({
  items,
}: {
  items: Array<{
    title: string;
    org: string;
    period: string;
    body?: string;
    points?: string[];
  }>;
}) {
  return (
    <ol className="relative ml-3 border-l border-border">
      {items.map((it, i) => (
        <li key={i} className="mb-10 pl-8 last:mb-0">
          <span
            className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-background"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
            <h3 className="min-w-0 font-display text-lg font-semibold">
              {it.title}
            </h3>
            <span className="shrink-0 text-xs text-muted-foreground">
              {it.period}
            </span>
          </div>
          <div className="text-sm text-primary">{it.org}</div>
          {it.body && (
            <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
          )}
          {it.points && (
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {it.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

/* -------------------------- Skills -------------------------- */
function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Technical Skills" />
          <div className="grid gap-5 md:grid-cols-3">
            {SKILL_GROUPS.map((g) => (
              <div
                key={g.title}
                className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- Featured -------------------------- */
function FeaturedProject() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Featured Project" title={FEATURED.title} />
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <div
              className="glass rounded-2xl p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                {FEATURED.status}
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {FEATURED.description}
              </p>
              <ul className="mt-5 grid gap-2 text-sm">
                {FEATURED.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm hover:bg-secondary"
                >
                  <Github className="h-4 w-4" /> Repository
                </a>
              </div>
            </div>
            <div
              className="relative grid min-h-[260px] place-items-center overflow-hidden rounded-2xl border border-border"
              style={{ background: "var(--gradient-hero)" }}
            >
              <ArchitectureDiagram />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArchitectureDiagram() {
  const nodes = ["Content", "Ingestion", "LLM Engine", "Insights"];
  return (
    <div className="grid w-full gap-3 px-6 py-8">
      <div className="text-center text-xs uppercase tracking-widest text-muted-foreground">
        System Flow
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {nodes.map((n, i) => (
          <div
            key={n}
            className="glass rounded-xl px-3 py-4 text-center text-xs font-medium"
            style={{ animation: `floaty 5s ease-in-out ${i * 0.3}s infinite` }}
          >
            {n}
          </div>
        ))}
      </div>
      <div className="mt-3 text-center text-xs text-muted-foreground">
        Multi-agent · Multi-format · Scalable
      </div>
    </div>
  );
}

/* -------------------------- Roadmap -------------------------- */
function BuildingNext() {
  return (
    <section id="roadmap" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Roadmap"
            title="What I'm Building Next"
            desc="In Progress / Future Projects"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ROADMAP.map((r) => (
              <div
                key={r.name}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <h3 className="min-w-0 font-display text-lg font-semibold">
                    {r.name}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      r.status === "In Progress"
                        ? "bg-primary/15 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- GitHub -------------------------- */
type GhUser = {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  html_url: string;
};
type GhRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

function GitHubSection() {
  const userQ = useQuery<GhUser>({
    queryKey: ["gh-user", PROFILE.githubUser],
    queryFn: async () => {
      const r = await fetch(`https://api.github.com/users/${PROFILE.githubUser}`);
      if (!r.ok) throw new Error("gh");
      return r.json();
    },
    staleTime: 5 * 60_000,
    retry: 0,
  });
  const reposQ = useQuery<GhRepo[]>({
    queryKey: ["gh-repos", PROFILE.githubUser],
    queryFn: async () => {
      const r = await fetch(
        `https://api.github.com/users/${PROFILE.githubUser}/repos?sort=updated&per_page=12`
      );
      if (!r.ok) throw new Error("gh");
      return r.json();
    },
    staleTime: 5 * 60_000,
    retry: 0,
  });

  const repos = (reposQ.data ?? [])
    .filter((r) => !r.fork)
    .slice(0, 6);

  return (
    <section id="github" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub"
            title="Open Source & Development Activity"
            desc="Live synced from GitHub."
          />
          <div className="grid gap-8 md:grid-cols-[280px_1fr]">
            <div
              className="glass rounded-2xl p-6 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {userQ.data ? (
                <>
                  <img
                    src={userQ.data.avatar_url}
                    alt={`${PROFILE.githubUser} avatar`}
                    loading="lazy"
                    className="mx-auto h-24 w-24 rounded-full border border-border"
                  />
                  <div className="mt-3 font-display font-semibold">
                    @{PROFILE.githubUser}
                  </div>
                  {userQ.data.bio && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {userQ.data.bio}
                    </p>
                  )}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                    <Stat label="Repos" value={userQ.data.public_repos} />
                    <Stat label="Followers" value={userQ.data.followers} />
                    <Stat label="Following" value={userQ.data.following} />
                  </div>
                </>
              ) : (
                <div className="text-sm text-muted-foreground">
                  {userQ.isLoading ? "Loading GitHub…" : "Visit GitHub profile"}
                </div>
              )}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm hover:bg-secondary"
              >
                <Github className="h-4 w-4" /> View Profile
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {repos.length === 0 && (
                <div className="glass col-span-full rounded-2xl p-6 text-sm text-muted-foreground">
                  {reposQ.isLoading
                    ? "Loading repositories…"
                    : "Repositories will appear here once available."}
                </div>
              )}
              {repos.map((r) => (
                <a
                  key={r.id}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass group block rounded-2xl p-5 transition-transform hover:-translate-y-1"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                    <div className="min-w-0 truncate font-display font-semibold">
                      {r.name}
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-xs text-muted-foreground">
                    {r.description ?? "No description provided."}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    {r.language && (
                      <span className="inline-flex items-center gap-1">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: "var(--gradient-primary)" }}
                        />
                        {r.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {r.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" /> {r.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/40 px-2 py-2">
      <div className="font-display text-base font-semibold">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* -------------------------- Resume -------------------------- */
function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Resume" title="Resume" />
          <div
            className="glass grid items-center gap-6 rounded-2xl p-8 md:grid-cols-[1fr_auto]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="min-w-0">
              <div className="font-display text-xl font-semibold">
                {PROFILE.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {PROFILE.headline}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                Download a PDF copy or view the resume online.
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PROFILE.resume}
                download
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Download className="h-4 w-4" /> Download
              </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2.5 text-sm hover:bg-secondary"
              >
                <ExternalLink className="h-4 w-4" /> View Online
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- Contact -------------------------- */
function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").slice(0, 100);
    const email = String(fd.get("email") ?? "").slice(0, 200);
    const subject = String(fd.get("subject") ?? "").slice(0, 150);
    const message = String(fd.get("message") ?? "").slice(0, 2000);
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Connect"
            desc="Open to internships, AI fellowships, automation projects, and collaborations."
          />
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <div className="space-y-3">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={PROFILE.email}
                href={`mailto:${PROFILE.email}`}
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value={PROFILE.location}
              />
              <ContactRow
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value="habibullah-abdulganiyu-ayomide"
                href={PROFILE.linkedin}
              />
              <ContactRow
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
                value={`@${PROFILE.githubUser}`}
                href={PROFILE.github}
              />
            </div>

            <form
              onSubmit={onSubmit}
              className="glass grid gap-4 rounded-2xl p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" required />
                <Field name="email" type="email" label="Email" required />
              </div>
              <Field name="subject" label="Subject" required />
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  maxLength={2000}
                  rows={5}
                  className="mt-1.5 w-full rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm outline-none transition focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="mt-1.5 w-full rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Comp: React.ElementType = href ? "a" : "div";
  return (
    <Comp
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className="glass grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary/50"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-sm">{value}</span>
      </span>
    </Comp>
  );
}

/* -------------------------- Footer -------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <div className="font-display text-lg font-semibold">
            {PROFILE.name}
          </div>
          <div className="text-xs text-muted-foreground">
            AI Automation Engineer · Computer & Communications Engineering Student
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs hover:bg-secondary"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl px-5 text-center text-xs text-muted-foreground">
        © 2026 {PROFILE.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
