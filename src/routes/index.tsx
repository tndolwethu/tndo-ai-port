import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Github, Mail, MapPin, Linkedin, ExternalLink } from "lucide-react";

import { NavBar } from "@/components/portfolio/NavBar";
import { Section } from "@/components/portfolio/Section";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { CertificateGrid } from "@/components/portfolio/CertificateGrid";
import { plannedProjects } from "@/lib/projects";
import cvAsset from "@/assets/thandolwethu-tshabalala-cv.pdf.asset.json";

const LINKEDIN_URL = "https://www.linkedin.com/in/thandolwethu-tshabalala-a72771433";

const TITLE = "Thandolwethu Tshabalala — Aspiring AI Engineer";
const DESCRIPTION =
  "Portfolio of Thandolwethu Tshabalala, an aspiring AI Engineer and Financial Management student in Soweto, South Africa, building skills in Python and AI tools.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Home,
});

const technicalSkills = [
  { name: "AI Tools", level: "In use" },
  { name: "Python", level: "Beginner" },
  { name: "Microsoft Word", level: "Confident" },
  { name: "Microsoft Excel", level: "Confident" },
];

const projects = plannedProjects;


function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <NavBar />

      <main>
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full opacity-25 blur-[120px]"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          />
          <div className="relative mx-auto w-full max-w-6xl">
            <p className="animate-rise font-display text-xs tracking-[0.32em] text-primary">
              PORTFOLIO · 2026
            </p>

            <h1
              id="hero-heading"
              className="animate-rise mt-6 text-[clamp(2.5rem,11vw,7.5rem)] font-semibold leading-[0.92]"
            >
              THANDOLWETHU
              <br />
              TSHABALALA
            </h1>

            <p className="animate-rise mt-8 text-[clamp(1.25rem,4.5vw,2.75rem)] font-display font-medium leading-tight text-gradient">
              ASPIRING
              <br />
              AI ENGINEER
            </p>

            <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am developing my skills in Python and AI tools and building toward a career in AI
              engineering.
            </p>


            <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="glow-accent inline-flex items-center justify-center rounded-full px-7 py-3.5 font-display text-xs tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 font-display text-xs tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
              >
                CONTACT ME
              </a>
            </div>

            <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden />
              Soweto, South Africa
            </p>
          </div>
        </section>

        {/* About */}
        <Section id="about" index="01" title="About">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I am Thandolwethu Tshabalala, an aspiring AI Engineer based in Soweto, South
                Africa. I completed Grade 12 / Matric and I am studying Financial Management at CJC
                Johannesburg TVET College.
              </p>
              <p>
                Alongside my studies I am building the foundations for AI engineering: beginner
                Python, practical work with AI tools, and an interest in machine learning as a
                technical area I want to learn properly.
              </p>
              <p>
                I am at the start of this journey and I am learning steadily. My goal is to grow
                into an AI Engineer through internships, learnerships and entry-level
                opportunities where I can keep building real experience.
              </p>

            </div>
            <dl className="surface-card space-y-5 rounded-2xl p-6">
              <div>
                <dt className="font-display text-[0.65rem] tracking-[0.22em] text-primary">
                  LOCATION
                </dt>
                <dd className="mt-1 text-sm">Soweto, South Africa</dd>
              </div>
              <div>
                <dt className="font-display text-[0.65rem] tracking-[0.22em] text-primary">
                  DIRECTION
                </dt>
                <dd className="mt-1 text-sm">Aspiring AI Engineer</dd>
              </div>
              <div>
                <dt className="font-display text-[0.65rem] tracking-[0.22em] text-primary">
                  STUDYING
                </dt>
                <dd className="mt-1 text-sm">Financial Management (N4 · N5 · N6)</dd>
              </div>
            </dl>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" index="02" title="Skills">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-[0.65rem] tracking-[0.22em] text-primary">
                TECHNICAL SKILLS
              </h3>
              <ul className="mt-6 divide-y divide-border/70">
                {technicalSkills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between py-4">
                    <span className="text-base sm:text-lg">{skill.name}</span>
                    <span className="text-xs tracking-[0.14em] text-muted-foreground">
                      {skill.level.toUpperCase()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-[0.65rem] tracking-[0.22em] text-primary">
                SOFT SKILLS
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Problem-solving",
                  "Critical thinking",
                  "Communication",
                  "Teamwork",
                  "Time management",
                  "Adaptability",
                  "Continuous learning",
                  "Attention to detail",
                ].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" index="03" title="Projects">
          <p className="mb-10 max-w-xl text-sm text-muted-foreground sm:text-base">
            These are projects I am planning to build as I develop my Python and machine learning
            skills.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" index="04" title="Education">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold sm:text-2xl">CJC Johannesburg TVET College</h3>
              <p className="mt-2 text-base text-muted-foreground">Financial Management</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["N4", "N5", "N6"].map((level) => (
                  <span
                    key={level}
                    className="rounded-full border border-border px-4 py-1.5 font-display text-xs tracking-[0.18em] text-foreground"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold sm:text-2xl">Matric / Grade 12</h3>
              <p className="mt-2 text-base text-muted-foreground">High School</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border px-4 py-1.5 font-display text-xs tracking-[0.18em] text-foreground">
                  COMPLETED
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certifications" index="05" title="Certifications">
          <p className="mb-10 max-w-xl text-sm text-muted-foreground sm:text-base">
            Completed certifications from the Google AI Essentials programme, earned through
            Coursera as part of the CAPACITI One-Week AI Programme.
          </p>
          <CertificateGrid />
        </Section>

        {/* CV */}
        <Section id="cv" index="06" title="CV">
          <div className="surface-card flex flex-col gap-6 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <FileText className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">Curriculum Vitae</h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
                  My full CV, covering my education, skills, certifications and planned projects.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={cvAsset.url}
                target="_blank"
                rel="noreferrer"
                className="glow-accent inline-flex items-center justify-center rounded-full px-7 py-3.5 font-display text-xs tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                VIEW CV
              </a>
              <a
                href={cvAsset.url}
                download="Thandolwethu-Tshabalala-CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-display text-xs tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
              >
                DOWNLOAD CV
                <Download className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" index="07" title="Contact">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="mailto:tndo.tshabs@gmail.com"
              className="surface-card group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <Mail className="size-5 text-primary" aria-hidden />
              <h3 className="mt-5 font-display text-[0.65rem] tracking-[0.22em] text-muted-foreground">
                EMAIL
              </h3>
              <p className="mt-2 break-words text-base">tndo.tshabs@gmail.com</p>
            </a>

            <a
              href="https://github.com/tndolwethu"
              target="_blank"
              rel="noreferrer"
              className="surface-card group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <Github className="size-5 text-primary" aria-hidden />
              <h3 className="mt-5 font-display text-[0.65rem] tracking-[0.22em] text-muted-foreground">
                GITHUB
              </h3>
              <p className="mt-2 text-base">tndolwethu</p>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="surface-card group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <Linkedin className="size-5 text-primary" aria-hidden />
              <h3 className="mt-5 font-display text-[0.65rem] tracking-[0.22em] text-muted-foreground">
                LINKEDIN
              </h3>
              <p className="mt-2 text-base">Thandolwethu Tshabalala</p>
            </a>

          </div>
        </Section>
      </main>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Thandolwethu Tshabalala</p>
          <p>Soweto, South Africa</p>
        </div>
      </footer>
    </div>
  );
}
