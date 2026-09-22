import { Reveal } from "./Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            {eyebrow}
          </p>
        )}
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}