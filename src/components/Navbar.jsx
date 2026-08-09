import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio.js';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'resume', 'contact'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">
        {PORTFOLIO_CONFIG.initials.split('').join('.')}<span className="navbar-logo-dot">.</span>
      </a>
      <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href.slice(1) ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="navbar-cta" onClick={() => setOpen(false)}>
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
