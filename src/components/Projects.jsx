import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    tag: "FULL-STACK AI SYSTEM",
    status: "Live",
    title: "Employee Attendance Dashboard",
    description:
      "Face-recognition onboarding and attendance system with a web dashboard for tracking employees in real time.",
    role: "Backend, computer-vision pipeline, and dashboard development",
    impact:
      "Automates attendance capture with on-device face detection, removing manual check-ins.",
    tech: ["Python", "Flask", "BlazeFace", "React", "MySQL", "Tailwind"],
    image: "/assets/projects/attendance.png",
    live: "#",
    source: "#",
  },
  {
    tag: "EDGE AI & SAFETY",
    status: "POC",
    title: "Worksite Safety VLM Pipeline",
    description:
      "Vision-language model pipeline that detects work-at-height, barricade, and fire-safety violations from camera feeds.",
    role: "Prompt design, pipeline engineering, and edge deployment",
    impact:
      "Runs fully on a Jetson AGX with a local model, so no video leaves the site.",
    tech: ["Python", "Ollama", "qwen2.5vl", "Jetson AGX", "OpenCV"],
    image: "/assets/projects/safety.png",
    live: "",
    source: "#",
  },
  {
    tag: "FULL-STACK WEB APP",
    status: "Live",
    title: "Your Next Project",
    description: "Short one-line description of what the project does.",
    role: "Your role in the project",
    impact: "The measurable result or why it matters.",
    tech: ["React", "Node", "PostgreSQL", "Redis", "Docker"],
    image: "/assets/projects/project3.png",
    live: "#",
    source: "#",
  },
];

function ProjectCard({ project, index, total }) {
  const cardRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 -> 1 as the next card covers this one

  useEffect(() => {
    const onScroll = () => {
      const el = cardRef.current;
      if (!el) return;
      const next = el.parentElement.nextElementSibling;
      if (!next) return setProgress(0);
      const nextTop = next.getBoundingClientRect().top;
      const stickyTop = 112; // keep in sync with `top` below
      const range = window.innerHeight - stickyTop;
      const p = 1 - Math.min(Math.max((nextTop - stickyTop) / range, 0), 1);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scale = 1 - progress * 0.05;
  const brightness = 1 - progress * 0.35;

  return (
    <div className="h-[85vh] md:h-[90vh]">
      <article
        ref={cardRef}
        style={{
          top: 112 + index * 12, // small offset so the stack edges peek out
          transform: `scale(${scale})`,
          filter: `brightness(${brightness})`,
          zIndex: index + 1,
        }}
        className="sticky origin-top overflow-hidden rounded-3xl border border-teal-500/20
                   bg-[#07161d] shadow-[0_0_60px_-20px_rgba(45,212,191,0.35)]
                   transition-[filter] duration-150 will-change-transform"
      >
        <div className="grid md:grid-cols-2">
          {/* Left: details */}
          <div className="flex flex-col gap-5 p-6 md:p-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-teal-400">
                {project.tag}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-teal-500/30 px-2.5 py-0.5 font-mono text-xs text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {project.status}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white md:text-5xl">
              {project.title}
            </h3>

            <button className="flex w-fit items-center gap-1.5 rounded-full border border-teal-500/30 px-3 py-1 font-mono text-[11px] tracking-wider text-teal-300 hover:bg-teal-500/10">
              <Sparkles size={12} /> ASK ABOUT THIS
            </button>

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

export default function Work() {
  return (
    <section id="work" className="relative px-4 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm tracking-[0.25em] text-teal-300">
            BUILT AND SHIPPED
          </span>
          <span className="h-px flex-1 bg-teal-500/20" />
        </div>

        {/* IMPORTANT: no overflow-hidden on this wrapper or any parent, or sticky breaks */}
        <div>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}