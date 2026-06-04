// src/components/About.jsx

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#020817] text-white px-8 lg:px-16 py-32"
    >
      <h2 className="text-5xl font-bold mb-10 text-cyan-400">
        About Me
      </h2>

      <p className="text-gray-400 text-xl leading-10 max-w-4xl">
        I am a full-stack developer specializing in React,
        Django, PostgreSQL, and scalable backend systems.
      </p>
    </section>
  );
}

export default About;