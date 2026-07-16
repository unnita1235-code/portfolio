import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personal } from '../data/portfolio.js';
import { useActiveSection } from '../hooks/useScrollReveal.js';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" onClick={(e) => handleClick(e, 'home')} className="navbar-logo">
        UNNI<span className="navbar-logo-dot">.</span>
      </a>

      <nav className={`navbar-links ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleClick(e, link.id)}
            className={active === link.id ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
        <a href={`mailto:${personal.email}`} className="navbar-cta">
          Let's Talk
        </a>
      </nav>

      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
