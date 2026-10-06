import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-left animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {project.badge}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">
          {project.title}
        </h3>

        {/* Full Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.fullDescription || project.shortDescription}
        </p>

        {/* Demo Note */}
        {project.demoNote && (
          <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{project.demoNote}</span>
          </div>
        )}

        {/* Key Features */}
        {project.features && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Key Features & Architecture</span>
            </h4>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            Technologies & Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-colors flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto sm:ml-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
