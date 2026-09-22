import { GraduationCap, MapPin, CalendarDays, Percent } from "lucide-react";
import { education } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";

const metaItem = "flex items-center gap-1.5 text-sm text-muted";

export default function Education() {
  return (
    <Section id="education" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey"
          description="My academic background in Computer Science and Artificial Intelligence."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-blue-500/20 sm:left-6"
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {education.map((item, i) => (
              <li key={item.degree}>
                <Reveal delay={i * 0.08} className="relative">
                  <div className="group flex gap-5 sm:gap-6">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-surface shadow-card sm:h-12 sm:w-12 dark:border-indigo-400/25">
                      <GraduationCap
                        className="h-4 w-4 text-indigo-600 sm:h-5 sm:w-5 dark:text-indigo-300"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 rounded-2xl border border-border bg-surface p-6 shadow-card transition duration-300 group-hover:-translate-y-1 group-hover:border-indigo-300/70 group-hover:shadow-card-lg dark:group-hover:border-indigo-400/30">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                          <Percent className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.score}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                        {item.degree}
                      </h3>
                      <p className="mt-1 font-medium text-indigo-600 dark:text-indigo-300">
                        {item.institution}
                      </p>
                      <p className={`${metaItem} mt-3`}>
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {item.location}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}