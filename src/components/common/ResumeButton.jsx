import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { RESUME_URL, resumeExists, downloadResume } from "../../lib/resume.js";

const variantStyles = {
  solid: "bg-gradient-brand text-white shadow-card-lg hover:shadow-indigo-600/30 hover:brightness-110",
  ghost:
    "border border-indigo-200 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-400/25 dark:text-indigo-300 dark:hover:bg-indigo-500/10",
};

export default function ResumeButton({ variant = "solid", className = "" }) {
  const [hint, setHint] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    const ok = await resumeExists();
    if (ok) {
      downloadResume();
    } else {
      setHint(true);
      window.setTimeout(() => setHint(false), 2600);
    }
  }

  return (
    <div className={`relative inline-flex ${className}`}>
      <a
        href={RESUME_URL}
        onClick={handleClick}
        aria-label="Download Resume"
        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 active:scale-[0.98] ${variantStyles[variant]}`}
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download Resume
      </a>
      {hint && (
        <span
          role="status"
          className="absolute -bottom-9 left-1/2 z-50 w-max -translate-x-1/2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted shadow-card"
        >
          <span className="inline-flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Resume will be available soon
          </span>
        </span>
      )}
    </div>
  );
}