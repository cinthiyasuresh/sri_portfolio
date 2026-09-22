export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-indigo-200/70 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 transition-colors dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:text-indigo-300">
      {children}
    </span>
  );
}