import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio.js';
import { Code as Code2, Zap, Palette, Users } from 'lucide-react';
import './About.css';

const ICON_MAP = {
  code: Code2,
  zap: Zap,
  palette: Palette,
  users: Users,
};

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

export default function About() {
  const { about, socials, initials, name, location } = PORTFOLIO_CONFIG;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">A bit about me</h2>
        </div>
        <div className="about-content fade-in">
          <div className="about-left">
            <div className="about-photo-wrap">
              <div className="about-photo-ring" />
              <div className="about-photo">
                <span className="about-photo-initials">{initials}</span>
              </div>
            </div>
            <div className="about-socials">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                    {Icon ? <Icon size={20} /> : null}
                  </a>
                );
              })}
            </div>
            <p className="about-location">{location}</p>
          </div>
          <div className="about-right">
            <p className="about-bio">{about.bio}</p>
            <p className="about-story">{about.story}</p>
            <div className="about-highlights">
              {about.highlights.map((h) => {
                const Icon = ICON_MAP[h.icon];
                return (
                  <div key={h.title} className="about-highlight">
                    <div className="about-highlight-icon">
                      {Icon ? <Icon size={22} /> : null}
                    </div>
                    <div>
                      <h4>{h.title}</h4>
                      <p>{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
