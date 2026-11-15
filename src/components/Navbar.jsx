import { useEffect, useState } from "react";
import { SunIcon, DownloadIcon, SearchIcon } from "lucide-react";
import logo from "../assets/logo.png";

const LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY < 50) {
        setActiveSection("");
        return;
      }

      LINKS.forEach((item) => {
        const id = item.toLowerCase();
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) setActiveSection(id);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
      <div
        className={`flex items-center justify-between px-6 py-2 rounded-full border transition-all duration-500
          ${
            scrolled
              ? "bg-[#0B1220]/70 backdrop-blur-xl border-teal-500/20 shadow-[0_0_40px_-10px_rgba(45,212,191,0.25)]"
              : "bg-[#0B1220]/40 border-teal-900/40"
          }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-11 h-11 object-contain" />
          <span className="text-white text-xl font-bold">Beena Johncy</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          {LINKS.map((item) => {
            const id = item.toLowerCase();
            const active = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  active
                    ? "bg-teal-500/15 text-teal-400"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </a>
            );
          })}

          <span className="w-px h-6 bg-gray-700 mx-2" />

          {/* Search hint (wire up to a command palette later) */}
          <button
            aria-label="Search"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors"
          >
            <SearchIcon size={14} />
            <span className="font-mono text-xs">⌘K</span>
          </button>

          <button aria-label="Toggle theme" className="p-2">
            <SunIcon size={18} className="text-yellow-400" />
          </button>

          <button className="flex items-center gap-2 font-semibold border border-teal-500/50 text-teal-400 px-4 py-2 rounded-full bg-teal-500/10 transition-all hover:bg-teal-400 hover:text-black">
            <DownloadIcon size={16} /> Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;