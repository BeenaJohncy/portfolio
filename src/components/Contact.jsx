import { useState } from "react";
import { Mail, Linkedin, Github, Download, Send, ArrowUpRight, Briefcase, ChevronDown, CheckCircle2, AlertCircle } from "lucide-react";

const EMAIL = "beenajohncy2002@gmail.com";
const LINKS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://linkedin.com/in/your-handle", Icon: Linkedin },
  { label: "GitHub", value: "github.com/your-handle", href: "https://github.com/your-handle", Icon: Github },
];
const REASONS = ["Hiring", "Project / Freelance", "Collaboration", "Other"];

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-100 placeholder:text-slate-500 " +
  "focus:border-teal-400/60 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-colors";
const label = "mb-2 block font-mono text-xs uppercase tracking-widest text-slate-400";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot: bots fill this hidden field, humans never see it
    if (data.get("botcheck")) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Portfolio: ${data.get("reason")} enquiry from ${data.get("name")}`,
          from_name: "Portfolio Contact Form",
          name: data.get("name"),
          email: data.get("email"), // becomes the reply-to address
          reason: data.get("reason"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(`Couldn't send right now. You can email me directly at ${EMAIL}.`);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Get in <span className="text-teal-400">Touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Open to Full Stack and Backend Developer roles, especially work involving Python/Flask APIs,
            Node.js services, and database performance.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT: direct contact */}
          <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Let's Build Something</h3>
            <p className="mt-3 text-slate-400">
              If you're hiring or have a project in mind, tell me about the team and the problem you're
              solving. I'll reply with context that's actually useful.
            </p>

            <ul className="mt-8 space-y-3">
              {LINKS.map(({ label: l, value, href, Icon }) => (
                <li key={l}>
                  <a
                    href={href}
                    target={l === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-teal-400/40 hover:bg-teal-400/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-400/10 text-teal-300">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-slate-500">{l}</span>
                      <span className="block truncate font-medium text-slate-100">{value}</span>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" className="text-teal-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/Beena-Resume.pdf"
              download
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 font-semibold text-slate-900 transition-colors hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              <Download size={18} aria-hidden="true" /> Download Resume
            </a>

            <p className="mt-auto flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-slate-400 lg:mt-8">
              <span className="h-2 w-2 rounded-full bg-teal-400" aria-hidden="true" />
              Available for new opportunities
            </p>
          </div>

          {/* RIGHT: form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Send a Message</h3>
            <p className="mt-3 text-slate-400">
              Share the role, the team, or the problem. It lands directly in my inbox.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate={false}>
              {/* honeypot */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className={label}>Name</label>
                  <input id="c-name" name="name" type="text" required maxLength={80} autoComplete="name" placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="c-email" className={label}>Email</label>
                  <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
                </div>
              </div>

              <div>
                <label htmlFor="c-reason" className={label}>Reason</label>
                <div className="relative">
                  <Briefcase size={18} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal-300" />
                  <select id="c-reason" name="reason" defaultValue="Hiring" className={`${field} appearance-none pl-11 pr-10`}>
                    {REASONS.map((r) => (
                      <option key={r} value={r} className="bg-slate-900">{r}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div>
                <label htmlFor="c-message" className={label}>Message</label>
                <textarea id="c-message" name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Tell me about the opportunity or idea…" className={`${field} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-teal-400/40 bg-teal-400/10 px-6 py-3.5 font-semibold text-teal-200 transition-colors hover:bg-teal-400/20 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
              >
                <Send size={18} aria-hidden="true" />
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              <div aria-live="polite" className="min-h-[1.5rem] text-sm">
                {status === "success" && (
                  <p className="flex items-center gap-2 text-teal-300">
                    <CheckCircle2 size={16} aria-hidden="true" /> Message sent. I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-red-300">
                    <AlertCircle size={16} aria-hidden="true" /> {errorMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}