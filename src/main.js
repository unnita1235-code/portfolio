// =====================================================================
// Lucide icons — imported as a bundled npm dependency
// =====================================================================

import { createIcons, Moon, Sun, Github, Linkedin, Mail, ExternalLink, Terminal, LayoutGrid, Network, Database } from 'lucide';

/**
 * Safely call lucide.createIcons() with all needed icons.
 */
function safeCreateIcons() {
  createIcons({
    icons: { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Terminal, LayoutGrid, Network, Database }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  safeCreateIcons();
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Initialize theme (default to dark)
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const newIconName = theme === 'light' ? 'sun' : 'moon';
  let icon = themeToggle.querySelector('i, svg');
  if (!icon) return;
  if (icon.tagName.toLowerCase() === 'svg') {
    const newI = document.createElement('i');
    newI.setAttribute('data-lucide', newIconName);
    themeToggle.replaceChild(newI, icon);
  } else {
    icon.setAttribute('data-lucide', newIconName);
  }
  safeCreateIcons();
}

// Scroll Reveal Animation (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// Active Link Tracking
const sections = document.querySelectorAll('section, div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Smooth Scroll for Navigation
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Vibe Coding Easter Egg: Subtle glow pulse on key elements
setInterval(() => {
  const accents = document.querySelectorAll('.hero-title span');
  accents.forEach(el => {
    el.style.textShadow = `0 0 ${Math.random() * 20 + 10}px var(--accent-glow)`;
  });
}, 3000);
