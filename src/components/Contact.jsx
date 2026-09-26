import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Send, XCircle } from "lucide-react";
import { contact } from "../data/profile.js";
import { submitContactForm } from "../lib/contactForm.js";
import Section from "./common/Section.jsx";
import SectionHeading from "./common/SectionHeading.jsx";
import { Reveal } from "./common/Reveal.jsx";
import { GitHubIcon, LinkedInIcon } from "./common/icons.jsx";

const contactCards = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: <Mail className="h-5 w-5" /> },
  {
    label: "GitHub",
    value: contact.githubHandle,
    href: contact.github,
    external: true,
    icon: <GitHubIcon className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    value: contact.linkedinHandle,
    href: contact.linkedin,
    external: true,
    icon: <LinkedInIcon className="h-5 w-5" />,
  },
];

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/25";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isSending = status === "sending";

  function onChange(name) {
    return (e) => {
      setForm((prev) => ({ ...prev, [name]: e.target.value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
      if (status !== "idle") {
        setStatus("idle");
        setErrorMessage("");
      }
    };
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email";
    if (!form.subject.trim()) next.subject = "Please enter a subject";
    if (!form.message.trim()) next.message = "Please enter a message";
    else if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSending) return;
    if (!validate()) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      await submitContactForm(form);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err.message);
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="py-24 sm:py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Contact"
          title="Let's get in touch"
          description="Open to internships, opportunities and collaborations."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {contactCards.map(({ label, value, href, external, icon }) => (
              <Reveal key={label} delay={0.05}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-card">
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="mt-1 block truncate text-sm font-semibold transition-colors hover:text-indigo-600 dark:hover:text-indigo-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border bg-surface p-6 shadow-card sm:p-8"
            >
              <h3 className="font-display text-lg font-bold">Send a message</h3>
              <p className="mt-1 text-sm text-muted">
                Fill in the form and I will get back to you.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder="Your name"
                    className={inputClass}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-rose-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="you@example.com"
                    className={inputClass}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-rose-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={onChange("subject")}
                    placeholder="Subject of the message"
                    className={inputClass}
                    aria-invalid={Boolean(errors.subject)}
                  />
                  {errors.subject && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-rose-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={onChange("message")}
                    placeholder="Write your message here..."
                    className={`${inputClass} resize-none`}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-rose-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-card-lg transition duration-200 hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:brightness-100"
                >
                  {isSending ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p
                    role="status"
                    className="flex items-center gap-2 rounded-xl border border-emerald-200/60 bg-emerald-500/10 px-4 py-3 text-xs font-medium text-emerald-700 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Thanks! Your message has been sent. I will get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p
                    role="alert"
                    className="flex items-center gap-2 rounded-xl border border-rose-200/60 bg-rose-500/10 px-4 py-3 text-xs font-medium text-rose-600 dark:text-rose-400"
                  >
                    <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {errorMessage}
                  </p>
                )}
                {Object.values(errors).some(Boolean) && status === "idle" && (
                  <p
                    role="alert"
                    className="flex items-center gap-2 rounded-xl border border-rose-200/60 bg-rose-500/10 px-4 py-3 text-xs font-medium text-rose-600 dark:text-rose-400"
                  >
                    <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Please fix the highlighted fields and try again.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}