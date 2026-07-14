import React from "react";
import {
  Award,
  BadgeCheck,
  Cpu,
  Database,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#020817] text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-10">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-24 self-start">

            <div className="rounded-3xl border border-cyan-900/40 bg-[#0B1220] p-8">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm">
                ● Profile
              </span>

              <div className="mt-10">

                <p className="uppercase tracking-[5px] text-gray-500 text-sm">
                  About
                </p>

                <h1 className="text-6xl font-bold text-cyan-400 mt-2">
                  Beena
                </h1>

                <p className="mt-8 text-2xl font-semibold leading-relaxed">
                  Full Stack Developer focused on scalable backend systems,
                  modern frontend development and production-ready web
                  applications.
                </p>

                <div className="flex flex-wrap gap-3 mt-10">

                  <span className="px-4 py-2 rounded-full bg-[#111827] border border-gray-700">
                    Backend APIs
                  </span>

                  <span className="px-4 py-2 rounded-full bg-[#111827] border border-gray-700">
                    React Apps
                  </span>

                  <span className="px-4 py-2 rounded-full bg-[#111827] border border-gray-700">
                    Node.js
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12">

            {/* Heading */}

            <div>
              <h2 className="text-5xl font-bold leading-tight">
                I build scalable backend systems and full-stack applications
                with clean architecture, performance and reliability.
              </h2>

              <p className="mt-8 text-gray-400 text-xl leading-9">
                I enjoy designing APIs, optimizing databases, creating
                production-ready applications, and building responsive React
                interfaces. My focus is writing maintainable code that scales
                while delivering a smooth user experience.
              </p>
            </div>

            {/* Recognition */}

            <div className="rounded-3xl border border-cyan-900/30 bg-[#0B1220] p-10">

              <div className="flex items-start gap-6">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <Award
                    className="text-cyan-400"
                    size={30}
                  />
                </div>

                <div>

                  <p className="uppercase tracking-[4px] text-cyan-400 text-sm">
                    EXPERIENCE
                  </p>

                  <h3 className="text-4xl font-bold mt-2">
                    2+ Years of Professional Experience
                  </h3>

                  <p className="text-gray-400 mt-5 text-lg">
                    Built enterprise web applications using React, Node.js,
                    Flask, PostgreSQL, MySQL and Redis while developing
                    scalable APIs and backend architectures.
                  </p>

                </div>

              </div>

            </div>

            {/* Cards */}

            <div className="grid md:grid-cols-2 gap-8">

              <div className="rounded-3xl bg-[#0B1220] border border-cyan-900/30 p-8">

                <Database
                  className="text-cyan-400 mb-6"
                  size={36}
                />

                <h3 className="text-2xl font-semibold mb-4">
                  Backend Development
                </h3>

                <p className="text-gray-400 leading-8">
                  Designed scalable REST APIs, optimized SQL queries, integrated
                  Redis caching and built secure authentication systems using
                  JWT.
                </p>

              </div>

              <div className="rounded-3xl bg-[#0B1220] border border-cyan-900/30 p-8">

                <Cpu
                  className="text-cyan-400 mb-6"
                  size={36}
                />

                <h3 className="text-2xl font-semibold mb-4">
                  Full Stack Projects
                </h3>

                <p className="text-gray-400 leading-8">
                  Developed complete web applications with React, Express,
                  Flask and MySQL from database design to deployment.
                </p>

              </div>

              <div className="rounded-3xl bg-[#0B1220] border border-cyan-900/30 p-8">

                <BadgeCheck
                  className="text-cyan-400 mb-6"
                  size={36}
                />

                <h3 className="text-2xl font-semibold mb-4">
                  Performance
                </h3>

                <p className="text-gray-400 leading-8">
                  Improved application performance using Redis caching,
                  optimized database indexing and efficient API architecture.
                </p>

              </div>

              <div className="rounded-3xl bg-[#0B1220] border border-cyan-900/30 p-8">

                <Award
                  className="text-cyan-400 mb-6"
                  size={36}
                />

                <h3 className="text-2xl font-semibold mb-4">
                  Production Ready
                </h3>

                <p className="text-gray-400 leading-8">
                  Delivered real-world projects following clean architecture,
                  reusable components and scalable backend practices.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;