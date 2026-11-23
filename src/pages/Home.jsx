// src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;