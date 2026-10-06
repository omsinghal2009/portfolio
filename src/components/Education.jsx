import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle, Code, Brain, Layout, GitBranch, Cpu, Calculator } from 'lucide-react';
import { education } from '../data/portfolioData';

const areaIcons = [
  <Code className="w-5 h-5 text-indigo-400" />,
  <Brain className="w-5 h-5 text-purple-400" />,
  <Layout className="w-5 h-5 text-cyan-400" />,
  <GitBranch className="w-5 h-5 text-emerald-400" />,
  <Cpu className="w-5 h-5 text-amber-400" />,
  <Calculator className="w-5 h-5 text-rose-400" />,
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Building rigorous theoretical fundamentals and applying them directly to real-world code.
          </p>
        </div>

        {/* Main Degree Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-indigo-500/30 shadow-xl shadow-indigo-950/20 backdrop-blur-md overflow-hidden">
            {/* Corner ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[2px] shrink-0 shadow-lg shadow-indigo-600/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
                    {education.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {education.degree}
                  </h3>
                  <p className="text-lg font-semibold text-cyan-400 mt-1">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 font-medium">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 font-medium">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <p className="pt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              {education.description}
            </p>
          </div>
        </div>

        {/* Relevant Learning Areas */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Relevant Learning Areas</span>
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Core subjects and focus areas during my B.Tech curriculum and self-driven engineering studies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {education.relevantAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                    {areaIcons[idx % areaIcons.length]}
                  </div>
                  <h4 className="text-base font-bold font-display text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-medium text-indigo-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Curriculum & Practical Focus</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
