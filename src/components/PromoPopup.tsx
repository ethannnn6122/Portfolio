import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './PromoPopup.module.css';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenPromoPopup');

    if (!hasSeenPopup) {
      // Delay showing it slightly for better UX (1.5 seconds)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as seen so it doesn't show again this session
    sessionStorage.setItem('hasSeenPromoPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className={classes.overlay} onClick={handleClose}>
      {/* Stop click propagation so clicking inside the box doesn't close it */}
      <div className={classes.popup} onClick={(e) => e.stopPropagation()}>
        <button className={classes.closeBtn} onClick={handleClose}>&times;</button>
        
        <div className={classes.icon}>
          <i className="fas fa-code-branch"></i>
        </div>
        
        <h2>Building the Future?</h2>
        <p>
          I am currently accepting new freelance projects. 
          Let's build your next MVP or AI-integrated web app together.
        </p>
        
        <Link to="/services" className={classes.ctaBtn} onClick={handleClose}>
          View My Services
        </Link>
      </div>
    </div>
  );
};

export default PromoPopup;