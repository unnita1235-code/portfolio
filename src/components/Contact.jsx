import { useState } from 'react';
import { Send, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Loader as Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase.js';
import { PORTFOLIO_CONFIG } from '../data/portfolio.js';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim()) return 'Please enter your email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (form.message.trim().length < 10) return 'Message must be at least 10 characters.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError('');

    try {
      const { error: insertError } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (insertError) throw insertError;

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError('Something went wrong sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </div>
        <div className="contact-wrap fade-in">
          <div className="contact-info">
            <p className="contact-info-label">Email me directly at</p>
            <a href={`mailto:${PORTFOLIO_CONFIG.email}`} className="contact-email">
              {PORTFOLIO_CONFIG.email}
            </a>
            <p className="contact-info-subtitle">
              I typically respond within 24 hours. Looking forward to hearing from you.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {status === 'success' ? (
              <div className="contact-success">
                <CheckCircle2 size={48} />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="contact-reset-btn" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    disabled={status === 'loading'}
                  />
                </div>
                {status === 'error' && (
                  <div className="contact-error">
                    <AlertCircle size={18} />
                    <span>{error}</span>
                  </div>
                )}
                <button type="submit" className="contact-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
