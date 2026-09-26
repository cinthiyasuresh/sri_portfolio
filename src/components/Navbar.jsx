import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "../data/profile.js";
import { useTheme } from "../hooks/useTheme.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import ResumeButton from "./common/ResumeButton.jsx";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeIfOpen() {
    if (open) setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border shadow-card" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-portfolio flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#home"
          onClick={closeIfOpen}
          className="flex shrink-0 items-center gap-2.5 font-display text-base font-bold tracking-tight"
          aria-label="Back to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-white shadow-card">
            CS
          </span>
          <span className="hidden sm:inline">
            Cinthiya Sri <span className="text-gradient">S</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0 xl:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`relative whitespace-nowrap rounded-full px-2 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-indigo-500/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground/80 shadow-card transition hover:text-indigo-600 dark:hover:text-indigo-300"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <div className="hidden md:block">
            <ResumeButton />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground/80 shadow-card xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-surface/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="container-portfolio flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={closeIfOpen}
                    aria-current={active === link.id ? "true" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active === link.id
                        ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300"
                        : "text-foreground/80 hover:bg-surface-2"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-1">
                <ResumeButton className="w-full" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}