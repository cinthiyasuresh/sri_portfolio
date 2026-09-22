import { achievements } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";
import { getIcon } from "./common/icons.jsx";

export default function Achievements() {
  return (
    <Section id="achievements" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Achievements"
          title="Awards & recognition"
          description="Inter-collegiate achievements from 2025."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {achievements.map((award, i) => {
            const Icon = getIcon(award.icon);
            return (
              <Reveal key={award.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-indigo-300/70 hover:shadow-card-lg dark:hover:border-indigo-400/30">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-500 transition duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                    {award.title}
                  </h3>
                  <p className="mt-2 font-medium text-indigo-600 dark:text-indigo-300">
                    {award.subtitle}
                  </p>
                  {award.subtitle2 && (
                    <p className="mt-1 text-sm font-medium text-muted">{award.subtitle2}</p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}