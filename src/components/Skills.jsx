import { skillCategories } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";
import { getIcon } from "./common/icons.jsx";

function levelTone(level) {
  switch (level) {
    case "Basic":
      return "bg-sky-500";
    default:
      return "bg-gradient-brand";
  }
}

export default function Skills() {
  return (
    <Section id="skills" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Skills dashboard"
          description="Honest, clearly-leveled technical skills from my academic studies."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = getIcon(cat.icon);
            return (
              <Reveal key={cat.category} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-lg">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-base font-bold">{cat.category}</h3>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {cat.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between gap-2 text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
                            {skill.level}
                          </span>
                        </div>
                        <div
                          className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2"
                          role="img"
                          aria-label={`${skill.name}: ${skill.level} level`}
                        >
                          <div
                            className={`h-full rounded-full ${levelTone(skill.level)}`}
                            style={{ width: `${skill.value}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}