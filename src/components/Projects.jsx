import { CalendarDays, Check, ExternalLink, Scale, Search, GitBranch } from "lucide-react";
import { projects } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";
import Badge from "./common/Badge.jsx";
import PlaceholderButton from "./common/PlaceholderButton.jsx";
import { GitHubIcon } from "./common/icons.jsx";

function VisionVisual() {
  return (
    <div className="relative flex aspect-square items-center justify-center">
      <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden="true">
        <rect
          x="20"
          y="20"
          width="200"
          height="200"
          rx="16"
          fill="none"
          stroke="currentColor"
          className="text-indigo-500/30"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle
          cx="120"
          cy="105"
          r="46"
          fill="none"
          stroke="url(#face-grad)"
          strokeWidth="3"
          className="text-indigo-500/70"
        />
        <defs>
          <linearGradient id="face-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <circle cx="103" cy="95" r="3.5" fill="#6366f1" />
        <circle cx="137" cy="95" r="3.5" fill="#6366f1" />
        <path d="M108 120 q12 10 24 0" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-surface-2 px-2.5 py-1 text-[10px] font-semibold text-muted">
        <Search className="h-3 w-3" aria-hidden="true" />
        Face Detect
      </div>
      <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-surface-2 px-2.5 py-1 text-[10px] font-semibold text-muted">
        OpenCV
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold text-white shadow-card">
        Frame Shape Match
      </div>

      <span className="absolute bottom-3 left-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-indigo-500/50" />
      <span className="absolute bottom-3 right-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-indigo-500/50" />
      <span className="absolute top-3 left-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-blue-500/50" />
      <span className="absolute top-3 right-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-blue-500/50" />
    </div>
  );
}

const comparisonTopics = [
  { name: "Development workflow", icon: GitBranch },
  { name: "Collaboration", icon: Scale },
  { name: "Cloud development", icon: ExternalLink },
  { name: "Version control", icon: GitBranch },
  { name: "Platform comparison", icon: Scale },
];

export default function Projects() {
  const [faceProject, researchProject] = projects;
  const faceViewPlaceholder = !faceProject.links.view;
  const faceGithubPlaceholder = !faceProject.links.github;
  const researchPlaceholder = !researchProject.links.research;

  return (
    <Section id="projects" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Hands-on projects and research completed during my studies."
        />

        <div className="mx-auto mt-14 max-w-6xl space-y-10">
          <Reveal>
            <article className="grid overflow-hidden rounded-3xl border border-border bg-surface shadow-card-lg lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>Computer Vision</Badge>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {faceProject.date}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {faceProject.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{faceProject.description}</p>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
                  {faceProject.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {faceProject.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {faceViewPlaceholder ? (
                    <PlaceholderButton label="Project link will be added soon">
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      View Project
                    </PlaceholderButton>
                  ) : (
                    <a href={faceProject.links.view} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card" target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      View Project
                    </a>
                  )}
                  {faceGithubPlaceholder ? (
                    <PlaceholderButton label="GitHub link will be added soon">
                      <GitHubIcon />
                      GitHub
                    </PlaceholderButton>
                  ) : (
                    <a href={faceProject.links.github} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground shadow-card" target="_blank" rel="noreferrer">
                      <GitHubIcon />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="relative overflow-hidden border-t border-border bg-surface-2/50 lg:border-l lg:border-t-0">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10"
                  aria-hidden="true"
                />
                <div className="relative p-7 sm:p-10">
                  <VisionVisual />
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card-lg">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden bg-surface-2/50">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 sm:p-10">
                    <div className="flex w-full items-stretch justify-center gap-3">
                      <div className="flex-1 rounded-2xl border border-border bg-surface p-4 text-center shadow-card">
                        <p className="font-display text-lg font-bold">GitHub</p>
                        <p className="mt-1 text-[11px] font-medium text-muted">Version control &amp; collaboration</p>
                      </div>
                      <div className="flex items-center">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-white shadow-card">
                          VS
                        </span>
                      </div>
                      <div className="flex-1 rounded-2xl border border-border bg-surface p-4 text-center shadow-card">
                        <p className="font-display text-lg font-bold">Replit</p>
                        <p className="mt-1 text-[11px] font-medium text-muted">Cloud development workspace</p>
                      </div>
                    </div>
                    <p className="max-w-sm text-center text-xs text-muted">
                      Comparative research on development workflows, collaboration and cloud tooling.
                    </p>
                  </div>
                </div>

                <div className="p-7 sm:p-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>Research Project</Badge>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {researchProject.date}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {researchProject.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{researchProject.description}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {comparisonTopics.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="flex items-center gap-2 rounded-xl border border-border bg-surface-2/60 px-3 py-2.5 text-xs font-medium text-foreground/85"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0 text-indigo-500" aria-hidden="true" />
                        {name}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {researchPlaceholder ? (
                      <PlaceholderButton label="Research link will be added soon">
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        View Research
                      </PlaceholderButton>
                    ) : (
                      <a href={researchProject.links.research} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        View Research
                      </a>
                    )}
                    <PlaceholderButton label="GitHub link will be added soon">
                      <GitHubIcon />
                      GitHub
                    </PlaceholderButton>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}