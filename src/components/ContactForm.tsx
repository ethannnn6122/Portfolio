import { useState } from 'react';
import classes from './ContactForm.module.css';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', subscribe: false });

  const [status, setStatus] = useState({
      submitting: false,
      succeeded: false,
      error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: null });
    const API_URL = import.meta.env.VITE_API_URL;
    try{
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({submitting: false, succeeded: true, error: null});
        setFormData({name: '', email: '', subject: '', message: ''});
      } else {
        const data = await response.json();
        setStatus({ name: '', email: '', subject: '', message: '' });
      }
    } catch(error) {
      console.error("Contact error:", error);
      setStatus({ submitting: false, succeeded: false, error: "Network Error, Try again!"})
    }
  };

 return (
    <form className={classes.ContactForm} onSubmit={handleSubmit}>
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out with any questions or comments! I will get back to you within 2-3 days.
      </p>
      
      <div className={classes.FormRow}>
        <div className={classes.FormGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className={classes.FormGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
      </div>
      <div className={classes.FormRow}>
        <div className={classes.FormGroup}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} />
        </div>
        <div className={classes.FormGroup}> 
          <label htmlFor='phone-number'>Phone Number</label>
          <input type="text" id="phone-number" name="phone-number" value={formData['phone-number']} onChange={handleInputChange} />
        </div>
      </div>
      <div className={classes.FormGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required></textarea>
      </div>

      <button type="submit" className={classes.SubmitBtn} disabled={status.submitting}>
        {status.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {status.succeeded && <p className={classes.SuccessMsg}>Thank you for your message! We will be in touch soon.</p>}
      
      {status.error && (
        <div className={classes.ErrorMsg} role="alert">
            <p>{status.error}</p>
        </div>
      )}
    </form>
  );
}

export default ContactForm;