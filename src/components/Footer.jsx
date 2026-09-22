import { footer, profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-portfolio py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <a href="#home" className="font-display text-lg font-bold tracking-tight">
              {profile.name}
            </a>
            <p className="mt-1 text-sm text-muted">&ldquo;{profile.headline}&rdquo;</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium text-muted transition-colors hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted/80">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}