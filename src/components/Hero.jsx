import React from "react";
import {
  DownloadIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  MessageCircleIcon,
} from "lucide-react";
import mascot from "../assets/mascot.png";

const STATS = [
  { value: "2+", label: "Years of experience" },
  { value: "3", label: "Domains: AI, LMS, Robotics" },
  { value: "Sr.", label: "Full-Stack Developer since Dec 2025" },
];

/* The "response body". Each entry is one line: [indent, key, value, valueType] */
const RESPONSE = [
  [0, null, "{", "punct"],
  [1, "name", '"Beena Johncy A"', "str"],
  [1, "role", '"Senior Full-Stack Developer"', "str"],
  [1, "company", '"MiBOT Ventures India Pvt Ltd"', "str"],
  [1, "location", '"Chennai, India"', "str"],
  [1, "experience", '"2+ years"', "str"],
  [1, "builds", '["REST APIs", "AI data exchange", "LMS", "Robot control UIs"]', "str"],
  [1, "optimizes", '["SQL queries", "indexing", "Redis caching"]', "str"],
  [1, "secures", '["JWT auth", "encrypted image transfer"]', "str"],
  [1, "status", '"open_to_opportunities"', "ok"],
  [0, null, "}", "punct"],
];

const valueColor = {
  punct: "text-gray-500",
  str: "text-teal-300",
  ok: "text-emerald-300",
};

const StatItem = ({ label, value }) => (
  <div className="border-l-2 border-teal-500/40 pl-5">
    <div className="text-3xl font-bold mb-1">{value}</div>
    <div className="font-mono text-[11px] text-gray-500 uppercase tracking-widest leading-snug">
      {label}
    </div>
  </div>
);

const ApiCard = ({ onAskBleez }) => (
  <figure
    aria-label="Developer profile shown as a JSON API response"
    className="relative mt-14 lg:mt-0"
  >
    {/* Bleez perched on the card corner */}
    <img
      src={mascot}
      alt=""
      className="pointer-events-none absolute -top-14 right-6 z-10 h-24 w-24 -scale-x-100 object-contain motion-safe:animate-float sm:-top-16 sm:h-28 sm:w-28"
    />

    <div className="relative overflow-hidden rounded-2xl border border-teal-900/60 bg-[#0B1220] shadow-2xl shadow-teal-950/40">
      {/* Request bar */}
      <div className="flex flex-wrap items-center gap-3 border-b border-teal-900/50 bg-teal-950/30 px-5 py-3 font-mono text-xs sm:text-sm">
        <span className="rounded bg-teal-400/15 px-2 py-0.5 font-semibold text-teal-300">
          GET
        </span>
        <span className="text-gray-300">/api/developer/beena-johncy</span>
        <span className="ml-auto flex items-center gap-2 text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          200 OK
        </span>
      </div>

      {/* Response body */}
      <pre className="overflow-x-auto px-5 py-6 font-mono text-[12.5px] leading-7 sm:text-sm">
        <code>
          {RESPONSE.map(([indent, key, value, type], i) => (
            <div
              key={i}
              className="motion-safe:animate-line-in whitespace-pre"
              style={{ animationDelay: `${i * 90 + 300}ms` }}
            >
              {"  ".repeat(indent)}
              {key && (
                <>
                  <span className="text-gray-400">"{key}"</span>
                  <span className="text-gray-500">: </span>
                </>
              )}
              <span className={valueColor[type]}>{value}</span>
              {key && i < RESPONSE.length - 2 && (
                <span className="text-gray-500">,</span>
              )}
            </div>
          ))}
        </code>
      </pre>

      {/* Footer line */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-teal-900/50 px-5 py-3 text-sm">
        <button
          type="button"
          onClick={onAskBleez}
          className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-teal-300"
        >
          <MessageCircleIcon size={16} className="text-teal-400" />
          Ask Bleez about my projects
        </button>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 font-mono text-xs text-gray-500 transition-colors hover:text-teal-300"
        >
          POST /contact <ArrowRightIcon size={13} />
        </a>
      </div>
    </div>
  </figure>
);

const Hero = ({ onAskBleez }) => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#020817] px-6 pb-10 pt-28 font-sans text-white md:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[700px] w-[700px] rounded-full bg-teal-500/10 blur-[140px]"
      />

      <main className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        {/* Left */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/20 px-4 py-2 font-mono text-xs font-semibold text-teal-400">
            <span className="h-2 w-2 rounded-full bg-teal-400 motion-safe:animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl">
            Beena Johncy
          </h1>

          <h2 className="text-1xl font-semibold text-gray-400 sm:text-4xl xl:text-5xl">
            Full-Stack <span className="text-teal-400">Developer</span>
            <span className="ml-1 text-gray-600">/ backend-first</span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-gray-400">
            I build REST APIs and web applications with Flask, Node.js and
            React, then make them fast and reliable with SQL optimization and
            Redis caching.
          </p>

          <div className="grid max-w-xl grid-cols-1 gap-6 pt-4 sm:grid-cols-3">
            {STATS.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-full bg-teal-400 px-7 py-4 font-semibold text-black transition-colors hover:bg-teal-300"
            >
              View projects <ArrowDownIcon size={18} />
            </a>
            <a
              href="/Beena-Resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-gray-700 px-7 py-4 font-semibold transition-colors hover:bg-white/5"
            >
              <DownloadIcon size={18} /> Resume
            </a>
            <a
              href="#skills"
              className="ml-1 inline-flex items-center gap-1 text-gray-400 transition-colors hover:text-white"
            >
              Skills &amp; stack <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>

        {/* Right */}
        <ApiCard onAskBleez={onAskBleez} />
      </main>

      {/* Floating chat button */}
      <button
        type="button"
        onClick={onAskBleez}
        aria-label="Chat with Bleez"
        className="fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal-400 text-black shadow-lg shadow-teal-500/30 transition-transform hover:scale-110"
      >
        <MessageCircleIcon size={28} />
      </button>
    </section>
  );
};

export default Hero;