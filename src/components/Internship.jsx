import { useState } from "react";
import { CalendarDays, Check, Compass, MapPin, TrendingUp } from "lucide-react";
import { internships } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";
import Badge from "./common/Badge.jsx";
import { getIcon } from "./common/icons.jsx";

function CompanyMark({ internship }) {
  const [failed, setFailed] = useState(false);
  const Icon = getIcon(internship.fallbackIcon);
  const showImage = internship.logo && !failed;

  if (!showImage) {
    return (
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-card">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white shadow-card">
      <img
        src={`${import.meta.env.BASE_URL}${internship.logo}`}
        alt={`${internship.company} logo`}
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

export default function Internship() {
  return (
    <Section id="internship" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Internship"
          title="Professional experience"
          description="Industry exposure in search optimization, content strategy and digital marketing."
        />

        <div className="mx-auto mt-14 max-w-5xl space-y-8">
          {internships.map((internship, i) => (
            <Reveal key={internship.company} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-card-lg transition duration-300 hover:border-indigo-300/70 dark:hover:border-indigo-400/30">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="p-7 sm:p-10">
                    <div className="flex flex-wrap items-start gap-5">
                      <CompanyMark internship={internship} />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                          Internship
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                          {internship.role}
                        </h3>
                        <p className="mt-2 font-medium text-indigo-600 dark:text-indigo-300">
                          {internship.company}
                        </p>
                        {(internship.period || internship.location) && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {internship.period && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
                                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                                {internship.period}
                              </span>
                            )}
                            {internship.location && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
                                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                                {internship.location}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="mt-6 leading-relaxed text-muted">{internship.summary}</p>

                    <h4 className="mt-8 font-display text-base font-bold">Key Responsibilities</h4>
                    <ul className="mt-4 grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
                      {internship.responsibilities.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h4 className="mt-8 font-display text-base font-bold">Technologies / Tools</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {internship.tools.map((tool) => (
                        <Badge key={tool}>{tool}</Badge>
                      ))}
                    </div>

                    {internship.takeaways && (
                      <div className="mt-8 flex gap-3 rounded-2xl border border-border bg-surface-2/60 p-5">
                        <TrendingUp className="h-5 w-5 shrink-0 text-indigo-500" aria-hidden="true" />
                        <p className="text-sm leading-relaxed text-muted">{internship.takeaways}</p>
                      </div>
                    )}

                    {internship.approach && (
                      <div className="mt-4 flex gap-3 rounded-2xl border border-border bg-surface-2/60 p-5">
                        <Compass className="h-5 w-5 shrink-0 text-indigo-500" aria-hidden="true" />
                        <div>
                          <h5 className="text-xs font-semibold uppercase tracking-wide text-muted">
                            Development Approach
                          </h5>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {internship.approach}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative overflow-hidden border-t border-border bg-surface-2/50 lg:border-l lg:border-t-0">
                    <img
                      src={`${import.meta.env.BASE_URL}${internship.image}`}
                      alt={`${internship.role} at ${internship.company}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
