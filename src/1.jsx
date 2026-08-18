import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink, Award, Code, Database, Monitor, Users, Star, User, GraduationCap, Briefcase, Trophy, MessageCircle, FileText, Heart, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const skills = {
    programming: ['C', 'C++', 'Python', 'Java'],
    webDev: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
    databases: ['MySQL', 'MongoDB', 'SQLite'],
    tools: ['VS Code', 'Git & GitHub', 'Ubuntu', 'Matlab', 'Postman', 'npm'],
    soft: ['Time Management', 'Communication', 'Problem Solving', 'Team Leadership']
  };

  const projects = [
    {
      title: 'Service Helper Allocation Platform',
      description: 'A web-based platform connecting service seekers with local helpers using modern web technologies, ensuring seamless user experiences and efficient matching algorithms.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      features: ['User Registration', 'Service Search', 'Dynamic Allocation', 'Real-time Notifications'],
      status: 'In Development',
      github: null
    },{
    title: 'ConnectChat',
    description: 'Developed a real-time chat application enabling instant messaging with user authentication and a scalable backend for seamless communication.',
    tech: ['React', 'React Router', 'Material-UI', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    features: ['Real-time Messaging', 'Authentication', 'Socket-based Communication', 'Scalable Backend'],
    status: 'Completed',
    github: "https://github.com/BHAVISHYA6/ConnectChat.git"
  },
  {
    title: 'QuikCart',
    description: 'Built a full-stack online shopping web application with product listings, cart management, and a streamlined checkout experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: ['Product Listings', 'Cart Management', 'Checkout System', 'User-friendly UI'],
    status: 'Completed',
    github: "https://github.com/BHAVISHYA6/QuikCart.git"
  },
    {
      title: 'Crime Detection Dataset',
      description: 'Organized crime-related datasets for detection systems with real-time data integration and advanced feature engineering for improved model accuracy.',
      tech: ['Python', 'Data Processing Libraries', 'Feature Engineering Tools'],
      features: ['Data Cleaning', 'Feature Selection', 'Real-time Pipelines'],
      status: 'Completed',
      link: 'https://authors.elsevier.com/a/1ldbT_LfeK7fbw'
    }
  ];

  const achievements = [
    { type: 'Secured ~10k Rank', subject: 'JEE Advanced', icon: Trophy },
    { type: 'Qualified 1st Level', subject: 'NTSE Examination', icon: Award }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'C_Bhavishya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'reflections', label: 'Reflections', icon: MessageCircle },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'extracurricular', label: 'Activities', icon: Heart },
    { id: 'resume', label: 'Resume', icon: Download },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffde7] to-[#ffffff]">
      <nav className="fixed top-0 w-full bg-[#ffffff]/95 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="text-2xl font-bold text-[var(--cerulean)]">C Bhavishya</div>
            <div className="flex space-x-1">
              {navItems.slice(0, 5).map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-1 px-2 py-1 rounded-lg text-sm font-medium text-[var(--black)] hover:text-[var(--cerulean)] hover:bg-[var(--beige)] transition-all duration-200"
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <section id="personal" className="py-16 bg-gradient-to-r from-[var(--cerulean)] to-[var(--muted-teal)]">
          <div className="max-w-4xl mx-auto px-6 text-center text-[var(--white)]">
            <div className={`animate-hero ${isVisible.personal ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-24 h-24 mx-auto mb-6 bg-[var(--white)] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-4xl font-bold mb-4">C BHAVISHYA</h1>
              <p className="text-lg mb-6">Computer Science Student | Web Developer | Innovator</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 bg-[var(--white)]/10 rounded-lg p-3">
                  <Mail size={16} />
                  <a href="mailto:bhavishya.c23@iiits.in" className="hover:underline">bhavishya.c23@iiits.in</a>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-[var(--white)]/10 rounded-lg p-3">
                  <Phone size={16} />
                  <span>+91 6301801739</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-[var(--white)]/10 rounded-lg p-3">
                  <MapPin size={16} />
                  <span>Tirupati, Andhra Pradesh</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-[var(--white)]/10 rounded-lg p-3">
                  <Linkedin size={16} />
                  <a href="https://www.linkedin.com/in/bhavishya-c-2b6b14328/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/Bhavishya</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reflections" className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.reflections ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black)]">Personal Reflections</h2>
              <div className="section-card p-6 hover-scale">
                <div className="flex items-start mb-4">
                  <MessageCircle className="w-10 h-10 text-[var(--cerulean)] mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-[var(--black)] mb-3">My Journey & Goals</h3>
                    <div className="space-y-3 text-[var(--black)]/80">
                      <p>As a third-year Computer Science student at IIIT Sri City, my passion lies in crafting impactful tech solutions, merging theory with practical applications in web development and data processing.</p>
                      <p>Projects like the Service Helper Allocation Platform and Crime Detection Dataset have sharpened my skills in user-centric design, efficient algorithms, and real-time systems, while emphasizing collaborative problem-solving.</p>
                      <p>Leading event coordination has honed my organizational and communication skills. I'm eager to pursue full-stack development internships to contribute to innovative solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-16 bg-[var(--beige)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black)]">Education</h2>
              <div className="space-y-6">
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-10 h-10 text-[var(--cerulean)]" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--black)] mb-2">B.Tech in Computer Science</h3>
                      <p className="text-lg text-[var(--cerulean)] mb-2">Indian Institute of Information Technology, Sri City</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--black)]/80">Expected 2027</span>
                        <span className="bg-[var(--coral)]/20 text-[var(--coral)] px-3 py-1 rounded-full font-semibold">CGPA: 8.62</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-10 h-10 text-[var(--muted-teal)]" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--black)] mb-2">Intermediate (MPC)</h3>
                      <p className="text-lg text-[var(--muted-teal)] mb-2">Narayana Junior College - Tirupati</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--black)]/80">2021 - 2023</span>
                        <span className="bg-[var(--muted-teal)]/20 text-[var(--muted-teal)] px-3 py-1 rounded-full font-semibold">98.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-start space-x-4">
                    <Star className="w-10 h-10 text-[var(--coral)]" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--black)] mb-2">Schooling</h3>
                      <p className="text-lg text-[var(--coral)] mb-2">Sri Chaitanya Techno School, Puttur, Tirupati</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--black)]/80">Completed 2021</span>
                        <span className="bg-[var(--coral)]/20 text-[var(--coral)] px-3 py-1 rounded-full font-semibold">CGPA: 10/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black)]">Technical Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <Code className="w-8 h-8 text-[var(--cerulean)] mr-3" />
                    <h3 className="text-lg font-bold text-[var(--black)]">Programming</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill, idx) => (
                      <span key={idx} className="bg-[var(--cerulean)]/20 text-[var(--cerulean)] px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <Monitor className="w-8 h-8 text-[var(--muted-teal)] mr-3" />
                    <h3 className="text-lg font-bold text-[var(--black)]">Web Development</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.webDev.map((skill, idx) => (
                      <span key={idx} className="bg-[var(--muted-teal)]/20 text-[var(--muted-teal)] px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <Database className="w-8 h-8 text-[var(--coral)] mr-3" />
                    <h3 className="text-lg font-bold text-[var(--black)]">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, idx) => (
                      <span key={idx} className="bg-[var(--coral)]/20 text-[var(--coral)] px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-[var(--cerulean)] mr-3" />
                    <h3 className="text-lg font-bold text-[var(--black)]">Soft Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, idx) => (
                      <span key={idx} className="bg-[var(--cerulean)]/20 text-[var(--cerulean)] px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 section-card p-6">
                <h3 className="text-lg font-bold text-[var(--black)] mb-4 text-center">Development Tools & Environment</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {skills.tools.map((tool, idx) => (
                    <span key={idx} className="bg-[var(--beige)] text-[var(--black)] px-4 py-2 rounded-lg font-medium hover:bg-[var(--cerulean)]/20 hover:text-[var(--cerulean)] transition-colors duration-200">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 bg-[var(--beige)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black)]">Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <div key={idx} className="section-card p-6 hover-scale">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-[var(--black)]">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Completed' 
                          ? 'bg-[var(--muted-teal)]/20 text-[var(--muted-teal)]' 
                          : 'bg-[var(--coral)]/20 text-[var(--coral)]'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[var(--black)]/80 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-base font-semibold text-[var(--black)] mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[var(--black)]/80">
                            <div className="w-2 h-2 bg-[var(--cerulean)] rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-base font-semibold text-[var(--black)] mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="bg-[var(--cerulean)]/20 text-[var(--cerulean)] px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-[var(--cerulean)] hover:text-[var(--muted-teal)] font-semibold transition-colors duration-200">
                        <Github className="w-5 h-5 mr-2" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    ) : project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-[var(--cerulean)] hover:text-[var(--muted-teal)] font-semibold transition-colors duration-200">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Publication
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

<section id="experience" className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black)]">
        Experience
      </h2>

      <div className="section-card p-6 hover-scale">
        
        <h3 className="text-xl font-bold text-[var(--black)] mb-6 flex items-center">
          <Users className="w-8 h-8 text-[var(--cerulean)] mr-3" />
          Leadership & Experience
        </h3>

        <div className="space-y-6">

          {/* 1️⃣ Abhisarga 2026 */}
          <div className="border-l-4 border-[var(--cerulean)] pl-4">
            <h4 className="text-base font-semibold text-[var(--black)]">
              Event Management Lead – Abhisarga 2026
            </h4>
            <p className="text-[var(--black)]/80">
              Led the planning and execution of Abhisarga 2026, coordinating multiple teams to ensure smooth event operations across all domains.
            </p>
            <p className="text-sm text-[var(--black)]/70">
              Managed logistics, scheduling, team coordination, and real-time issue handling, ensuring successful execution of the institute’s flagship fest.
            </p>
          </div>

          {/* 2️⃣ SDC Member */}
          <div className="border-l-4 border-[var(--muted-teal)] pl-4">
            <h4 className="text-base font-semibold text-[var(--black)]">
              Member – Student Development Council (SDC) 2025
            </h4>
            <p className="text-[var(--black)]/80">
              Contributed to organizing major institute events including ABHISARGA 2025 and UTKRISTA, ensuring smooth coordination across teams.
            </p>
            <p className="text-sm text-[var(--black)]/70">
              Handled logistics, participant management, and event execution, improving overall student engagement and participation.
            </p>
          </div>

          {/* 3️⃣ Club Management */}
          <div className="border-l-4 border-[var(--coral)] pl-4">
            <h4 className="text-base font-semibold text-[var(--black)]">
              Club Management & Coordination
            </h4>
            <p className="text-[var(--black)]/80">
              Oversaw operations of 8 technical and 7 non-technical clubs, ensuring smooth functioning and coordination between teams.
            </p>
            <p className="text-sm text-[var(--black)]/70">
              Organized workshops, events, and collaborative activities to enhance student participation and skill development.
            </p>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>

        <section id="achievements" className="py-16 bg-[var(--beige)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black)]">Achievements & Awards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="section-card p-6 hover-scale">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full ${
                        achievement.type.includes('Secured') 
                          ? 'bg-[var(--coral)]/20 text-[var(--coral)]' 
                          : 'bg-[var(--cerulean)]/20 text-[var(--cerulean)]'
                      }`}>
                        <achievement.icon size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-bold text-[var(--black)]">{achievement.type}</h3>
                        <p className="text-[var(--black)]/80">{achievement.subject}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="extracurricular" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.extracurricular ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black)]">Extracurricular & Volunteering</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <Heart className="w-8 h-8 text-[var(--coral)] mr-3" />
                    <h3 className="text-lg font-bold text-[var(--black)]">Community Engagement</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[var(--coral)] pl-4">
                      <h4 className="text-base font-semibold text-[var(--black)]">Marketing Member - Web3ssh</h4>
                      <p className="text-[var(--black)]/80">Promoted blockchain technologies through social media campaigns and community outreach.</p>
                    </div>
                    <div className="border-l-4 border-[var(--coral)] pl-4">
                      <h4 className="text-base font-semibold text-[var(--black)]">Event Coordination</h4>
                      <p className="text-[var(--black)]/80">Coordinated ABHISARGA 2024 & 2025, UTKRISTA, managing logistics and team collaboration.</p>
                    </div>
                  </div>
                </div>
                <div className="section-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-[var(--muted-teal)] mr-3" />
                    <h3 className="text-lg font-bold text-[var(--black)]">Campus Activities</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[var(--muted-teal)] pl-4">
                      <h4 className="text-base font-semibold text-[var(--black)]">Club Participation</h4>
                      <p className="text-[var(--black)]/80">Active in technical and non-technical clubs, fostering skill development and networking.</p>
                    </div>
                    <div className="border-l-4 border-[var(--muted-teal)] pl-4">
                      <h4 className="text-base font-semibold text-[var(--black)]">Volunteering Initiatives</h4>
                      <p className="text-[var(--black)]/80">Organized workshops and events to enhance campus life and learning environments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="py-16 bg-[var(--beige)]">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.resume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--black)]">Resume</h2>
              <div className="section-card p-6 hover-scale">
                <div className="text-center mb-6">
                  <div className="bg-[var(--cerulean)]/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-[var(--cerulean)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--black)] mb-3">Download Resume</h3>
                  <p className="text-[var(--black)]/80 mb-4">Access a detailed PDF of my resume, covering education, experience, projects, and achievements.</p>
                  <button 
                    onClick={downloadResume}
                    className="bg-[var(--cerulean)] hover:bg-[var(--muted-teal)] text-[var(--white)] px-6 py-3 rounded-lg font-semibold flex items-center mx-auto transition-all duration-200 hover-scale"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </button>
                </div>
                <div className="p-4 bg-[var(--beige)]/50 rounded-lg">
                  <h4 className="text-base font-semibold text-[var(--black)] mb-2">Portfolio Summary</h4>
                  <p className="text-[var(--black)]/80">This portfolio showcases my academic journey, technical skills, projects, and leadership roles. Contact me for project details or collaboration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gradient-to-r from-[var(--cerulean)] to-[var(--muted-teal)]">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--white)]">Get In Touch</h2>
              <div className="section-card p-6 bg-[var(--white)]/10 backdrop-blur-md">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[var(--white)] mb-3">Let's Connect</h3>
                  <p className="text-[var(--white)]/80">I'm excited about new opportunities, collaborations, or discussions on tech and innovation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[var(--white)]/10 rounded-lg p-4 text-center hover:bg-[var(--white)]/20 transition-all duration-200">
                    <Mail className="w-8 h-8 text-[var(--white)] mx-auto mb-2" />
                    <h4 className="text-base font-semibold text-[var(--white)] mb-1">Email</h4>
                    <a href="mailto:bhavishya.c23@iiits.in" className="text-[var(--white)]/80 hover:underline">bhavishya.c23@iiits.in</a>
                  </div>
                  <div className="bg-[var(--white)]/10 rounded-lg p-4 text-center hover:bg-[var(--white)]/20 transition-all duration-200">
                    <Phone className="w-8 h-8 text-[var(--white)] mx-auto mb-2" />
                    <h4 className="text-base font-semibold text-[var(--white)] mb-1">Phone</h4>
                    <p className="text-[var(--white)]/80">+91 6301801739</p>
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/bhavishya-c-2b6b14328/" target="_blank" rel="noopener noreferrer" className="bg-[var(--white)]/20 hover:bg-[var(--white)]/30 text-[var(--white)] p-3 rounded-full transition-all duration-200 hover-scale">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/BHAVISHYA6" target="_blank" rel="noopener noreferrer" className="bg-[var(--white)]/20 hover:bg-[var(--white)]/30 text-[var(--white)] p-3 rounded-full transition-all duration-200 hover-scale">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="mailto:bhavishya.c23@iiits.in" className="bg-[var(--white)]/20 hover:bg-[var(--white)]/30 text-[var(--white)] p-3 rounded-full transition-all duration-200 hover-scale">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[var(--black)] text-[var(--white)] py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">C Bhavishya</h3>
              <p className="text-[var(--white)]/80 mb-4">Computer Science Student | Web Developer | Innovator</p>
              <div className="flex justify-center space-x-4 mb-6">
                {navItems.slice(0, 5).map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-[var(--white)]/80 hover:text-[var(--white)] transition-colors duration-200"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="border-t border-[var(--white)]/20 pt-6">
                <p className="text-[var(--white)]/80">© 2025 C Bhavishya. All rights reserved. | Built with React & Tailwind CSS</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-[var(--white)]/90 backdrop-blur-md rounded-full p-2 shadow-lg border border-[var(--cerulean)]/20">
          {navItems.slice(0, 5).map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block p-2 text-[var(--black)] hover:text-[var(--cerulean)] hover:bg-[var(--beige)] rounded-full transition-all duration-200 mb-1"
              title={id.charAt(0).toUpperCase() + id.slice(1)}
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;