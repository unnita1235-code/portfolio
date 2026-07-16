import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { personal } from '../data/portfolio.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import './Hero.css';

export default function Hero() {
  const { ref, visible } = useScrollReveal();

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid-overlay" />
      </div>

      <div className={`hero-content ${visible ? 'visible' : ''}`}>
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>Available for AI Engineering Roles</span>
          <span className="hero-badge-dot" />
        </div>

        <h1 className="hero-title">
          {personal.tagline.split(' ').slice(0, -2).join(' ')}{' '}
          <span className="gradient-text">{personal.tagline.split(' ').slice(-2).join(' ')}</span>
        </h1>

        <p className="hero-subtitle">{personal.bio}</p>

        <div className="hero-actions">
          <a
            href="#projects"
            onClick={(e) => scrollTo(e, 'projects')}
            className="hero-btn hero-btn-primary"
          >
            View Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            className="hero-btn hero-btn-secondary"
          >
            <Mail size={18} /> Contact Me
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">6+</span>
            <span className="hero-stat-label">AI Projects</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">3+</span>
            <span className="hero-stat-label">Years Coding</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">∞</span>
            <span className="hero-stat-label">Curiosity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
