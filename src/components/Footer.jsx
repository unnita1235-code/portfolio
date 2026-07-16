import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '../data/portfolio.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <a href="#home" className="footer-logo">UNNI<span>.</span></a>
          <p className="footer-tagline">{personal.title}</p>
        </div>

        <div className="footer-socials">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {personal.name}. Built with <Heart size={12} /> & React.
        </p>
      </div>
    </footer>
  );
}
