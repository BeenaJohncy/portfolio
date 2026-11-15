// src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

function Home() {
  return (
    <div className="bg-[#020817] min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience/>
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default Home;