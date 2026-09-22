import { BookOpen, CalendarDays, FlaskConical, Microscope } from "lucide-react";
import { research } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";
import Badge from "./common/Badge.jsx";

const details = [
  {
    label: "Research Topic",
    value: research.title,
    icon: BookOpen,
  },
  {
    label: "Area of Interest",
    value: research.area,
    icon: FlaskConical,
  },
  {
    label: "Technology / Platform Focus",
    value: research.focus,
    icon: Microscope,
  },
  {
    label: "Research Date",
    value: research.date,
    icon: CalendarDays,
  },
];

export default function Research() {
  return (
    <Section id="research" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Research"
          title="Research & interests"
          description="My current research project and areas I am exploring."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-card-lg">
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-violet-500/[0.07]"
                aria-hidden="true"
              />
              <div className="relative p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-card">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                      Research Project
                    </p>
                    <h3 className="mt-0.5 font-display text-2xl font-bold tracking-tight">
                      {research.title}
                    </h3>
                  </div>
                </div>

                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  {details.map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-border bg-surface/80 p-5"
                    >
                      <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
                        <Icon className="h-4 w-4 text-indigo-500" aria-hidden="true" />
                        {label}
                      </dt>
                      <dd className="mt-2 text-sm font-semibold text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-border bg-surface p-7 shadow-card">
              <h3 className="font-display text-base font-bold">Research Interests</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {research.interest.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}