import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin, School, Sparkles, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending with modern UX feedback
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      
      // Also construct mailto url as fallback
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      // After a brief moment, offer mail client opening
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 600);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have an internship opportunity, project idea, or just want to discuss AI and technology, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Direct Email
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg sm:text-xl font-bold font-display text-white hover:text-cyan-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Fastest way to reach me for opportunities and collaborations.
              </p>
            </div>

            {/* Social Cards: LinkedIn & GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Professional network & connections
                </p>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Repositories, commits & code
                </p>
              </a>
            </div>

            {/* Campus & Location Info */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-white">Jaipur, Rajasthan, India</p>
                <p className="text-slate-400">JECRC University Campus</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 shadow-xl backdrop-blur-sm relative">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Thank you, {formData.name || 'there'}!
                  </h4>
                  <p className="text-sm text-slate-300 mb-4 max-w-sm mx-auto">
                    Your message draft is prepared. A mail window will launch to send it directly to <span className="text-cyan-400 font-medium">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Inquiry / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Om, I came across your portfolio and would love to connect regarding..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
