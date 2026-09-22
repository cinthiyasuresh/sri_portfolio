import { useState } from "react";
import { Link2 } from "lucide-react";

export default function PlaceholderButton({ children, label = "coming soon" }) {
  const [hint, setHint] = useState(false);

  function handleClick() {
    setHint(true);
    window.setTimeout(() => setHint(false), 2000);
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        aria-describedby="placeholder-hint"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground/70 shadow-card transition duration-200 hover:border-indigo-300/70 hover:text-indigo-600 active:scale-[0.98] dark:hover:border-indigo-400/40 dark:hover:text-indigo-300"
      >
        {children}
      </button>
      {hint && (
        <span
          role="status"
          className="absolute -bottom-9 left-1/2 z-50 w-max -translate-x-1/2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted shadow-card"
        >
          <span className="inline-flex items-center gap-1.5">
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
            {label}
          </span>
        </span>
      )}
    </span>
  );
}