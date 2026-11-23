// src/components/Footer.jsx
import { Mail, Linkedin, Github, ArrowUp, Download, MessageCircle } from "lucide-react";
import mascot from "../assets/mascot.png";

const EMAIL = "beenajohncy2002@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-handle"; // TODO: replace
const GITHUB_URL = "https://github.com/your-handle";            // TODO: replace
const RESUME_URL = "/Beena-Resume.pdf";                         // place file in /public

const socials = [
    { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail },
    { label: "LinkedIn", href: LINKEDIN_URL, Icon: Linkedin, external: true },
    { label: "GitHub", href: GITHUB_URL, Icon: Github, external: true },
];

const explore = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Bleez", href: "#bleez" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: RESUME_URL, download: true },
];

export default function Footer({ onAskBleez }) {
    return (
        <footer className="px-4 pb-6 pt-24 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0a1a22] to-[#07121a] px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
                {/* soft teal glow, decorative only */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl"
                />

                <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_auto_1fr] lg:gap-8">
                    {/* Left: CTA */}
                    <div className="max-w-md text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                            Let's build something worth shipping.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-400">
                            Flask and Node.js APIs, Redis-backed performance and React
                            interfaces that hold up in production.
                        </p>

                        <ul className="mt-6 flex justify-center gap-3 lg:justify-start">
                            {socials.map(({ label, href, Icon, external }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        aria-label={label}
                                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-teal-400/60 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
                                    >
                                        <Icon size={18} aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Centre: mascot + chat prompt */}
                    <div className="flex flex-col items-center">
                        <p className="rounded-full border border-white/10 bg-[#0b1d26] px-4 py-2 text-sm text-slate-300">
                            Didn't find something? Ask me.
                        </p>

                        <div className="relative mt-4 grid h-44 w-44 place-items-center sm:h-48 sm:w-48">
                            {/* orbit ring */}
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full border border-teal-400/40 motion-safe:animate-[spin_14s_linear_infinite]"
                            >
                                <span className="absolute -right-1 top-[78%] h-2.5 w-2.5 rounded-full bg-teal-300" />
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-3 rounded-full border border-white/5 bg-[#08161e]"
                            />
                            <img
                                src={mascot}
                                alt="Bleez, the portfolio assistant"
                                loading="lazy"
                                className="relative h-28 w-28 object-contain sm:h-32 sm:w-32 motion-safe:animate-[float_5s_ease-in-out_infinite]"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={onAskBleez}
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-base font-semibold text-[#052027] transition hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
                        >
                            <MessageCircle size={18} aria-hidden="true" />
                            Ask Bleez
                        </button>
                    </div>

                    {/* Right: Explore */}
                    <nav aria-label="Footer" className="text-center lg:justify-self-end lg:text-left">
                        <p className="text-sm text-slate-500">Explore</p>
                        <ul className="mt-5 grid grid-cols-2 gap-x-12 gap-y-4 text-left sm:gap-x-16">
                            {explore.map(({ label, href, download }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        {...(download && { download: true })}
                                        className="inline-flex items-center gap-2 text-slate-300 transition hover:text-teal-300"
                                    >
                                        {download && <Download size={15} aria-hidden="true" />}
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="relative mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Beena Johncy A</p>
                    <a
                        href="#top"
                        className="inline-flex items-center gap-2 transition hover:text-teal-300"
                    >
                        <ArrowUp size={15} aria-hidden="true" />
                        Back to top
                    </a>
                </div>
            </div>
        </footer>
    );
}