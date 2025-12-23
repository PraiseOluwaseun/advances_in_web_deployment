
import './App.css';
import { motion } from 'framer-motion';
import { 
  Github, 
  Mail, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Gamepad2, 
  Globe, 
  Terminal,
  ArrowRight
} from 'lucide-react';


import profilePic from './assets/profile.jpg'; 


const portfolioData = {
  personal: {
    name: "Praise Oluwatishe Oluwaseun",
    role: "Computer Science Student & Developer",
    email: "tisheoluwaseun@gmail.com",
    bio: "A determined and hardworking student with proficiency in Python and Microsoft packages. I am deeply passionate about creating functional and user-friendly software solutions that address real-world challenges.",
    interests: ["Software Development", "Game Development", "Website Design", "Graphic Design"]
  },
  experience: [
    {
      company: "Monospace Digital Nigeria",
      role: "Intern",
      date: "July 2023 – October 2023",
      description: "Tasked with revamping websites and selecting appropriate template designs to enhance user experience."
    }
  ],
  education: [
    {
      school: "Pan-Atlantic University, Nigeria",
      degree: "Bachelor of Computer Science",
      date: "Oct 2022 – Present",
    },
    {
      school: "Redeemers International Secondary School",
      degree: "Senior Secondary Certificate",
      date: "Sep 2016 – Oct 2021",
    }
  ],
  skills: [
    { name: "Python", level: "5 Years", icon: <Terminal size={20} /> },
    { name: "HTML", level: "6 Years", icon: <Globe size={20} /> },
    { name: "Microsoft Packages", level: "4 Years", icon: <Briefcase size={20} /> },
    { name: "Game Dev", level: "Intermediate", icon: <Gamepad2 size={20} /> },
    { name: "Leadership", level: "6 Years", icon: <Award size={20} /> },
    { name: "Communication", level: "6 Years", icon: <Code2 size={20} /> },
  ],
  projects: [
    {
      title: "Rust Projects",
      link: "https://github.com/PraiseOluwaseun/p.oluwaseunCS101",
      desc: "A collection of systems programming projects built with Rust."
    },
    {
      title: "Python Projects",
      link: "https://github.com/PraiseOluwaseun/p.oluwaseunCSC102",
      desc: "Various scripts and applications demonstrating Python proficiency."
    }
  ],
  awards: [
    "Industry Readiness Programme - Bridgia (2023)",
    "1010 Coding: Game Studio Gigabyte Edition (2022)",
    "2nd Position: SEEDs Scratch Competition (2018)",
    "1st Position: Badminton Competition (3 Years Running)"
  ],
  languages: ["English (Conversational)", "Spanish (Basic)", "French (Basic)"]
};

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- Components ---

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="section-header">
    <h2 className="section-title">{title}</h2>
    <div className="divider"></div>
    <p className="section-subtitle">{subtitle}</p>
  </div>
);

export default function App() {
  return (
    <div className="app">
      
      {/* --- TOP RIGHT CORNER IMAGE --- */}
      <div className="top-corner-img">
        <img src={profilePic} alt="Oluwatishe" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="hero">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container"
        >
          <motion.p variants={fadeInUp} className="hero-label">
            Portfolio
          </motion.p>
          <motion.h1 variants={fadeInUp} className="hero-title">
            {portfolioData.personal.name}
          </motion.h1>
          
          {/* --- HERO CENTER IMAGE (Below Name) --- */}
          <motion.div variants={fadeInUp} className="hero-avatar-container">
            <img src={profilePic} alt="Oluwatishe" className="hero-avatar" />
          </motion.div>

          <motion.p variants={fadeInUp} className="hero-role">
            {portfolioData.personal.role}
          </motion.p>
          <motion.div variants={fadeInUp} className="hero-buttons">
            <a href={`mailto:${portfolioData.personal.email}`} className="btn btn-primary">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Work
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="section">
        <div className="container">
          <SectionHeader title="About Me" subtitle="My professional journey and personal interests." />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="about-card"
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {portfolioData.personal.bio}
            </p>
            <p style={{ color: 'var(--gray)', marginBottom: '1rem' }}>
              My professional interests lie at the intersection of:
            </p>
            <div className="tags">
              {portfolioData.personal.interests.map((interest, idx) => (
                <span key={idx} className="tag">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE & EDUCATION --- */}
      <section className="section" style={{ backgroundColor: 'var(--black-card)' }}>
        <div className="container timeline-grid">
          
          {/* Experience */}
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Briefcase className="skill-icon" /> Experience
            </h3>
            {portfolioData.experience.map((job, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="timeline-item">
                <span className="timeline-dot"></span>
                <h4 className="timeline-role">{job.role}</h4>
                <p className="timeline-meta">{job.company} | {job.date}</p>
                <p className="timeline-desc">{job.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <GraduationCap className="skill-icon" /> Education
            </h3>
            {portfolioData.education.map((edu, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="timeline-item">
                 <span className="timeline-dot"></span>
                <h4 className="timeline-role">{edu.degree}</h4>
                <p className="timeline-meta">{edu.school}</p>
                <p className="timeline-desc">{edu.date}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- SKILLS & LANGUAGES --- */}
      <section className="section">
        <div className="container">
          <SectionHeader title="Expertise" subtitle="Tools and technologies I use to bring ideas to life." />
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="skills-grid"
            style={{ marginBottom: '4rem' }}
          >
            {portfolioData.skills.map((skill, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="skill-card"
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--white)' }}>{skill.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>{skill.level}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Languages</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {portfolioData.languages.map((lang, idx) => (
                <span key={idx} style={{ color: 'var(--gray)', borderBottom: '1px solid var(--gold)' }}>{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="section" style={{ backgroundColor: 'var(--black-card)' }}>
        <div className="container">
          <SectionHeader title="Projects" subtitle="A selection of my recent coding endeavors." />
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="projects-grid"
          >
            {portfolioData.projects.map((project, idx) => (
              <motion.a 
                key={idx} 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                variants={fadeInUp}
                className="project-card"
              >
                <div>
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <Github size={24} style={{ color: 'var(--gray)' }} />
                  </div>
                  <p style={{ color: 'var(--gray)' }}>{project.desc}</p>
                </div>
                <div className="project-link">
                  View Code <ArrowRight size={16} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- AWARDS & FOOTER --- */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <Award size={48} style={{ color: 'var(--gold)', marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Honors & Certifications</h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {portfolioData.awards.map((award, idx) => (
              <li key={idx} style={{ color: 'var(--gray)', fontSize: '1.1rem' }}>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Praise Oluwatishe Oluwaseun.</p>
      </footer>
    </div>
  );
}