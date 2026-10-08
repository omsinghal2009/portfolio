import { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Link,
  Code2,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'osinghal693@gmail.com',
    href: 'mailto:osinghal693@gmail.com',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Jaipur, Rajasthan, India',
    href: null,
  },
];

const socials = [
  {
    icon: <Link size={20} />,
    label: 'LinkedIn',
    href: '#',
    color: 'hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/30',
  },
  {
    icon: <Code2 size={20} />,
    label: 'GitHub',
    href: '#',
    color: 'hover:bg-white/10 hover:text-white hover:border-white/20',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:osinghal693@gmail.com',
    color:
      'hover:bg-red-600/20 hover:text-red-400 hover:border-red-500/30',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link as a simple approach
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.open(
      `mailto:osinghal693@gmail.com?subject=${subject}&body=${body}`,
      '_self',
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Me"
          description="Have a question or want to work together? Feel free to reach out!"
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Left – Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-surface-200/40 uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-primary-400 transition-colors text-sm font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-sm text-surface-200/50 mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-surface-200/60 transition-all duration-300 ${s.color}`}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-surface-200/50 uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-surface-200/30 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all text-sm"
                    placeholder="Om Singhal"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-surface-200/50 uppercase tracking-wider mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-surface-200/30 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all text-sm"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-surface-200/50 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-surface-200/30 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all text-sm resize-none"
                  placeholder="Hey Om, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? (
                  'Opening mail client…'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
