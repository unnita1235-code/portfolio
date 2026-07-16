import { useState } from 'react';
import { Send, Github, Linkedin, Mail, Twitter, CircleCheck as CheckCircle2 } from 'lucide-react';
import { personal } from '../data/portfolio.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import './Contact.css';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email';
    }
    if (!form.message.trim()) {
      e.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters';
    }
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`contact-header ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
        <p className="section-subtitle">Have a project or role in mind? I'd love to hear about it.</p>
      </div>

      <div className={`contact-body ${visible ? 'visible' : ''}`}>
        <div className="contact-info">
          <p className="contact-info-text">
            I'm always open to discussing AI engineering work, Gen AI projects, or collaboration opportunities.
          </p>
          <div className="contact-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-social">
              <Github size={20} /> <span>GitHub</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social">
              <Linkedin size={20} /> <span>LinkedIn</span>
            </a>
            <a href={personal.twitter} target="_blank" rel="noopener noreferrer" className="contact-social">
              <Twitter size={20} /> <span>Twitter / X</span>
            </a>
            <a href={`mailto:${personal.email}`} className="contact-social">
              <Mail size={20} /> <span>Email</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {sent && (
            <div className="contact-success">
              <CheckCircle2 size={18} /> Your email client should now be open. Thank you!
            </div>
          )}
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Your name"
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="you@example.com"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Tell me about your project or role..."
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <button type="submit" className="contact-submit">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
