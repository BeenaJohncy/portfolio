import { Server, Plug, Database, LayoutTemplate, Wrench, Sparkles } from "lucide-react";

/**
 * Skills section
 * - Left: sticky intro card (stacks above the grid on mobile)
 * - Right: one card per category, tech chips inside
 * - Content comes from the resume only. Add or remove items in `SKILL_GROUPS`.
 * - `onAsk(topic)` is optional: wire it to Bleez to open the chat with a prefilled
 *   question. If you don't pass it, the "Ask about this" button is hidden.
 */

const SKILL_GROUPS = [
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    blurb:
      "What I use day to day to build services for AI platforms, an LMS and robot controller apps.",
    items: ["Python", "Flask", "Node.js", "Express.js", "WebSocket", "JavaScript"],
  },
  {
    id: "api",
    title: "APIs & Security",
    icon: Plug,
    blurb:
      "REST APIs that move data between AI processing systems and client applications.",
    items: [
      "REST API Development",
      "API Integration",
      "JWT Authentication",
      "Secure Data Transfer",
      "Postman",
    ],
  },
  {
    id: "data",
    title: "Databases & Caching",
    icon: Database,
    blurb:
      "Schema work, query tuning and caching to keep response times down.",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL",
      "Query Optimization",
      "Indexing",
      "Redis",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: LayoutTemplate,
    blurb: "Dashboards and web apps that sit on top of the APIs I build.",
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    icon: Wrench,
    blurb: "How I version, test and ship what I build.",
    items: ["Docker", "Git", "GitHub", "GitLab", "Postman"],
  },
];

function Chip({ children }) {
  return (
    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-teal-400/50 hover:text-teal-300 motion-reduce:transition-none">
      {children}
    </li>
  );
}

function SkillCard({ group, onAsk }) {
  const Icon = group.icon;
  const headingId = `skills-${group.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="rounded-[2rem] border border-white/10 bg-[#0a1424] p-6 sm:p-10"
    >
      <header className="flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-teal-300">
          <Icon size={24} aria-hidden="true" />
        </span>
        <div>
          <h3 id={headingId} className="text-2xl font-bold text-white sm:text-3xl">
            {group.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-slate-400">
            {group.items.length} technologies
          </p>
        </div>
      </header>

      {onAsk && (
        <button
          type="button"
          onClick={() => onAsk(group.title)}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/5 px-3 py-1.5 font-mono text-[11px] tracking-wide text-teal-300 transition-colors hover:bg-teal-400/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
        >
          <Sparkles size={12} aria-hidden="true" />
          Ask about {group.title}
        </button>
      )}

      <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
        {group.blurb}
      </p>

      <ul className="mt-6 flex flex-wrap gap-3">
        {group.items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </ul>
    </article>
  );
}

export default function Skills({ onAsk }) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-28 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        {/* Intro: sticky on desktop only, so mobile scrolls normally */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-[2rem] border border-white/10 bg-[#0a1424] p-8 sm:p-10">
            <span className="inline-block rounded-full border border-teal-400/30 bg-teal-400/5 px-3 py-1 font-mono text-xs text-teal-300">
              Skills
            </span>

            <h2
              id="skills-heading"
              className="mt-8 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl"
            >
              Technical
              <br />
              <span className="text-teal-400">Stack</span>
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
              Python and Node.js on the backend, MySQL and Redis underneath,
              React on top. Everything here is something I have used in
              production work or projects.
            </p>

            <p className="mt-10 text-2xl font-semibold text-teal-400">
              Backend first, full stack throughout.
            </p>
          </div>
        </div>

        {/* Category cards */}
        <div className="flex flex-col gap-8">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.id} group={group} onAsk={onAsk} />
          ))}
        </div>
      </div>
    </section>
  );
}