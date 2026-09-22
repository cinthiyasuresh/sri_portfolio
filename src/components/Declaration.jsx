import { ShieldCheck } from "lucide-react";
import { declaration } from "../data/profile.js";
import Section from "./common/Section.jsx";
import { Reveal } from "./common/Reveal.jsx";

export default function Declaration() {
  return (
    <Section id="declaration" className="py-12 sm:py-16">
      <div className="container-portfolio">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface-2/50 px-6 py-5">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-muted">{declaration}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}