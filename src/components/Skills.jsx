import SectionHeading from './SectionHeading';

const skills = [
  {
    name: 'HTML',
    level: 90,
    color: 'from-orange-500 to-red-500',
    icon: '🌐',
    description: 'Semantic markup & accessibility',
  },
  {
    name: 'CSS',
    level: 85,
    color: 'from-blue-500 to-cyan-500',
    icon: '🎨',
    description: 'Responsive design & animations',
  },
  {
    name: 'JavaScript',
    level: 75,
    color: 'from-yellow-500 to-amber-500',
    icon: '⚡',
    description: 'ES6+, DOM & async programming',
  },
  {
    name: 'Python',
    level: 80,
    color: 'from-green-500 to-emerald-500',
    icon: '🐍',
    description: 'Scripting, automation & data',
  },
  {
    name: 'Artificial Intelligence',
    level: 70,
    color: 'from-purple-500 to-pink-500',
    icon: '🤖',
    description: 'ML concepts & AI applications',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What I Work With"
          title="My Skills"
          description="Technologies and tools I've been learning and working with"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group glass rounded-2xl p-6 glow-hover hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon & name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-surface-200/50">{skill.description}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-surface-200/50">Proficiency</span>
                  <span className="text-white font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* "Always Learning" card */}
          <div className="group glass rounded-2xl p-6 glow-hover hover:border-accent-500/30 transition-all duration-500 hover:-translate-y-1 flex flex-col items-center justify-center text-center border-dashed border-surface-200/10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-500/20 flex items-center justify-center text-2xl mb-4">
              📚
            </div>
            <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)] mb-1">
              Always Learning
            </h3>
            <p className="text-xs text-surface-200/50">
              Exploring React, Node.js, Machine Learning & more every day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
