import React, { useState, useEffect } from 'react';
import {
  Menu, X, Sparkles, Code2, GraduationCap, Briefcase, Award,
  Mail, ExternalLink, Github, Linkedin, ArrowRight, ChevronRight,
  Brain, Bot, Compass, Terminal, Cpu, Lightbulb, UserCheck, Send, CheckCircle2
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const skillsData = [
    { name: 'HTML5', category: 'Frontend', level: 'Advanced', icon: Code2, desc: 'Semantic markup, SEO optimization, and web accessibility standards' },
    { name: 'CSS3', category: 'Styling', level: 'Advanced', icon: Sparkles, desc: 'Modern responsive layouts, Flexbox, Grid, keyframe animations, Tailwind' },
    { name: 'JavaScript', category: 'Programming', level: 'Proficient', icon: Terminal, desc: 'ES6+, asynchronous patterns, DOM manipulation, functional paradigms' },
    { name: 'Python', category: 'Programming', level: 'Proficient', icon: Cpu, desc: 'Data structures, algorithm development, scripting, and automation' },
    { name: 'Artificial Intelligence', category: 'AI & Data', level: 'Intermediate', icon: Brain, desc: 'Fundamental concepts, machine learning workflows, and neural intuition' },
    { name: 'Generative AI', category: 'AI & Data', level: 'Intermediate', icon: Bot, desc: 'Prompt engineering, LLM integration, modern AI productivity tooling' },
    { name: 'Web Development', category: 'Engineering', level: 'Proficient', icon: Compass, desc: 'Full-stack fundamentals, modern component architectures, client-server models' },
    { name: 'Digital Productivity', category: 'Workflows', level: 'Advanced', icon: Lightbulb, desc: 'Workflow automation, digital organization, developer tooling ecosystems' },
  ];

  const projectsData = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, high-performance portfolio crafted with React, Vite, and Tailwind CSS. Features glassmorphism effects, responsive mobile navigation, and dynamic UI layouts.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
      link: '#',
      featured: true
    },
    {
      title: 'AI Website Project',
      description: 'An interactive web application integrating cutting-edge artificial intelligence and generative APIs to provide intelligent recommendations and seamless user interactions.',
      tags: ['Python', 'Generative AI', 'JavaScript', 'REST API'],
      link: '#',
      featured: true
    },
    {
      title: 'Student Productivity Project',
      description: 'A purpose-built digital productivity dashboard helping university students manage study sprints, track milestones, and streamline daily academic goals.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Productivity'],
      link: '#',
      featured: true
    }
  ];

  const achievementsCategories = [
    {
      category: 'Certifications',
      description: 'Recognized industry certifications and verified learning tracks.',
      badge: 'Verified',
      items: ['Python for Problem Solving Foundation', 'Web Development Specialist Track', 'Generative AI & LLM Exploration']
    },
    {
      category: 'Hackathons',
      description: 'Collaborative code competitions, sprint challenges, and ideathons.',
      badge: 'Active Participant',
      items: ['Campus Innovation Hackathon 2026', 'AI Solutions Prototype Sprint', 'Open Source Contributor Weekend']
    },
    {
      category: 'Courses',
      description: 'Structured university coursework and external technical programs.',
      badge: 'Completed & Ongoing',
      items: ['Core Computing & Algorithms Foundations', 'Front-End UI Architecture', 'Data Structures in Python']
    },
    {
      category: 'Awards & Honors',
      description: 'Academic honors, community commendations, and project recognitions.',
      badge: 'Honors',
      items: ['Freshman Academic Excellence Recognition', 'Best Innovative Student Concept Pitch', 'Active Tech Community Member']
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Background Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                OS
              </div>
              <span className="font-bold tracking-tight text-lg text-white group-hover:text-cyan-400 transition-colors">
                OM SINGHAL
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? 'text-cyan-400 bg-slate-900 border border-slate-700/60'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-16">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center py-16 sm:py-24">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/60 text-xs font-medium text-cyan-400 mb-8 animate-fade-in-up shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for collaborations & internships</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                Om Singhal
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 mb-6">
              B.Tech Student <span className="text-indigo-400">|</span> AI & Technology Enthusiast
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Passionate about the convergence of artificial intelligence, intuitive web applications, and digital productivity workflows. Currently building and learning at JECRC University, Jaipur.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={18} className="text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Key Stats / Tags */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-800/60 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-2xl font-bold text-indigo-400">1st Year</div>
                <div className="text-xs text-slate-400 mt-1">B.Tech Student</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-2xl font-bold text-cyan-400">JECRC</div>
                <div className="text-xs text-slate-400 mt-1">University, Jaipur</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-2xl font-bold text-indigo-400">8+</div>
                <div className="text-xs text-slate-400 mt-1">Core Tech Skills</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-2xl font-bold text-cyan-400">AI & Web</div>
                <div className="text-xs text-slate-400 mt-1">Primary Focus</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">About Me</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Driving Innovation Through Code</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Profile Card / Bio Column */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-56 h-56 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 shadow-xl shadow-indigo-500/10">
                  <div className="w-full h-full bg-slate-950 rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-3xl font-bold text-white mb-3 shadow-inner">
                      OS
                    </div>
                    <div className="font-bold text-lg text-white">Om Singhal</div>
                    <div className="text-xs text-cyan-400 font-medium">Jaipur, India</div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">Developer</span>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">AI Enthusiast</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="md:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I am a passionate <span className="text-white font-semibold">B.Tech student</span> at JECRC University, immersed in exploring the fast-evolving landscape of modern computing, artificial intelligence, and software craftsmanship.
                </p>
                <p>
                  My driving philosophy is to bridge theoretical knowledge with hands-on development. From crafting responsive web interfaces to experimenting with state-of-the-art Generative AI models and streamlining digital productivity pipelines, I relish transforming complex concepts into clean, accessible digital products.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Brain className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">AI Exploration</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Prompt engineering, LLMs & smart web tooling.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Code2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">Modern Web</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Component architectures & responsive design.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Academic Journey</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Education & Foundations</h3>
            </div>

            <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
              {/* Degree Card */}
              <div className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        1st Year Undergraduate
                      </span>
                      <h4 className="text-2xl font-bold text-white mt-2">Bachelor of Technology (B.Tech)</h4>
                    </div>
                    <div className="text-sm font-medium text-cyan-400 flex items-center gap-1.5">
                      <GraduationCap size={18} />
                      <span>JECRC University, Jaipur</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Pursuing core undergraduate engineering studies with an emphasis on computer systems, programming fundamentals, mathematical logic, and emerging software paradigms.
                  </p>

                  <h5 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                    Relevant Learning Areas & Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Computer Science Fundamentals',
                      'Object-Oriented Programming',
                      'Data Structures & Algorithms Basics',
                      'Web Development Technologies',
                      'Discrete Mathematics',
                      'Artificial Intelligence Principles',
                      'Database Systems Exploration'
                    ].map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Technical Competencies</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Skills & Toolkit</h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
                A structured overview of the programming languages, web standards, and modern digital tools I work with.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-200">
                          <IconComponent size={24} />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                          {skill.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Proficiency</span>
                      <span className="text-xs font-semibold text-indigo-400">{skill.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Featured Work</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Selected Projects</h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
                Practical engineering applications, responsive web interfaces, and intelligent software experiments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div
                  key={project.title}
                  className="rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  {/* Decorative Project Header */}
                  <div className="h-44 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-6 flex flex-col justify-between border-b border-slate-800/80 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">0{index + 1} / Project</span>
                      <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                        <Code2 size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 border border-slate-700 hover:border-transparent transition-all duration-200 group-hover:shadow-md"
                      >
                        <span>View Project</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Milestones & Growth</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Achievements & Activities</h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
                Extracurricular initiatives, competitive learning sprints, and recognized achievements. Easily extendable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievementsCategories.map((ach) => (
                <div
                  key={ach.category}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex flex-col justify-between transition-all duration-200 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Award size={20} />
                      </div>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                        {ach.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">{ach.category}</h4>
                    <p className="text-xs text-slate-400 mb-5 leading-relaxed">{ach.description}</p>

                    <ul className="space-y-2.5">
                      {ach.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 italic">
                    Ready to add more records
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Connect</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Let's Build Something Together</h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
                Have an inquiry, project idea, or internship opportunity? Drop a message or reach out across channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Contact Information & Socials */}
              <div className="md:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
                  <h4 className="font-bold text-white text-lg">Contact Information</h4>
                  <p className="text-sm text-slate-400">
                    Always excited to discuss student tech programs, open-source ideas, or software opportunities.
                  </p>

                  <div className="space-y-3 pt-2">
                    <a
                      href="mailto:osinghal623@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-cyan-400 transition-colors group"
                    >
                      <Mail size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium truncate">osinghal623@gmail.com</span>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-indigo-400 transition-colors group"
                    >
                      <Linkedin size={18} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">LinkedIn Profile</span>
                      <ExternalLink size={14} className="ml-auto opacity-60" />
                    </a>

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-white transition-colors group"
                    >
                      <Github size={18} className="text-slate-300 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">GitHub Repository</span>
                      <ExternalLink size={14} className="ml-auto opacity-60" />
                    </a>
                  </div>

                  <div className="pt-2 text-xs text-slate-500">
                    Location: <span className="text-slate-300">Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>

              {/* Interactive Message Form */}
              <div className="md:col-span-7">
                <form
                  onSubmit={handleContactSubmit}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-5"
                >
                  <h4 className="font-bold text-white text-lg mb-2">Send a Direct Message</h4>

                  {contactSubmitted && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-2">
                      <CheckCircle2 size={18} />
                      <span>Thank you! Your message has been simulated successfully.</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or collaboration proposal..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200 text-sm"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-[10px]">
              OS
            </div>
            <span className="font-semibold text-slate-300">Om Singhal &copy; {new Date().getFullYear()}</span>
          </div>
          <p className="text-slate-400">
            Crafted for performance with React, Vite & Tailwind CSS. Ready for Vercel deployment.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:osinghal623@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
