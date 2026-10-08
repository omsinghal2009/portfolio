import { ExternalLink, Code2, Folder } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio built with React, Tailwind CSS, and Vite. Features smooth animations, dark theme, and mobile-first design.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
    color: 'from-primary-500 to-cyan-500',
    icon: '🌐',
  },
  {
    title: 'AI Chatbot Assistant',
    description:
      'An AI-powered chatbot leveraging natural language processing to provide intelligent responses and assist with everyday tasks.',
    tags: ['Python', 'AI', 'NLP', 'Machine Learning'],
    color: 'from-purple-500 to-pink-500',
    icon: '🤖',
  },
  {
    title: 'Digital Productivity Dashboard',
    description:
      'A web-based productivity tool that helps manage tasks, set goals, and track progress with an intuitive user interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    color: 'from-green-500 to-emerald-500',
    icon: '📊',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="My Recent Work"
          title="Projects"
          description="Here are some of the projects I've been working on"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden glow-hover hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Gradient header strip */}
              <div
                className={`h-2 bg-gradient-to-r ${project.color}`}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon & title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)] leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-surface-200/60 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-surface-200/70 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-surface-200/60 hover:text-primary-400 transition-colors"
                  >
                    <Code2 size={16} />
                    Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-surface-200/60 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-surface-200/40">
            <Folder size={16} />
            More projects coming soon — stay tuned!
          </div>
        </div>
      </div>
    </section>
  );
}
