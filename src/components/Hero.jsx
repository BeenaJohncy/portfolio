import React from 'react';
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  DownloadIcon,
  MessageCircleIcon,
  MoonIcon
} from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white font-sans px-6 md:px-20 py-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center font-bold">BJ</div>
          <span className="font-semibold text-lg">Beena Johncy</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-gray-400 text-sm">
          {['About', 'Experience', 'Projects', 'Skills', 'AI Twin', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <MoonIcon size={18} className="text-yellow-500 cursor-pointer" />
          <button className="flex items-center gap-2 border border-teal-500/50 text-teal-400 px-4 py-1.5 rounded-lg hover:bg-teal-500/10 transition-all">
            <DownloadIcon size={16} /> Resume
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-950/30 border border-teal-900 px-3 py-1 rounded-full text-xs text-teal-400">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            Available for New Opportunities
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Beena Johncy
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-400">
            Full-Stack Developer
          </h2>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            I build full-stack GenAI platforms where Spring Boot APIs, retrieval systems, 
            MCP servers, LLM gateways, security, observability, and product UX work 
            together in production.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-teal-300 transition-all">
              View Projects <span className="text-xl">↓</span>
            </button>
            <button className="border border-gray-700 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-all">
              <DownloadIcon size={18} /> Resume
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors ml-2">
              <MessageCircleIcon size={20} className="text-teal-400" /> Talk to AI Twin
            </button>
          </div>
        </div>

        {/* Right Column (Virtual Business Card) */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#111827] border border-gray-800 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            {/* Logo Section */}
            <div className="w-40 h-40 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800">
               {/* Replace with actual SVG logo */}
               <div className="text-teal-500 text-6xl font-black">BJ</div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 border-l border-gray-800 pl-8">
              <div>
                <h3 className="text-gray-400 text-lg">Codenex:</h3>
                <p className="text-2xl font-bold">Beena Johncy</p>
              </div>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <MailIcon size={18} /> beenajohncy2002@gmail.com
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <LinkedinIcon size={18} /> linkedin.com/in/beena-johncy-490182293/
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <GithubIcon size={18} /> github.com/BeenaJohncy
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-gray-900 pt-10">
        <StatItem label="KG ENTITIES" value="1M+" />
        <StatItem label="PRODUCTION MCP SERVERS" value="6" />
        <StatItem label="AUTOMATIONS" value="30+" />
        <StatItem label="RETRIEVAL LIFT" value="40%" />
      </div>

      {/* Floating Chat Bubble */}
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center text-black cursor-pointer shadow-lg hover:scale-110 transition-transform">
        <MessageCircleIcon size={28} />
      </div>
    </div>
  );
};

const StatItem = ({ label, value }) => (
  <div className="border-l border-gray-800 pl-6">
    <div className="text-3xl font-bold mb-1">{value}</div>
    <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div>
  </div>
);

export default Hero;