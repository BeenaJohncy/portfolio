import React from "react";
import {
  Award,
  DownloadIcon,
  MapPinIcon,
  SparklesIcon,
  TrendingUpIcon,
} from "lucide-react";
import logo from "../assets/logo.png";

// Optional: pass onAsk={(prompt) => openChat(prompt)} to wire the chips to Bleez
const STATS = [
  {
    value: "4",
    label: "LMS role modules",
    text: "Admin, College, Trainer and Student modules for a Learning Management System, built on secure REST APIs with role-based access control.",
    prompt: "Tell me about the Learning Management System project",
  },
  {
    value: "3",
    label: "Product domains",
    text: "REST APIs and web apps for AI platforms, learning management systems and robot controller systems, from requirements to deployment.",
    prompt: "What kinds of products has Beena built?",
  },
  {
    value: "2+",
    label: "Years in production",
    text: "Shipped and maintained Python and full-stack applications across two companies, including debugging, testing and routine database upkeep.",
    prompt: "Tell me about Beena's work experience",
  },
  {
    value: "Redis",
    label: "Performance layer",
    text: "Cut response times with SQL query optimization, database indexing and Redis caching, plus JWT authentication for secure APIs.",
    prompt: "How does Beena improve application performance?",
  },
];

const AskChip = ({ prompt, onAsk }) => (
  <button
    onClick={() => onAsk?.(prompt)}
    className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-900/60 text-teal-400/80 font-mono text-[11px] uppercase tracking-wider hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
  >
    <SparklesIcon size={12} /> Ask about this
  </button>
);

const About = ({ onAsk }) => {
  return (
    <section id="about" className="relative bg-[#020817] text-white py-24">
      <div className="pointer-events-none absolute top-40 left-0 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[420px_1fr] gap-10">
          {/* LEFT: sticky profile card */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="rounded-3xl border border-teal-900/40 bg-[#0B1220] p-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/30 text-teal-400 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                Profile
              </span>

              <h1 className="mt-10 text-4xl font-bold leading-[1.05]">
                About
                {/* <span className="block text-teal-400">Beena</span> */}
              </h1>

              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                I build web applications that stay fast and dependable after
                launch: clean APIs, tuned databases and interfaces people
                enjoy using.
              </p>

              <dl className="mt-8 pt-8 border-t border-gray-800 space-y-6">
                <div className="grid grid-cols-[64px_1fr] gap-4 items-start">
                  <dt className="font-mono text-[11px] text-gray-500 uppercase tracking-widest pt-1">
                    Role
                  </dt>
                  <dd>
                    <p className="font-semibold text-lg">
                      Senior Full-Stack Developer
                    </p>
                    <p className="text-sm text-gray-400">
                      MiBOT Ventures · Dec 2025 - present
                    </p>
                  </dd>
                </div>
                <div className="grid grid-cols-[64px_1fr] gap-4 items-center">
                  <dt className="font-mono text-[11px] text-gray-500 uppercase tracking-widest">
                    Based
                  </dt>
                  <dd className="flex items-center gap-2 text-gray-300">
                    <MapPinIcon size={16} className="text-teal-400" />
                    Chennai, Tamil Nadu, India
                  </dd>
                </div>
              </dl>

              <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  Open to new roles
                </span>
                <button className="flex items-center gap-2 bg-teal-400 text-black font-semibold px-5 py-2.5 rounded-full hover:bg-teal-300 transition-colors">
                  <DownloadIcon size={16} /> Resume
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {/* Intro with logo */}
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex w-14 h-14 shrink-0 rounded-2xl bg-teal-500/10 border border-teal-900/60 items-center justify-center">
                <img src={logo} alt="" className="w-10 h-10 object-contain" />
              </div>
              <p className="text-gray-300 text-lg leading-7" >
                I focus on the engineering that keeps an application healthy
                after release: designing REST APIs, optimizing databases,
                caching what matters, and building responsive React
                interfaces on top.
              </p>
            </div>

            {/* Career highlight */}
            <div className="rounded-3xl border border-teal-900/40 bg-[#0B1220] p-8 md:p-7">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 shrink-0 rounded-2xl border border-teal-500/30 bg-teal-500/10 flex items-center justify-center">
                  <TrendingUpIcon className="text-teal-400" size={26} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[4px] text-teal-400">
                    Growth
                  </p>
                  <h3 className="text-3xl md:text-3xl font-bold mt-2">
                    Promoted to Senior Full-Stack Developer
                  </h3>
                  <p className="text-gray-400 mt-4 text-lg leading-8">
                    Joined MiBOT Ventures as a Full-Stack Developer in April
                    2025 and moved up to Senior in December 2025, while
                    mentoring interns and delivering on deadline.
                  </p>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-3xl bg-[#0B1220] border border-teal-900/30 p-8 flex flex-col"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold">{s.value}</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-teal-400">
                      {s.label}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-8 mt-4 grow">{s.text}</p>
                  <div>
                    <AskChip prompt={s.prompt} onAsk={onAsk} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;