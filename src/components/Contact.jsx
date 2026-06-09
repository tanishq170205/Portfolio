import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <p className="section-eyebrow">Get in Touch</p>
        <h2 className="section-title">Let's Build Something <span>Together</span></h2>
        <div className="gold-divider"></div>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              I'm actively looking for internships and full-time opportunities in 
              <strong> SDE, Backend, and AI/ML roles</strong>. If you have an exciting 
              challenge or just want to connect — my inbox is always open.
            </p>

            <div className="contact__details">
              <a href="mailto:tanishqsharmait@gmail.com" className="contact__detail-item">
                <span className="contact__detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">tanishqsharmait@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918109435970" className="contact__detail-item">
                <span className="contact__detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.12h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.36 6.36l.97-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">Mobile</span>
                  <span className="contact__detail-value">+91 8109435970</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/tanishq-sharma-06a9b1270" target="_blank" rel="noreferrer" className="contact__detail-item">
                <span className="contact__detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">LinkedIn</span>
                  <span className="contact__detail-value">tanishq-sharma-06a9b1270</span>
                </div>
              </a>

              <a href="https://github.com/tanishq170205" target="_blank" rel="noreferrer" className="contact__detail-item">
                <span className="contact__detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">GitHub</span>
                  <span className="contact__detail-value">tanishq170205</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact__form-wrapper">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>Message received!</h3>
                <p>I'll get back to you soon. Looking forward to connecting.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Tell me about the opportunity..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--primary contact__submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="contact__footer">
          <span className="contact__footer-text">
            Designed & Built by <strong>Tanishq Sharma</strong> · IIIT Kota · 2024
          </span>
          <div className="contact__footer-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
