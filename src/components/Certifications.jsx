import { Award } from "lucide-react";
import { certifications } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";

export default function Certifications() {
  return (
    <Section id="certifications" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Certifications & Courses"
          title="Learning & certifications"
          description="Courses and certifications completed alongside my studies."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-indigo-300/70 hover:shadow-card-lg dark:hover:border-indigo-400/30">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-card">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {cert.year && (
                    <span className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted">
                      {cert.year}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-base font-bold leading-snug">{cert.title}</h3>
                {cert.issuer && (
                  <p className="mt-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                    {cert.issuer}
                  </p>
                )}
                <div className="mt-auto pt-5">
                  <span
                    className="inline-flex cursor-not-allowed items-center gap-1.5 text-xs font-semibold text-muted/70"
                    title="Certificate details will be linked here when available."
                  >
                    Certificate Details
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}