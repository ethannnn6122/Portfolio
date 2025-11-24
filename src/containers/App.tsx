import React, { useState, useEffect } from 'react';
import { resume } from '../data';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { ContactForm } from '../components/ContactForm';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import PortfolioChat from '../components/PortfolioChat';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
           <button 
            className={`hamburger ${isNavOpen ? 'is-active' : ''}`} 
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
            aria-controls="nav-menu-list"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <ul id="nav-menu-list" className={`nav-menu ${isNavOpen ? 'is-active' : ''}`}>
            <li className="nav-item"><a href="#about" className="nav-link" onClick={closeNav}>About</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link" onClick={closeNav}>Experience</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link" onClick={closeNav}>Projects</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link" onClick={closeNav}>Skills</a></li>
            <li className="nav-item"><a href="#education" className="nav-link" onClick={closeNav}>Education</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeNav}>Contact</a></li>
          </ul>
          <a href="#home" className="nav-logo" onClick={closeNav}>{resume.name}</a>
        </div>
      </nav>
      
      <div className={`overlay ${isNavOpen ? 'is-active' : ''}`} onClick={closeNav}></div>

      <header id="home" className="hero-section">
        <ImageSlideshow />
        <div className="hero-overlay"></div>
        <div className="hero-text">
            <h1>{resume.name}</h1>
            <p className="subtitle">Cybersecurity Professional</p>
        </div>
      </header>

      <div className="portfolio-container">
        <main>
          <section id="about" className="section">
            <h2>About Me</h2>
            <p className="summary-text">{resume.summary}</p>
          </section>

          <div className="main-content">
            <div className="right-column">
               <section id="experience" className="section">
                <h2>Experience</h2>
                {resume.experience.map(job => (
                  <div key={job.title + job.company} className="experience-item card">
                    <div className="experience-header">
                      <h3>{job.title}, <span className="company">{job.company}</span></h3>
                      <p>{job.dates}</p>
                    </div>
                    <p>{job.description}</p>
                  </div>
                ))}
              </section>
              <section id="projects" className="section">
                <h2>Projects</h2>
                {resume.projects.map(project => (
                  <div key={project.name} className="project-item card">
                     <div className="experience-header">
                        <h3>{project.name}</h3>
                     </div>
                     <p>{project.description}</p>
                     <div className="technologies">
                        {project.technologies.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
                     </div>
                     <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${!project.link ? 'btn-disabled' : ''}`} aria-disabled={!project.link}>View Project</a>
                  </div>
                ))}
              </section>
            </div>
            
            <aside className="left-column">
              <section id="skills" className="section card">
                <h2>Skills</h2>
                {resume.skills.map(skillCat => (
                  <div key={skillCat.category} className="skills-category">
                    <h3>{skillCat.category}</h3>
                    <p className="skills-list">{skillCat.list}</p>
                  </div>
                ))}
              </section>

              <section id="education" className="section card">
                <h2>Education</h2>
                <div className="education-item">
                  <h3>{resume.education.degree}</h3>
                  <p>{resume.education.university}</p>
                  <p><em>{resume.education.graduation}</em></p>
                </div>
              </section>

              <section id="coursework" className="section card">
                <h2>Relevant Coursework</h2>
                <ul className="coursework-list">
                  {resume.coursework.map(course => <li key={course}>{course}</li>)}
                </ul>
              </section>
            </aside>
          </div>
          <section className="ai-chat-section section">
            <h2>Try my Portfolio RAG Bot</h2>
        	  <PortfolioChat />
          </section>
          <section id="contact" className="section">
            <h2>Contact Me</h2>
            <div className="card">
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
      <ScrollToTopButton />
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href={`mailto:${resume.contact.email}`} aria-label="Email"><i className="fas fa-envelope"></i></a>
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href={`tel:${resume.contact.phone}`} aria-label="Phone"><i className="fas fa-phone"></i></a>
          </div>
          <p>&copy; {new Date().getFullYear()} {resume.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
