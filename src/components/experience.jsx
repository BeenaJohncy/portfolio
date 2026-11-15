import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, SparklesIcon } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "MiBOT Ventures India Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    duration: "Dec 2025 - Present",
    points: [
      "Develop full-stack web applications using React, Node.js, Express.js, MySQL, and Redis.",
      "Designed and built scalable REST APIs for Learning Management System (LMS) and AI-based platforms.",
      "Optimized backend performance through SQL query tuning and Redis caching.",
      "Participate in system architecture discussions and implement scalable backend solutions.",
      "Mentor junior developers and contribute throughout the Software Development Life Cycle (SDLC).",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "MiBOT Ventures India Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    duration: "Apr 2025 - Nov 2025",
    points: [
      "Built production-ready full-stack applications using React, Flask, Node.js, MySQL, and Redis.",
      "Developed secure REST APIs for AI platforms, LMS, and Robot Controller systems.",
      "Integrated frontend applications with backend services and databases.",
      "Worked closely with the team from requirement analysis to deployment.",
      "Focused on writing clean, maintainable, and scalable code.",
    ],
  },
  {
    role: "Python Developer Trainee",
    company: "Phantom Digital Effects Ltd",
    location: "Chennai, Tamil Nadu",
    duration: "Jan 2024 - Mar 2025",
    points: [
      "Enhanced Python-based production tools by implementing new features and resolving issues.",
      "Reduced production bugs through debugging, testing, and code optimization.",
      "Wrote SQL queries and maintained databases to improve data reliability.",
      "Collaborated with senior developers to improve workflow efficiency.",
      "Gained hands-on experience with production software development and debugging.",
    ],
  },
  {
    role: "Software Intern",
    company: "CRUD Operations Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    duration: "Jun 2023 - Dec 2023",
    points: [
      "Worked on frontend and backend development using modern web technologies.",
      "Learned software development best practices and Agile workflows.",
      "Assisted in developing and testing application features.",
      "Collaborated with the development team to resolve bugs and improve application quality.",
    ],
  },
];

const Experience = ({ onAsk }) => {
  const trackRef = useRef(null);
  const dotRefs = useRef([]);
  const [fill, setFill] = useState(0); // px of line that is filled
  const [centers, setCenters] = useState([]); // circle centres, px from track top

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const track = trackRef.current;
      if (!track) return;
      const box = track.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55; // line "head" sits here on screen

      setFill(Math.min(Math.max(anchor - box.top, 0), box.height));
      setCenters(
        dotRefs.current.map((el) => {
          if (!el) return Infinity;
          const r = el.getBoundingClientRect();
          return r.top + r.height / 2 - box.top;
        })
      );
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="experience" className="relative bg-[#020817] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[380px_1fr] gap-16">
        {/* LEFT: sticky card */}
        <div className="lg:sticky lg:top-28 h-fit">
          <div className="rounded-3xl border border-teal-900/40 bg-[#0B1220] p-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/30 text-teal-400 font-mono text-xs">
              Journey
            </span>

            <h2 className="text-5xl font-bold mt-8 text-white leading-[1.1]">
              Professional
              <span className="block text-teal-400">Experience</span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8">
              I've grown from developing Python applications to building
              scalable full-stack web applications with React, Node.js, Express
              and MySQL.
            </p>

            <h3 className="mt-12 text-2xl font-semibold text-white">
              And a new <span className="text-teal-400">adventure</span> ahead.
            </h3>
          </div>
        </div>

        {/* RIGHT: timeline */}
        <div ref={trackRef} className="relative">
          {/* line track */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-800" />
          {/* line fill (grows with scroll) */}
          <div
            className="absolute left-[19px] top-0 w-[2px] bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]"
            style={{ height: fill }}
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => {
              const c = centers[i] ?? Infinity;
              const ringOn = fill >= c - 20; // line touched the circle's top
              const dotOn = fill >= c; // line reached its centre

              return (
                <div key={i} className="relative pl-20">
                  {/* circle: ring first, then inner dot */}
                  <div
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    className={`absolute left-0 top-8 w-10 h-10 rounded-full border-4 bg-[#020817] z-10 flex items-center justify-center
                      transition-[border-color,box-shadow] duration-500 motion-reduce:transition-none
                      ${
                        ringOn
                          ? "border-teal-400 shadow-[0_0_18px_rgba(45,212,191,0.55)]"
                          : "border-gray-700"
                      }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full bg-teal-400 transition-transform duration-500 delay-150 motion-reduce:transition-none
                        ${dotOn ? "scale-100" : "scale-0"}`}
                    />
                  </div>

                  {/* card */}
                  <div className="rounded-3xl bg-[#0B1220] border border-teal-900/30 p-8 md:p-10">
                    <div className="flex flex-wrap justify-between gap-5">
                      <div className="min-w-0">
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-teal-400 text-xl mt-2">{exp.company}</p>
                        <div className="flex items-center gap-2 mt-3 text-gray-400">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-3 h-fit">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 text-gray-400 font-mono text-xs uppercase tracking-wider">
                          <Briefcase size={14} /> Experience
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 text-gray-400 font-mono text-xs">
                          <Calendar size={14} /> {exp.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-8 space-y-5">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-4 text-gray-300 leading-8">
                          <span className="w-2 h-2 mt-3 shrink-0 rounded-full bg-teal-400" />
                          <div>
                            {point}
                            <div>
                              <button
                                onClick={() => onAsk?.(`${exp.role} at ${exp.company}: ${point}`)}
                                className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-900/60 text-teal-400/80 font-mono text-[10px] uppercase tracking-wider hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
                              >
                                <SparklesIcon size={11} /> Ask about this
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;