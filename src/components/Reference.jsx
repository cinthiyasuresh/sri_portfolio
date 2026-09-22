import { Building2, Mail, Phone, UserRound } from "lucide-react";
import { reference } from "../data/profile.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";

export default function Reference() {
  return (
    <Section id="reference" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Reference"
          title="Professional reference"
          description="A reference from my department who can speak to my academic work."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-card-lg">
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative p-7 sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-card-lg">
                    <UserRound className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {reference.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                      {reference.credentials}
                    </p>
                    <p className="mt-3 text-sm font-medium text-foreground">{reference.role}</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {reference.extraRole}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{reference.department}</p>
                    <p className="mt-1 text-sm text-muted">
                      {reference.institution} · {reference.location}
                    </p>
                  </div>
                </div>

                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface-2/50 p-4">
                    <Mail className="h-5 w-5 shrink-0 text-indigo-500" aria-hidden="true" />
                    <div className="min-w-0">
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                        Email
                      </dt>
                      <dd className="truncate text-sm font-semibold">
                        <a
                          href={`mailto:${reference.email}`}
                          className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-300"
                        >
                          {reference.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface-2/50 p-4">
                    <Phone className="h-5 w-5 shrink-0 text-indigo-500" aria-hidden="true" />
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                        Phone
                      </dt>
                      <dd className="text-sm font-semibold tabular-nums">{reference.phone}</dd>
                    </div>
                  </div>
                </dl>

                <p className="mt-6 flex items-center gap-2 text-xs text-muted">
                  <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Authorized as an academic reference for applications.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}