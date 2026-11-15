import React from "react";
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  DownloadIcon,
  MessageCircleIcon,
  ArrowDownIcon,
} from "lucide-react";
import mascot from "../assets/mascot.png";

const STATS = [
  { value: "2+", label: "Years of experience" },
  { value: "3", label: "Product domains: AI, LMS, Robotics" },
  { value: "4", label: "Role-based LMS modules" },
  { value: "Redis", label: "Caching & SQL tuning" },
];

const StatItem = ({ label, value }) => (
  <div className="border-l-2 border-teal-500/40 pl-5">
    <div className="text-3xl font-bold mb-1">{value}</div>
    <div className="font-mono text-[11px] text-gray-500 uppercase tracking-widest leading-snug">
      {label}
    </div>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-[#020817] text-white font-sans px-6 md:px-20 pt-28 pb-8 overflow-hidden"
    >
      {/* soft teal glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-teal-500/10 blur-[140px]" />

      <main className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 border border-teal-500/30 bg-teal-950/20 px-4 py-2 rounded-full font-mono text-xs font-semibold text-teal-400">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            Available for New Opportunities
          </div>

          <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]">
            Beena Johncy
          </h1>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-400">
            Full-Stack <span className="text-teal-400">Developer</span>
          </h2>

          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            I build scalable web applications and REST APIs with React, Flask
            and Node.js, then make them fast and reliable with SQL
            optimization and Redis caching.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 max-w-2xl">
            {STATS.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a
              href="#projects"
              className="bg-teal-400 text-black font-semibold px-7 py-4 rounded-full flex items-center gap-3 hover:bg-teal-300 transition-colors"
            >
              View projects <ArrowDownIcon size={18} />
            </a>
            <button className="border border-gray-700 font-semibold px-7 py-4 rounded-full flex items-center gap-2 hover:bg-white/5 transition-colors">
              <DownloadIcon size={18} /> Resume
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors ml-2">
              <MessageCircleIcon size={20} className="text-teal-400" /> Talk
              with Bleez
            </button>
          </div>
        </div>

        {/* Right: business card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <div className="relative bg-gradient-to-br from-teal-800/60 via-[#0B1220] to-[#0B1220] border border-teal-900/60 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="w-44 h-44 shrink-0 rounded-2xl flex items-center justify-center">
              <img
                src={mascot}
                alt="Mascot"
                className="-scale-x-100 w-full h-full object-contain"
              />
            </div>

            <div className="space-y-5 md:border-l border-teal-700/40 md:pl-8 w-full">
              <div>
                <h3 className="text-gray-400 text-lg">Codefly:</h3>
                <p className="text-2xl font-bold">Beena Johncy</p>
              </div>
              <div className="h-px bg-teal-700/40" />
              <div className="space-y-3 text-gray-300 text-sm">
                <a
                  href="mailto:beenajohncy2002@gmail.com"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <MailIcon size={18} className="text-teal-400 shrink-0" />
                  beenajohncy2002@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/beena-johncy-490182293/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-white break-all"
                >
                  <LinkedinIcon size={18} className="text-teal-400 shrink-0" />
                  linkedin.com/in/beena-johncy-490182293/
                </a>
                <a
                  href="https://github.com/BeenaJohncy"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <GithubIcon size={18} className="text-teal-400 shrink-0" />
                  github.com/BeenaJohncy
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating chat bubble */}
      <button
        aria-label="Chat with Bleez"
        className="fixed bottom-8 right-8 w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center text-black shadow-lg shadow-teal-500/30 hover:scale-110 transition-transform z-40"
      >
        <MessageCircleIcon size={28} />
      </button>
    </section>
  );
};

export default Hero;