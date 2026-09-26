import { contact } from "../data/profile.js";

export async function submitContactForm({ name, email, subject, message }) {
  const res = await fetch(contact.formEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
      _subject: `Portfolio message from ${name}: ${subject}`,
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const reason = data?.errors?.[0]?.message;
    throw new Error(reason || "Unable to send your message right now. Please try again.");
  }

  return data;
}
