import { User, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const highlights = [
  {
    icon: <GraduationCap size={22} />,
    title: 'B.Tech Student',
    desc: 'Currently pursuing my degree at JECRC University',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'AI Enthusiast',
    desc: 'Passionate about Artificial Intelligence & its applications',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Jaipur, Rajasthan',
    desc: 'Based in the Pink City of India',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Get To Know Me"
          title="About Me"
          description="A little bit about who I am and what drives me"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mt-16">
          {/* Left – avatar / illustration area */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative ring */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-primary-600/20 to-accent-600/20 p-[2px]">
                <div className="w-full h-full rounded-3xl bg-surface-900 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mx-auto mb-4 flex items-center justify-center">
                      <User size={48} className="text-white" />
                    </div>
                    <p className="text-lg font-semibold text-white font-[family-name:var(--font-heading)]">
                      Om Singhal
                    </p>
                    <p className="text-sm text-surface-200/50 mt-1">
                      B.Tech Student
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating accent dot */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 animate-pulse-glow" />
            </div>
          </div>

          {/* Right – text content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
              Hello! I'm <span className="text-white font-semibold">Om Singhal</span>, a
              B.Tech student at <span className="text-primary-400">JECRC University, Jaipur</span>.
              I am deeply interested in technology, artificial intelligence, web development,
              and digital productivity.
            </p>
            <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
              I love exploring how technology can solve real-world problems and make everyday life
              more efficient. I'm constantly learning modern frameworks, tools, and methodologies
              to sharpen my skills and build practical, impactful projects.
            </p>
            <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
              When I'm not coding, you'll find me reading about the latest in AI research,
              experimenting with new dev tools, or brainstorming ideas that merge creativity
              with technology.
            </p>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="glass rounded-xl p-4 hover:border-primary-500/30 transition-all duration-300 glow-hover"
                >
                  <div className="text-primary-400 mb-2">{h.icon}</div>
                  <h4 className="text-sm font-semibold text-white">{h.title}</h4>
                  <p className="text-xs text-surface-200/50 mt-1">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
