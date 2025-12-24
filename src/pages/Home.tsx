import { useState, useEffect } from 'react';
import { resume } from '../data';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { Link } from 'react-router-dom';

function Home() {
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
     <header id="home" className="hero-section">
        {/* New Wrapper for Split Layout */}
        <div className="hero-content">
          
          {/* Left Side: Text & Buttons */}
          <div className="hero-text">
              <h1>{resume.name}</h1>
              <p className="subtitle">Cybersecurity Professional</p>
              
              <div className="hero-cta">
                  <a href="#projects" className="btn btn-primary">View Projects</a>
                  <Link to="/contact" className="btn btn-primary" onClick={closeNav}>Contact Me</Link>
              </div>
          </div>
          
          {/* Right Side: Controlled Slideshow */}
          <div className="hero-visual">
              <ImageSlideshow />
          </div>

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
        </main>
      </div>
    </>
  );
}

export default Home;
