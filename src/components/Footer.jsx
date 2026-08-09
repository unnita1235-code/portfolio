import { Github, Linkedin, Twitter, Dribbble, Heart } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio.js';
import './Footer.css';

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

export default function Footer() {
  const { initials, socials, name } = PORTFOLIO_CONFIG;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo">
            {initials}<span>.</span>
          </div>
          <p className="footer-tagline">{name} — Full-Stack Developer</p>
        </div>
        <div className="footer-socials">
          {socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon];
            return (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                {Icon ? <Icon size={18} /> : null}
              </a>
            );
          })}
        </div>
        <p className="footer-copy">
          © {year} {name} · Built with <Heart size={12} fill="currentColor" />
        </p>
      </div>
    </footer>
  );
}
