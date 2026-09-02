import { createFileRoute } from "@tanstack/react-router";
import { Github, Mail, MapPin, Linkedin } from "lucide-react";

import { NavBar } from "@/components/portfolio/NavBar";
import { Section } from "@/components/portfolio/Section";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { plannedProjects } from "@/lib/projects";


const TITLE = "Thandolwethu Tshabalala — Aspiring AI / ML Engineer";
const DESCRIPTION =
  "Portfolio of Thandolwethu Tshabalala, a Financial Management student in Soweto, South Africa developing skills in Python, AI tools and machine learning.";

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
              ASPIRING AI /
              <br />
              MACHINE LEARNING
              <br />
              ENGINEER
            </p>

            <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Financial Management student developing practical skills in Python, artificial
              intelligence and machine learning.
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
                I am Thandolwethu Tshabalala, a Financial Management student at CJC Johannesburg
                TVET College, based in Soweto, South Africa.
              </p>
              <p>
                Alongside my studies, I am developing my technical skills in Python, AI tools and
                machine learning. I am at the beginning of this journey and I am learning steadily
                and deliberately.
              </p>
              <p>
                My goal is to pursue a career in AI, machine learning and AI engineering, and to
                grow through internships, learnerships and entry-level opportunities where I can
                keep building real experience.
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
                <dd className="mt-1 text-sm">Aspiring AI / Machine Learning Engineer</dd>
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
        </Section>

        {/* Certifications */}
        <Section id="certifications" index="05" title="Certifications">
          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am currently building my certifications and technical skills. Any certifications I
              complete will be listed here.
            </p>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" index="06" title="Contact">
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

            <div className="surface-card rounded-2xl p-6 opacity-70">
              <Linkedin className="size-5 text-muted-foreground" aria-hidden />
              <h3 className="mt-5 font-display text-[0.65rem] tracking-[0.22em] text-muted-foreground">
                LINKEDIN
              </h3>
              <p className="mt-2 text-base text-muted-foreground">To be added</p>
            </div>
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
