import { Trophy, Star, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';

const achievements = [
  {
    icon: <Trophy size={28} />,
    title: 'Tech Enthusiast',
    description:
      'Consistently exploring cutting-edge technologies and staying updated with the latest trends in AI, web development, and digital productivity.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: <Star size={28} />,
    title: 'Active Project Builder',
    description:
      'Built multiple practical projects applying skills in HTML, CSS, JavaScript, Python, and AI — focusing on real-world problem solving.',
    color: 'from-primary-500 to-cyan-500',
  },
  {
    icon: <Award size={28} />,
    title: 'Continuous Learner',
    description:
      'Committed to self-improvement through online courses, hands-on practice, and community engagement in the tech ecosystem.',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What I've Accomplished"
          title="Achievements"
          description="Milestones and recognition along my journey"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className="group glass rounded-2xl p-8 text-center glow-hover hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon circle */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} mx-auto mb-6 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-surface-200/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
