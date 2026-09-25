export const RESUME_URL = `${import.meta.env.BASE_URL}Cinthiya-Sri-S-Resume.pdf`;

export async function resumeExists(url = RESUME_URL) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (!res.ok) return false;
    const type = res.headers.get("content-type") || "";
    if (type.includes("html")) return false;
    return true;
  } catch {
    return false;
  }
}

export function downloadResume(url = RESUME_URL) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "Cinthiya-Sri-S-Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}