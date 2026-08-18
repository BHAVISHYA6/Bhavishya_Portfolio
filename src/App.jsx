import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Linkedin, Github, Download, Award, Code, Database,
  Monitor, Star, Briefcase, Trophy, Layers, Terminal, Code2, ArrowUpRight,
  ArrowRight, Moon, Sun
} from 'lucide-react';

const ModuleTag = ({ index, label }) => (
  <span className="module-tag">{`0${index} — ${label}`}</span>
);

const useReveal = () => {
  const [visible, setVisible] = useState({});
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    if (!('IntersectionObserver' in window)) {
      setVisible(
        Array.from(sections).reduce((acc, section) => ({ ...acc, [section.id]: true }), {})
      );
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.12 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return visible;
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';

  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // Storage can be unavailable in private browsing; system preference still works.
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Portfolio = () => {
  const visible = useReveal();
  const [clock, setClock] = useState(new Date());
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The theme remains active for this session when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const timeString = clock.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata'
  });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const skillGroups = [
    { flag: '--lang', title: 'Languages', icon: Code, items: ['C', 'C++', 'Java', 'JavaScript'] },
    { flag: '--frontend', title: 'Frontend', icon: Monitor, items: ['React.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'EJS'] },
    { flag: '--backend', title: 'Backend', icon: Terminal, items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT Auth'] },
    { flag: '--data', title: 'Databases', icon: Database, items: ['MongoDB', 'SQL', 'Mongoose'] },
    { flag: '--core', title: 'Core CS', icon: Layers, items: ['DSA', 'Operating Systems', 'DBMS', 'OOP (Java)', 'Networks', 'Architecture'] }
  ];

  const tools = ['Git', 'GitHub', 'Postman', 'VS Code', 'Ubuntu/Linux', 'npm'];

  const projects = [
    {
      title: 'MediTalk',
      description: 'A full-stack telemedicine platform supporting appointment booking, real-time messaging, and video consultations through Jitsi integration.',
      tech: ['React', 'Vite', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Jitsi', 'JWT'],
      features: ['Role-based access for patients, doctors & admins', 'Doctor verification workflows', 'Automated PDF receipts', 'Real-time video consultations'],
      status: 'shipped',
      href: 'https://github.com/BHAVISHYA6/MediTalk'
    },
    {
      title: 'Service Sphere',
      description: 'A scalable backend platform for discovering, booking, and managing household and professional services end to end.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      features: ['5+ modular subsystems', 'Booking & status tracking', 'Feedback system', 'Document verification'],
      status: 'shipped',
      href: 'https://github.com/jah-navii/ServiceSphere-FSD'
    },
    {
      title: 'ConnectChat',
      description: 'A real-time chat application with user authentication and a scalable backend for instant messaging.',
      tech: ['React', 'React Router', 'Material-UI', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
      features: ['Real-time messaging', 'Authentication', 'Socket-based communication', 'Scalable backend'],
      status: 'shipped',
      href: 'https://github.com/BHAVISHYA6/ConnectChat.git'
    },
    {
      title: 'QuikCart',
      description: 'A full-stack online shopping application with product listings, cart management, and checkout.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: ['Product listings', 'Cart management', 'Checkout system', 'User-friendly UI'],
      status: 'shipped',
      href: 'https://github.com/BHAVISHYA6/QuikCart.git'
    },
    {
      title: 'Crime Detection Dataset',
      description: 'Organized crime-related datasets for detection systems, with real-time data integration and feature engineering for improved model accuracy.',
      tech: ['Python', 'Data Processing', 'Feature Engineering'],
      features: ['Data cleaning', 'Feature selection', 'Real-time pipelines'],
      status: 'published',
      href: 'https://authors.elsevier.com/a/1ldbT_LfeK7fbw'
    }
  ];

  const education = [
    { degree: 'B.Tech in Computer Science', school: 'IIIT Sri City', period: 'Expected 2027 · Final Year', metric: 'CGPA 8.62' },
    { degree: 'Intermediate (MPC)', school: 'Narayana Junior College, Tirupati', period: '2021 – 2023', metric: '98.5%' },
    { degree: 'Schooling', school: 'Sri Chaitanya Techno School, Puttur', period: 'Completed 2021', metric: 'CGPA 10/10' }
  ];

  const experience = {
    role: 'Software Development Intern',
    org: 'Vayumitra',
    period: 'May 2026 — Present',
    log: [
      'Designed data validation schemas and automated quality-check pipelines for a MERN-based Wind Data Analytics Platform, cutting manual validation effort by 40%.',
      'Built and tested REST API endpoints for data storage and analytics workflows, collaborating cross-functionally with Git/GitHub in an agile team.'
    ]
  };

  const leadership = [
    {
      role: 'Event Management Lead',
      org: 'ABHISARGA 2026',
      period: '2026',
      points: [
        'Coordinated execution for a 3-day annual fest across multiple teams.',
        'Managed logistics, scheduling, and real-time issue handling across all domains.'
      ]
    },
    {
      role: 'Member, Student Development Council',
      org: 'IIIT Sri City',
      period: '2024 – 2025',
      points: [
        'Coordinated activities across 8 technical and 7 non-technical clubs.',
        'Supported ABHISARGA 2025 and UTKRISTA, handling logistics and participants.'
      ]
    },
    {
      role: 'Member, Marketing Team',
      org: 'Web3ssh',
      period: '2025',
      points: [
        'Executed outreach across 15+ colleges, lifting student participation 20%.',
        'Promoted blockchain technologies through campaigns and community outreach.'
      ]
    }
  ];

  const achievements = [
    { label: 'JEE Advanced', detail: 'All-India rank ~10,000', icon: Trophy },
    { label: 'NTSE Examination', detail: 'Qualified Level 1', icon: Award },
    { label: 'Infosys Springboard', detail: 'Web Development certification', icon: Star }
  ];

  const nav = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'C_Bhavishya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      {/* Status bar — the page's signature: it treats the portfolio like a
          running service, not a brochure. */}
      <div className="status-bar fixed top-0 w-full z-50 bg-[var(--ink)] text-[var(--white)] border-b border-[var(--line-dark)]">
        <div className="max-w-6xl mx-auto px-6 h-10 flex items-center justify-between font-mono text-[11px] tracking-wide">
          <div className="flex items-center gap-2">
            <span className="status-dot" />
            <span className="text-[var(--white-90)]">OPEN TO WORK — SDE / BACKEND</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[var(--white-50)]">
            <span>IST {timeString}</span>
            <span>TIRUPATI, IN</span>
          </div>
        </div>
      </div>

      <nav className="fixed top-10 w-full z-50 bg-[var(--paper-70)] backdrop-blur-md border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo('about')} className="font-mono text-sm font-medium tracking-tight" aria-label="Go to top">
            c_bhavishya<span className="text-[var(--signal)]">.</span>dev
          </button>
          <div className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-mono text-xs uppercase tracking-widest text-[var(--ink-70)] hover:text-[var(--wire)] transition-colors"
              >
                {n.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'dark'}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
            </button>
            <button
              onClick={downloadResume}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-widest border border-[var(--ink)] px-2.5 sm:px-3 py-1.5 hover:bg-[var(--ink)] hover:text-[var(--white)] transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-28">
        {/* ---------- HERO ---------- */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
          <div className={`grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 ${visible.about ? 'animate-in' : 'opacity-0'}`}>
            <div>
              <ModuleTag index={1} label="Overview" />
              <h1 className="text-[2.6rem] sm:text-6xl font-extrabold leading-[1.03] mb-6">
                C. Bhavishya builds<br />
                systems that <span className="text-[var(--wire)]">hold up</span><br />
                under load.
              </h1>
              <p className="text-base sm:text-lg text-[var(--ink-70)] max-w-xl mb-8 leading-relaxed">
                Final-year Computer Science student at IIIT Sri City and Software
                Development Intern at Vayumitra, working across the MERN stack —
                from data validation pipelines to real-time systems and role-based
                platform architecture.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  onClick={() => scrollTo('projects')}
                  className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--white)] px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[var(--wire)] transition-colors"
                >
                  View Projects <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 border border-[var(--ink)] px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[var(--ink)] hover:text-[var(--white)] transition-colors"
                >
                  Get in Touch
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--ink-55)]">
                <a href="https://github.com/BHAVISHYA6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--wire)]"><Github size={14} /> github</a>
                <a href="https://www.linkedin.com/in/bhavishya-c-2b6b14328/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--wire)]"><Linkedin size={14} /> linkedin</a>
                <a href="https://leetcode.com/u/BHAVI765/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--wire)]"><Code2 size={14} /> leetcode</a>
              </div>
            </div>

            {/* Stat panel — reads like a monitoring widget for a person */}
            <div className="panel-dark blueprint-dark text-[var(--white)] p-6 h-fit">
              <div className="flex items-center justify-between font-mono text-[11px] text-[var(--white-50)] mb-6 border-b border-[var(--line-dark)] pb-4">
                <span>profile.status</span>
                <span className="flex items-center gap-1.5"><span className="status-dot" />live</span>
              </div>
              <div className="grid grid-cols-2 gap-5 mb-6">
                <div>
                  <p className="font-mono text-2xl font-semibold">8.62</p>
                  <p className="font-mono text-[11px] text-[var(--white-50)] uppercase tracking-wide">CGPA / 10</p>
                </div>
                {/* <div>
                  <p className="font-mono text-2xl font-semibold">5</p>
                  <p className="font-mono text-[11px] text-[var(--white-50)] uppercase tracking-wide">Projects shipped</p>
                </div> */}
                {/* <div>
                  <p className="font-mono text-2xl font-semibold">40%</p>
                  <p className="font-mono text-[11px] text-[var(--white-50)] uppercase tracking-wide">Validation effort cut</p>
                </div> */}
                <div>
                  <p className="font-mono text-2xl font-semibold">2027</p>
                  <p className="font-mono text-[11px] text-[var(--white-50)] uppercase tracking-wide">Graduating</p>
                </div>
              </div>
              <div className="border-t border-[var(--line-dark)] pt-4 space-y-2 font-mono text-xs text-[var(--white-70)]">
                <div className="flex items-center gap-2"><Mail size={13} className="text-[var(--signal)]" /> bhavishya.c23@iiits.in</div>
                <div className="flex items-center gap-2"><Phone size={13} className="text-[var(--signal)]" /> +91 6301801739</div>
                <div className="flex items-center gap-2"><MapPin size={13} className="text-[var(--signal)]" /> Tirupati, Andhra Pradesh</div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- EDUCATION ---------- */}
        <section id="education" className="border-y border-[var(--line)] blueprint">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className={visible.education ? 'animate-in' : 'opacity-0'}>
              <ModuleTag index={2} label="Education" />
              <h2 className="text-3xl font-bold mb-10">Academic record</h2>
              <div className="rail max-w-3xl">
                {education.map((e, idx) => (
                  <div key={idx} className="rail-node pb-10 last:pb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-bold">{e.degree}</h3>
                      <span className="font-mono text-xs px-2 py-1 border border-[var(--wire)] text-[var(--wire)]">{e.metric}</span>
                    </div>
                    <p className="text-[var(--ink-70)]">{e.school}</p>
                    <p className="font-mono text-xs text-[var(--ink-55)] mt-1">{e.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- STACK ---------- */}
        <section id="stack" className="max-w-6xl mx-auto px-6 py-16">
          <div className={visible.stack ? 'animate-in' : 'opacity-0'}>
            <ModuleTag index={3} label="Stack" />
            <h2 className="text-3xl font-bold mb-10">Working set</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillGroups.map(({ flag, title, icon: Icon, items }) => (
                <div key={flag} className="panel hover-lift p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-[var(--wire)]" />
                      <h3 className="font-bold text-sm">{title}</h3>
                    </div>
                    <span className="font-mono text-[10px] text-[var(--ink-40)]">{flag}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="font-mono text-[11px] bg-[var(--paper-deep)] text-[var(--ink-70)] px-2 py-1 rounded-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="panel hover-lift p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-[var(--wire)]" />
                    <h3 className="font-bold text-sm">Tooling</h3>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--ink-40)]">--env</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool) => (
                    <span key={tool} className="font-mono text-[11px] bg-[var(--paper-deep)] text-[var(--ink-70)] px-2 py-1 rounded-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section id="projects" className="border-y border-[var(--line)] bg-[var(--paper-deep)]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className={visible.projects ? 'animate-in' : 'opacity-0'}>
              <ModuleTag index={4} label="Projects" />
              <h2 className="text-3xl font-bold mb-10">Selected builds</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {projects.map((p) => (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel hover-lift p-6 flex flex-col group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold">{p.title}</h3>
                      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--wire)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--wire)]" />
                        {p.status}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--ink-70)] mb-4 leading-relaxed">{p.description}</p>
                    <ul className="space-y-1.5 mb-4">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start text-xs text-[var(--ink-70)]">
                          <span className="w-1 h-1 mt-1.5 mr-2 bg-[var(--signal)] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                      {p.tech.map((t) => (
                        <span key={t} className="font-mono text-[10px] border border-[var(--line)] text-[var(--ink-55)] px-1.5 py-0.5">{t}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[var(--ink)] group-hover:text-[var(--wire)] transition-colors">
                      View source <ArrowUpRight size={13} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- EXPERIENCE ---------- */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
          <div className={visible.experience ? 'animate-in' : 'opacity-0'}>
            <ModuleTag index={5} label="Experience" />
            <h2 className="text-3xl font-bold mb-10">Build log</h2>
            <div className="panel-dark text-[var(--white)] p-7 max-w-3xl">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5 pb-5 border-b border-[var(--line-dark)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[var(--white-08)] flex items-center justify-center">
                    <Briefcase size={18} className="text-[var(--signal)]" />
                  </div>
                  <div>
                    <h3 className="font-bold">{experience.role}</h3>
                    <p className="font-mono text-xs text-[var(--white-70)]">{experience.org}</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[var(--white-50)]">{experience.period}</span>
              </div>
              <div className="space-y-4">
                {experience.log.map((line, idx) => (
                  <div key={idx} className="flex gap-3 font-mono text-xs text-[var(--white-70)] leading-relaxed">
                    <span className="text-[var(--signal)]">$</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- LEADERSHIP ---------- */}
        <section className="border-y border-[var(--line)] bg-[var(--paper-deep)]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <ModuleTag index={6} label="Leadership" />
            <h2 className="text-3xl font-bold mb-10">Beyond the stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {leadership.map((item) => (
                <div key={item.role} className="panel hover-lift p-5">
                  <h3 className="font-bold text-sm mb-1">{item.role}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[var(--wire)] font-medium">{item.org}</span>
                    <span className="font-mono text-[10px] text-[var(--ink-40)]">{item.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.points.map((p) => (
                      <li key={p} className="text-xs text-[var(--ink-70)] leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- ACHIEVEMENTS ---------- */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <ModuleTag index={7} label="Achievements" />
          <h2 className="text-3xl font-bold mb-10">Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {achievements.map(({ label, detail, icon: Icon }) => (
              <div key={label} className="panel hover-lift p-5 flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-[var(--signal-15)] flex-shrink-0">
                  <Icon size={18} className="text-[var(--signal)]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{label}</h3>
                  <p className="text-xs text-[var(--ink-70)]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="border-t border-[var(--line-dark)] bg-[var(--ink)] text-[var(--white)]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <ModuleTag index={8} label="Contact" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 max-w-xl">
              Open to SDE and backend engineering roles.
            </h2>
            <p className="text-[var(--white-70)] max-w-lg mb-10">
              Reach out about internships, new-grad roles, or collaboration —
              I usually reply within a day.
            </p>

            <div className="panel-dark blueprint-dark p-6 mb-10 max-w-2xl font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-[var(--white-50)] text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--signal-45)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--white-15)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--white-15)]" />
                <span className="ml-2">contact.sh</span>
              </div>
              <div className="space-y-2 text-[var(--white-90)]">
                <p><span className="text-[var(--signal)]">$</span> email <a href="mailto:bhavishya.c23@iiits.in" className="text-[var(--wire)] hover:underline break-all">bhavishya.c23@iiits.in</a></p>
                <p><span className="text-[var(--signal)]">$</span> phone <span className="text-[var(--white-90)]">+91 6301801739</span></p>
                <p><span className="text-[var(--signal)]">$</span> location <span className="text-[var(--white-90)]">Tirupati, Andhra Pradesh, IN</span></p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:bhavishya.c23@iiits.in" className="inline-flex items-center gap-2 bg-[var(--signal)] text-[var(--ink)] px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[var(--white)] transition-colors">
                <Mail size={14} /> Email Me
              </a>
              <a href="https://www.linkedin.com/in/bhavishya-c-2b6b14328/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--line-dark)] px-5 py-3 font-mono text-xs uppercase tracking-widest hover:border-[var(--white)] transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://github.com/BHAVISHYA6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--line-dark)] px-5 py-3 font-mono text-xs uppercase tracking-widest hover:border-[var(--white)] transition-colors">
                <Github size={14} /> GitHub
              </a>
              <button onClick={downloadResume} className="inline-flex items-center gap-2 border border-[var(--line-dark)] px-5 py-3 font-mono text-xs uppercase tracking-widest hover:border-[var(--white)] transition-colors">
                <Download size={14} /> Resume
              </button>
            </div>
          </div>

          <div className="border-t border-[var(--line-dark)]">
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[var(--white-50)]">
              <span>© 2026 C. Bhavishya — built with React &amp; Tailwind</span>
              <span>status: online</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
