import { Target } from "lucide-react";
import { aboutHighlights, profile } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";
import { getIcon } from "./common/icons.jsx";

export default function About() {
  return (
    <Section id="about" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="About Me"
          title="A quick introduction"
          description="A concise professional profile built around my career objective."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-card sm:p-8">
              <div
                className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-card">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Career Objective
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground">
                    &ldquo;{profile.careerObjective}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutHighlights.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-indigo-300/70 hover:shadow-card-lg dark:hover:border-indigo-400/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 transition duration-300 group-hover:bg-gradient-brand group-hover:text-white dark:text-indigo-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}