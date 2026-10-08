import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="My Academic Journey"
          title="Education"
          description="Building a strong foundation in Computer Science & Engineering"
        />

        <div className="mt-16 max-w-3xl mx-auto">
          {/* Timeline connector */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent hidden sm:block" />

            {/* Education Card */}
            <div className="relative sm:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-5 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ring-4 ring-surface-950 hidden sm:flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              <div className="glass rounded-2xl p-6 sm:p-8 glow-hover group hover:border-primary-500/30 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                        <GraduationCap className="text-primary-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                          Bachelor of Technology (B.Tech)
                        </h3>
                        <p className="text-primary-400 font-medium">
                          JECRC University, Jaipur
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-400 text-sm font-medium shrink-0">
                    <Calendar size={14} />
                    Currently Pursuing
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <p className="text-surface-200/60 leading-relaxed">
                    Pursuing a comprehensive degree in engineering with a focus on modern
                    technologies. Developing both theoretical knowledge and hands-on practical
                    skills through coursework and personal projects.
                  </p>

                  {/* Learning Areas */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-primary-400" />
                      Relevant Learning Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures & Algorithms',
                        'Artificial Intelligence',
                        'Web Development',
                        'Python Programming',
                        'Database Management',
                        'Computer Networks',
                        'Object-Oriented Programming',
                        'Digital Productivity',
                      ].map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1.5 rounded-lg bg-white/5 text-surface-200/70 text-xs sm:text-sm border border-white/5 hover:border-primary-500/30 hover:text-primary-400 transition-all duration-300"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex items-center gap-2 pt-2">
                    <Award size={16} className="text-accent-400" />
                    <span className="text-sm text-surface-200/60">
                      Active learner — consistently exploring new technologies & building projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
