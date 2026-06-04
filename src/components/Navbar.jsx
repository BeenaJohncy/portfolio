// src/components/Navbar.jsx

function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-cyan-500/20 rounded-full px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl border border-cyan-400 flex items-center justify-center text-cyan-400 font-bold text-xl">
            B
          </div>

          <h1 className="text-white text-2xl font-bold">
            Beena Johncy
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-10 text-gray-300 font-medium">
          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;