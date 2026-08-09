import { useTheme } from '../context/ThemeContext.jsx';
import { PORTFOLIO_CONFIG } from '../data/portfolio.js';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { themes, themeName, setTheme } = useTheme();

  return (
    <section id="hero" className="hero">
      <div className="hero-glow" />
      <div className="hero-grid-bg" />
      <div className="container hero-content">
        <div className="hero-badge fade-in">
          <Sparkles size={14} />
          <span>Available for new projects</span>
        </div>
        <h1 className="hero-title fade-in">
          Hi, I'm <span className="hero-name">{PORTFOLIO_CONFIG.name}</span>
        </h1>
        <p className="hero-role fade-in">{PORTFOLIO_CONFIG.role}</p>
        <p className="hero-tagline fade-in">{PORTFOLIO_CONFIG.tagline}</p>
        <div className="hero-actions fade-in">
          <a href="#contact" className="hero-cta-primary">
            <Mail size={18} />
            Get in Touch
          </a>
          <a href="#about" className="hero-cta-secondary">
            About Me
            <ArrowDown size={18} />
          </a>
        </div>
        <div className="hero-themes fade-in">
          {themes.map((t) => (
            <button
              key={t.name}
              className={`theme-dot ${themeName === t.name ? 'active' : ''}`}
              style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent2})` }}
              onClick={() => setTheme(t.name)}
              aria-label={`Switch to ${t.name} theme`}
            />
          ))}
        </div>
      </div>
      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <span className="hero-scroll-mouse" />
      </a>
    </section>
  );
}
