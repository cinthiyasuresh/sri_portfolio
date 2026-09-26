import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/profile.js";
import ResumeButton from "./common/ResumeButton.jsx";
import Badge from "./common/Badge.jsx";

const nodes = [
  { x: "8%", y: "18%", delay: 0 },
  { x: "90%", y: "22%", delay: 0.6 },
  { x: "78%", y: "78%", delay: 1.2 },
  { x: "16%", y: "70%", delay: 0.9 },
  { x: "48%", y: "8%", delay: 1.6 },
];

function ProfileVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        className="absolute inset-0 h-full w-full text-indigo-500/25 dark:text-indigo-400/20"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="node-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          d="M40 20 C 120 80, 80 200, 40 340"
          stroke="url(#node-line)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 6"
          opacity="0.5"
        />
        <path
          d="M360 24 C 290 90, 330 220, 360 330"
          stroke="url(#node-line)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 6"
          opacity="0.5"
        />
        <path
          d="M40 340 C 140 260, 260 360, 360 330"
          stroke="url(#node-line)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {nodes.map((n) => (
        <span
          key={n.x + n.y}
          className="absolute h-2.5 w-2.5 rounded-full bg-gradient-brand shadow-[0_0_12px_rgba(99,102,241,0.7)]"
          style={{ left: n.x, top: n.y }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10"
      >
        <div
          className={
            reduce
              ? "rounded-3xl border border-border bg-surface shadow-card-lg"
              : "animate-float rounded-3xl border border-border bg-surface shadow-card-lg"
          }
        >
          <div className="flex flex-col items-center px-8 pt-10 pb-8 text-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-brand opacity-25 blur-lg" />
              <div className="relative h-24 w-24 rounded-full bg-gradient-brand p-0.5 shadow-card-lg">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt={profile.name}
                  width={96}
                  height={96}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{profile.name}</h3>
            <p className="mt-1 text-sm text-muted">{profile.headline}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Badge>Python</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>OpenCV</Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-border rounded-b-3xl border-t border-border bg-surface-2/60">
            <div className="px-4 py-4 text-center">
              <p className="font-display text-lg font-bold text-foreground">M.Sc.</p>
              <p className="text-xs text-muted">Artificial Intelligence</p>
            </div>
            <div className="px-4 py-4 text-center">
              <p className="font-display text-lg font-bold text-foreground">B.Sc.</p>
              <p className="text-xs text-muted">Computer Science</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-36 lg:pb-32">
      <div className="surface-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-portfolio relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-400/25 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            Open to internships &amp; opportunities
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 text-lg font-semibold text-foreground sm:text-xl"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-2 text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition duration-200 hover:opacity-85 active:scale-[0.98] dark:bg-white dark:text-black"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <ResumeButton action="view" />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-card transition duration-200 hover:border-indigo-300 hover:text-indigo-600 active:scale-[0.98] dark:hover:border-indigo-400/40 dark:hover:text-indigo-300"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <ProfileVisual />
        </motion.div>
      </div>
    </section>
  );
}