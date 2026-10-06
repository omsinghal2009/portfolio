import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-lg">
                    OS
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {personalInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Undergraduate student at {personalInfo.college}, Jaipur. Passionate about Artificial Intelligence, Generative AI, web development, and building digital tools that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Connect With Me
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Email Om Singhal"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-slate-400">
              {personalInfo.collegeLocation}, India
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </p>

          <p className="text-slate-400">
            Engineered with React, Vite & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all flex items-center gap-1 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-xs font-medium">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
