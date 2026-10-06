import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowRight, Sparkles, Layers, Cpu, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Highlighted <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical applications blending modern frontend engineering, artificial intelligence, and student productivity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/15 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Preview Banner */}
              <div className="p-6 sm:p-7 pb-0">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{project.badge}</span>
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-indigo-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                  {project.features?.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 truncate">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used & Action Button */}
              <div className="p-6 sm:p-7 pt-4 border-t border-slate-800/80 mt-auto bg-slate-950/40">
                <div className="mb-5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-all duration-200 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub source code for ${project.title}`}
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* In-depth Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
