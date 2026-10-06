import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, Sparkles, MapPin, GraduationCap, Code2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-indigo-900/40 backdrop-blur-md animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.statusText}</span>
          </div>

          {/* Main Name & Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subheading requested: "B.Tech Student | AI & Technology Enthusiast" */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-200 mb-6 font-display">
            {personalInfo.tagline}
          </p>

          {/* Descriptive Intro */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Undergraduate student at <span className="text-indigo-300 font-semibold">{personalInfo.college}</span>, {personalInfo.location}. 
            Passionate about building intelligent AI utilities, modern web applications, and high-impact digital systems.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => handleScroll('projects')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-200 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => handleScroll('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Quick Bar */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200 shadow-sm"
              title={`Email: ${personalInfo.email}`}
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-slate-850 transition-all duration-200 shadow-sm"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-850 transition-all duration-200 shadow-sm"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Metrics / Key Highlight Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-4 border-t border-slate-800/80">
            <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-left">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Program</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white">B.Tech 1st Year</p>
              <p className="text-xs text-slate-400 truncate">Computer Science</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-left">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>University</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white">JECRC Univ.</p>
              <p className="text-xs text-slate-400 truncate">Jaipur, Rajasthan</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-left">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interest</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white">AI & GenAI</p>
              <p className="text-xs text-slate-400 truncate">Intelligent Systems</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-left">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Code2 className="w-3.5 h-3.5" />
                <span>Frontend</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white">Web & Tools</p>
              <p className="text-xs text-slate-400 truncate">React & Tailwind</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
