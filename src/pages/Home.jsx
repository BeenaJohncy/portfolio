// src/pages/Home.jsx

// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="bg-[#020817]">
      {/* <Navbar /> */}

      <Hero />

      <About />

      <Projects />

      <Skills />
    </div>
  );
}

export default Home;