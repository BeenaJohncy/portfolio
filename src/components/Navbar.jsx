import { useEffect, useState } from "react";
import { MoonIcon, DownloadIcon } from "lucide-react";
import logo from "../assets/logo.png"

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "projects", "skills"];

      if (window.scrollY < 50) {
        setActiveSection("");
        return;
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-8xl">
      <div
        className={`
          flex items-center justify-between
          px-8 py-2 rounded-full
          transition-all duration-500

          ${scrolled
            ? `
                bg-[#0f172a]/60
                backdrop-blur-xl
                border border-teal-500/20
                shadow-lg
              `
            : `
                bg-transparent
                border border-transparent
                backdrop-blur-0
              `
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center">

          <img src = {logo} alt="Logo" className="w-16 h-16 object-contain"/>
          <h1 className="text-white text-xl font-bold">
            Beena Johncy
          </h1>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-4 text-gray-400 text-sm">
          {[
            "About",
            "Projects",
            "Skills",
          ].map((item) => {
            const sectionId = item.toLowerCase().replace(" ", "");

            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className={`
          px-4 py-2 rounded-full font-small
          transition-all duration-300

          ${activeSection === sectionId
                    ? `
                bg-teal-500/15
                text-teal-400
              `
                    : `
                text-gray-300
                hover:bg-white/10
                hover:text-white
              `
                  }
        `}
              >
                {item}
              </a>
            );
          })}
          <MoonIcon size={18} className="text-yellow-500 cursor-pointer" />
          <button className="flex items-center gap-2 font-bold border border-teal-500/50 text-teal-400 px-2 py-1.5 rounded-full bg-teal-500/10 transition-all hover:bg-teal-500 hover:text-white rounded-full">
            <DownloadIcon size={16} /> Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;