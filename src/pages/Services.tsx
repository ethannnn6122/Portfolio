import React from 'react';
import classes from './Services.module.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className={classes.portfolioContainer}>
      {/* --- HERO SECTION --- */}
      <section className={classes.section} style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Web Development <span style={{ color: "var(--accent-color)" }}>&</span> AI Solutions
        </h1>
        <p className={classes.summaryText} style={{ maxWidth: "800px", margin: "0 auto" }}>
          I help startups and small businesses build high-performance web applications. 
          Whether you need a rapid MVP or a custom AI chatbot trained on your data, 
          I deliver clean, scalable code.
        </p>
      </section>

      {/* --- SERVICE CARDS --- */}
      <div className={classes.servicesGrid}>
        
        {/* SERVICE 1: MVP DEV */}
        <div className={`${classes.serviceCard} card`}>
          <div className={classes.iconWrapper}>
             <i className="fas fa-rocket"></i>
          </div>
          <h2>MVP Development</h2>
          <p>
            Have a startup idea? I build <strong>Minimum Viable Products</strong> that let you 
            launch and validate your business fast. No bloated agencies, just direct 
            development using modern stacks.
          </p>
          <ul className={classes.serviceList}>
             <li>✅ React / Vite Frontend</li>
             <li>✅ Python FastAPI Backend</li>
             <li>✅ Database Design</li>
             <li>✅ User Authentication</li>
          </ul>
          <div className={classes.technologies}>
              <span className={classes.techTag}>React</span>
              <span className={classes.techTag}>Python</span>
              <span className={classes.techTag}>PostgreSQL</span>
          </div>
          <Link to="/contact" className={`${classes.fullWidthBtn} btn btn-primary`}>Start Your Project</Link>
        </div>

        {/* SERVICE 2: AI INTEGRATION */}
        <div className={`${classes.serviceCard} card`}>
          <div className={classes.iconWrapper}>
             <i className="fas fa-brain"></i>
          </div>
          <h2>AI Integration (RAG)</h2>
          <p>
            Stop using generic ChatGPT. I build <strong>Custom AI Agents</strong> that know 
            <em>your</em> business data. Perfect for customer support, internal document search, 
            or automated analysis.
          </p>
          <ul className={classes.serviceList}>
             <li>✅ Custom Knowledge Base</li>
             <li>✅ Chatbot Interface</li>
             <li>✅ Vector Database Setup</li>
             <li>✅ OpenAI / Local LLMs</li>
          </ul>
          <div className={classes.technologies}>
              <span className={classes.techTag}>LangChain</span>
              <span className={classes.techTag}>OpenAI</span>
              <span className={classes.techTag}>ChromaDB</span>
          </div>
          <Link to="/contact" className={`${classes.fullWidthBtn} btn btn-primary`}>Get an AI Quote</Link>
        </div>

        {/* SERVICE 3: OPTIMIZATION */}
        <div className={`${classes.serviceCard} card`}>
          <div className={classes.iconWrapper}>
             <i className="fas fa-server"></i>
          </div>
          <h2>Performance & Hosting</h2>
          <p>
            Is your cloud bill too high? I specialize in optimizing <strong>Linux VPS</strong> environments. 
            I can migrate you from expensive PaaS (Heroku/Vercel) to your own private server 
            saving you 50%+ monthly.
          </p>
          <ul className={classes.serviceList}>
             <li>✅ Nginx Configuration</li>
             <li>✅ Docker Deployment</li>
             <li>✅ Security Hardening</li>
             <li>✅ Automated CI/CD Pipelines</li>
          </ul>
          <div className={classes.technologies}>
              <span className={classes.techTag}>Linux</span>
              <span className={classes.techTag}>Nginx</span>
              <span className={classes.techTag}>Docker</span>
          </div>
          <Link to="/contact" className={`${classes.fullWidthBtn} btn btn-primary`}>Optimize My Site</Link>
        </div>

      </div>

      {/* --- CTA SECTION --- */}
      <section className={`${classes.section} card`} style={{ marginTop: "6rem" }}>
        <h2>Not sure what you need?</h2>
        <p style={{ marginBottom: "2rem" }}>
            Let's have a quick chat about your goals. I offer free 15-minute consultations 
            to see if we are a good fit.
        </p>
        <Link to="/contact" className="btn btn-primary" style={{ fontSize: "1.2rem", padding: "1rem 2rem" }}>
            Contact Me
        </Link>
      </section>

    </div>
  );
};

export default Services;