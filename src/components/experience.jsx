import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react";

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

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#020817] py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[380px_1fr] gap-16">

        {/* Left Card */}

        <div className="sticky top-32 h-fit">

          <div className="rounded-3xl border border-cyan-500/10 bg-[#0b1220] p-10">

            <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-400 text-sm">
              Journey
            </span>

            <h2 className="text-3xl font-bold mt-8 text-white">
              Professional
              <br />
              <span className="text-cyan-400">
                Experience
              </span>
            </h2>

            <p className="mt-8 text-gray-400 leading-9">
              My professional journey has helped me grow from
              developing Python applications to building
              scalable Full Stack web applications using
              React, Node.js, Express and MySQL.
            </p>

            <h3 className="mt-18 text-4xl font-bosld">
              And a new{" "}
              <span className="text-cyan-400">
                adventure
              </span>{" "}
              ahead.
            </h3>

          </div>

        </div>

        {/* Right Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-cyan-400/30"></div>

          <div className="space-y-20">

            {experiences.map((exp, index) => (

              <div
                key={index}
                className="relative pl-20"
              >

                {/* Circle */}

                <div className="absolute left-0 top-8 w-10 h-10 rounded-full border-4 border-cyan-400 bg-[#020817] z-10"></div>

                {/* Card */}

                <div className="rounded-3xl bg-[#0b1220] border border-cyan-400/10 p-8">

                  <div className="flex flex-wrap justify-between gap-5">

                    <div>

                      <h3 className="text-4xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <p className="text-cyan-400 text-xl mt-2">
                        {exp.company}
                      </p>

                      <div className="flex items-center gap-2 mt-3 text-gray-400">

                        <MapPin size={16} />

                        {exp.location}

                      </div>

                    </div>

                    <div className="flex items-center gap-2 text-gray-400 h-fit">

                      <Calendar size={16} />

                      {exp.duration}

                    </div>

                  </div>

                  <ul className="mt-8 space-y-4">

                    {exp.points.map((point, i) => (

                      <li
                        key={i}
                        className="flex gap-4 text-gray-300 leading-8"
                      >

                        <span className="w-2 h-2 mt-3 rounded-full bg-cyan-400"></span>

                        {point}

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;