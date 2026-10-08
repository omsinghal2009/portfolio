import { ArrowDown, Eye, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-600/20 rounded-full blur-[128px] animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-400 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-6 animate-slide-up">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Om Singhal</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-surface-200/70 font-medium mb-4 animate-slide-up delay-200 opacity-0">
          B.Tech Student | AI & Technology Enthusiast
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-surface-200/50 max-w-2xl mx-auto mb-10 animate-slide-up delay-300 opacity-0">
          Passionate about building innovative solutions with modern technologies.
          Exploring the intersections of Artificial Intelligence, Web Development,
          and Digital Productivity.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400 opacity-0">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-base hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            <Eye size={20} />
            View Projects
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-surface-200/20 text-surface-200 font-semibold text-base hover:bg-white/5 hover:border-surface-200/40 transition-all duration-300 hover:-translate-y-1"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in delay-600 opacity-0">
          {[
            { value: '5+', label: 'Skills' },
            { value: '3+', label: 'Projects' },
            { value: '2+', label: 'Achievements' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-surface-200/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-surface-200/30 hover:text-primary-400 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
