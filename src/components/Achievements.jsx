import React, { useState } from 'react';
import { Award, Trophy, BookOpen, Sparkles, PlusCircle, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap = {
  Award: <Award className="w-5 h-5 text-indigo-400" />,
  Trophy: <Trophy className="w-5 h-5 text-yellow-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-cyan-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
};

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = achievements.categories;

  // Flatten or filter items based on activeTab
  const getDisplayItems = () => {
    if (activeTab === 'all') {
      const all = [];
      categories.forEach(cat => {
        cat.items.forEach(item => {
          all.push({ ...item, categoryId: cat.id, categoryTitle: cat.title, iconName: cat.iconName });
        });
      });
      return all;
    }

    const currentCat = categories.find(c => c.id === activeTab);
    if (!currentCat) return [];
    return currentCat.items.map(item => ({
      ...item,
      categoryId: currentCat.id,
      categoryTitle: currentCat.title,
      iconName: currentCat.iconName
    }));
  };

  const displayItems = getDisplayItems();

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-indigo-400">Achievements</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A growing portfolio of certifications, hackathon participation, verified coursework, and academic milestones.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-yellow-600 text-white shadow-lg shadow-indigo-600/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Milestones
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-yellow-600 text-white shadow-lg shadow-indigo-600/20 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-yellow-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/10 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[item.iconName] || <Award className="w-5 h-5 text-yellow-400" />}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-yellow-300 border border-slate-700/60">
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-white group-hover:text-yellow-300 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-cyan-400 mb-3">
                  {item.issuer}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom metadata */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{item.date}</span>
                </div>
                <span className="text-[11px] font-medium text-slate-400">
                  {item.categoryTitle}
                </span>
              </div>
            </div>
          ))}

          {/* Extensible "Add More" Card */}
          <div className="p-6 rounded-2xl bg-slate-900/30 border border-dashed border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between text-center items-center py-8">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
              <PlusCircle className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1 font-display">
                Continuous Milestones
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto mb-3">
                Actively pursuing new hackathons, competitive coding challenges, and AI certifications at JECRC University.
              </p>
            </div>
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Future Ready
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
