import React from 'react';
import { User, Cpu, Sparkles, Code, CheckCircle2, MapPin, Mail, School, ArrowUpRight } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A passionate first-year engineering student dedicated to building real-world projects and exploring modern tech.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4 flex items-center gap-2">
                <span>Driven by Curiosity & Hands-On Engineering</span>
              </h3>
              
              {/* Primary quotation/summary */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-indigo-200 text-base font-medium mb-6 italic leading-relaxed">
                "{aboutMe.summary}"
              </div>

              {/* Extended narrative */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutMe.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Quick Contact & Action Bar */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Based in {personalInfo.location}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
                >
                  <span>Connect with me</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Profile Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/30 transition-colors">
                <School className="w-5 h-5 text-indigo-400 mb-2" />
                <p className="text-xs text-slate-400 font-medium">Institution</p>
                <p className="text-sm font-bold text-white mt-0.5">{personalInfo.college}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <Cpu className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-xs text-slate-400 font-medium">Status</p>
                <p className="text-sm font-bold text-white mt-0.5">B.Tech 1st Year</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/30 transition-colors">
                <Mail className="w-5 h-5 text-purple-400 mb-2" />
                <p className="text-xs text-slate-400 font-medium">Direct Email</p>
                <p className="text-sm font-bold text-white mt-0.5 truncate">{personalInfo.email}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Key Pillars / Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold font-display text-slate-200 px-1">
              Core Principles & What I Bring
            </h3>

            <div className="space-y-3.5">
              {aboutMe.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-1 font-display">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Motivational Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-cyan-950/30 border border-indigo-500/20 text-center">
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                "Continuous learning is my north star. Looking forward to collaborating on ambitious software projects!"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
