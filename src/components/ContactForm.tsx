import React from 'react';

export function ContactForm() {
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = React.useState({ submitting: false, success: false, error: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: '' });
    
    const formspreeEndpoint = 'https://formspree.io/f/xyzprgrk';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleFormSubmit}>
      <p>
        I would love to hear from you! Please fill out the form below, and I will get back to you as soon as possible.
      </p>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required></textarea>
      </div>
      <button type="submit" className="submit-btn" disabled={formStatus.submitting}>
        {formStatus.submitting ? 'Sending...' : 'Send Message'}
      </button>
      {formStatus.success && <p className="form-status-msg success">Thank you for your message! I'll get back to you soon.</p>}
      {formStatus.error && <p className="form-status-msg error">{formStatus.error}</p>}
    </form>
  );
}
