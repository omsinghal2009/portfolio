import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight"
            >
              <span className="gradient-text">OM</span>
              <span className="text-surface-200 ml-1">.</span>
            </a>
            <p className="text-sm text-surface-200/40 mt-2">
              Building the future, one project at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-surface-200/50">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-surface-200/50 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-surface-200/30 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Om Singhal. Made with
            <Heart size={12} className="text-red-500" fill="currentColor" />
            in Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
}
