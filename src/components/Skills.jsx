import React, { useState } from 'react';
import { 
  Code, 
  Palette, 
  FileCode, 
  Terminal, 
  Brain, 
  Sparkles, 
  Globe, 
  Cpu, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Code: <Code className="w-6 h-6 text-orange-400" />,
  Palette: <Palette className="w-6 h-6 text-sky-400" />,
  FileCode: <FileCode className="w-6 h-6 text-yellow-400" />,
  Terminal: <Terminal className="w-6 h-6 text-emerald-400" />,
  Brain: <Brain className="w-6 h-6 text-purple-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
  Globe: <Globe className="w-6 h-6 text-indigo-400" />,
  Cpu: <Cpu className="w-6 h-6 text-pink-400" />,
};

const categories = ['All', 'Frontend', 'Languages', 'AI & Tech', 'Development', 'Productivity'];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Expertise</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Core technologies, programming languages, and intelligent systems I work with.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/25 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 group flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-inner">
                    {iconMap[skill.iconName] || <Code className="w-6 h-6 text-indigo-400" />}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {skill.description}
                </p>
              </div>

              {/* Bottom: Proficiency bar & Sub-tags */}
              <div>
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Sub-tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {skill.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
