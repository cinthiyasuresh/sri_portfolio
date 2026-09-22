export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}