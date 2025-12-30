import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import BlogList from '../pages/BlogList';
import BlogPost from '../pages/BlogPost';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import PromoPopup from '../components/PromoPopup';
import PortfolioChat from '../components/PortfolioChat';
import { ScrollToTopButton } from '../components/ScrollToTopButton';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);

  return (
    <Router>
      {/* GLOBAL NAVBAR */}
      <PromoPopup/>
      <nav className="navbar">
        <div className="nav-container">
          <button 
            className={`hamburger ${isNavOpen ? 'is-active' : ''}`} 
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="line"></span><span className="line"></span><span className="line"></span>
          </button>
          
          <ul id="nav-menu-list" className={`nav-menu ${isNavOpen ? 'is-active' : ''}`}>
            <li className="nav-item"><Link to="/" className="nav-link" onClick={closeNav}>Home</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link" onClick={closeNav}>Services</Link></li>
            <li className="nav-item"><Link to="/blog" className="nav-link" onClick={closeNav}>Blog</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" onClick={closeNav}>Contact</Link></li>
          </ul>
          <Link to="/" className="nav-logo" onClick={closeNav}><img src="/images/MilehighcodingLogo.svg" alt="Cybersecurity theme placeholder" className="slideshow-image" /></Link>
        </div>
      </nav>
      
      <div className={`overlay ${isNavOpen ? 'is-active' : ''}`} onClick={closeNav}></div>

      {/* PAGE CONTENT SWITCHER */}
      <main className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      <PortfolioChat />
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;