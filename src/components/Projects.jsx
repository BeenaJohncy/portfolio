import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const featured = [
  {
    tag: "AI MONITORING · LIVE DASHBOARD",
    status: "",
    title: "SPML Attendance & Anomaly Monitoring",
    description:
      "Real-time dashboard that receives AI detections over APIs and WebSockets and shows attendance, a live headcount, and safety alerts.",
    role: "Backend APIs, real-time data flow, authentication, and dashboard",
    impact:
      "Flags unauthorized entry, visitors, and fire/smoke events as they happen and sends email alerts.",
    highlights: [
      "Receives AI detection data through REST APIs and pushes it to the dashboard over WebSockets",
      "Detects unauthorized persons, visitors, and fire/smoke, with a live people count",
      "Multi-factor authentication and email alerts for critical events",
    ],
    tech: ["FastAPI", "React", "Vite", "WebSocket", "MFA", "Email Alerts"],
    image: "",
    live: "",
    source: "",
  },
  {
    tag: "BACKEND · API LAYER",
    status: "",
    title: "AI Data Transfer API Platform",
    description:
      "Secure API layer that carries AI detection results and images from processing systems to databases and client applications.",
    role: "Designed and built the transfer APIs",
    impact:
      "Used across multiple AI projects, so detection output reaches databases and dashboards reliably.",
    highlights: [
      "Secure REST APIs between AI services and client applications",
      "Encrypted image transfer",
      "Redis caching and queue-based processing for transfer efficiency",
      "Dockerized for deployment",
    ],
    tech: ["Python", "Flask", "MySQL", "Redis", "Docker", "REST APIs"],
    image: "",
    live: "",
    source: "",
  },
  {
    tag: "FULL-STACK WEB APP",
    status: "",
    title: "Learning Management System",
    description:
      "LMS with separate Admin, College, Trainer, and Student modules.",
    role: "Full-stack development, including the secure REST APIs",
    impact:
      "Role-based access control makes sure each user only sees what their module allows.",
    highlights: [
      "Four role-based modules with separate permissions",
      "Secure REST APIs between the React frontend and Node.js backend",
    ],
    tech: ["React.js", "Node.js", "MySQL"],
    image: "",
    live: "",
    source: "",
  },
];

const compact = [
  {
    title: "KH Attendance Dashboard",
    text: "Processes the Excel attendance data saved by the AI system and displays it in a clean dashboard.",
    tech: ["Python", "Flask", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Robot Operations Control Dashboard",
    text: "Dashboard for starting and stopping robots, mapping, navigation, and emergency alerts.",
    tech: ["React.js", "Flask"],
  },
];

function ProjectCard({ project, index, total }) {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const STICKY_TOP = 112 + index * 14; // navbar height + small peek offset per card

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const next = el.nextElementSibling;
      if (!next) return setProgress(0);
      const nextTop = next.getBoundingClientRect().top;
      const range = window.innerHeight * 0.8;
      const p = 1 - Math.min(Math.max((nextTop - STICKY_TOP) / range, 0), 1);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [STICKY_TOP]);

  return (
    // sticky is now on the WRAPPER, and the wrapper's parent is the tall list
    <div
      ref={wrapRef}
      className="sticky mb-[18vh]"
      style={{ top: STICKY_TOP, zIndex: index + 1 }}
    >
      <article
        style={{
          transform: `scale(${1 - progress * 0.05})`,
          filter: `brightness(${1 - progress * 0.35})`,
        }}
        className="origin-top overflow-hidden rounded-3xl border border-teal-500/20
                   bg-[#07161d] shadow-[0_0_60px_-20px_rgba(45,212,191,0.35)]
                   will-change-transform"
      >
        <div className="grid md:grid-cols-2">
          {/* Left: details */}
          <div className="flex flex-col gap-5 p-4 pb-2 md:p-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-teal-400">
                {project.tag}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-teal-500/30 px-2.5 py-0.5 font-mono text-xs text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {project.status}
              </span>
            </div>

            <h3 className="text-1xl font-bold text-white md:text-5xl">
              {project.title}
            </h3>

            {/* <button className="flex w-fit items-center gap-1.5 rounded-full border border-teal-500/30 px-3 py-1 font-mono text-[11px] tracking-wider text-teal-300 hover:bg-teal-500/10">
              <Sparkles size={12} /> ASK ABOUT THIS
            </button> */}

            <p className="text-lg text-slate-400">{project.description}</p>

            <dl className="space-y-3 border-l border-teal-500/20 pl-5 text-sm">
              <div className="grid grid-cols-[70px_1fr] gap-3">
                <dt className="font-mono text-xs tracking-widest text-slate-500">ROLE</dt>
                <dd className="text-slate-200">{project.role}</dd>
              </div>
              <div className="grid grid-cols-[70px_1fr] gap-3">
                <dt className="font-mono text-xs tracking-widest text-slate-500">IMPACT</dt>
                <dd className="text-slate-400">{project.impact}</dd>
              </div>
            </dl>

            {project.highlights && (
              <div>
                <p className="mb-2 font-mono text-xs tracking-widest text-slate-500">
                  WHAT I BUILT
                </p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-teal-500/25 bg-teal-500/10 px-3 py-1 font-mono text-xs text-teal-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3 pt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-teal-300"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
                >
                  <Github size={16} /> Source
                </a>
              )}
            </div>
          </div>

          {/* Right: screenshot */}
          <div className="border-t border-teal-500/10 bg-[#050f14] p-4 md:border-l md:border-t-0 md:p-6">
            <div className="h-full min-h-[240px] overflow-hidden rounded-2xl bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function MoreProjects() {
  return (
    <div className="mt-8">
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-sm tracking-[0.25em] text-teal-300">
          MORE PROJECTS
        </span>
        <span className="h-px flex-1 bg-teal-500/20" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {compact.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-teal-500/20 bg-[#07161d] p-6"
          >
            <h4 className="text-xl font-semibold text-white">{p.title}</h4>
            <p className="mt-2 text-sm text-slate-400">{p.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-teal-500/25 bg-teal-500/10 px-2.5 py-1 font-mono text-xs text-teal-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative px-4 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-sm tracking-[0.25em] text-teal-300">
            BUILT AND SHIPPED
          </span>
          <span className="h-px flex-1 bg-teal-500/20" />
        </div>

        {/* IMPORTANT: no overflow-hidden on this wrapper or any parent, or sticky breaks */}
        <div className="pb-[10vh]">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
        <MoreProjects />
      </div>
    </section>
  );
}