import { createIcons, Moon, Sun, Github, Linkedin, Mail, ExternalLink, Terminal, LayoutGrid, Network, Database } from 'lucide';

function safeCreateIcons() {
  createIcons({
    icons: { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Terminal, LayoutGrid, Network, Database }
  });
}

safeCreateIcons();

document.getElementById('footer-year').textContent = String(new Date().getFullYear());

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const newIconName = theme === 'light' ? 'sun' : 'moon';
  let icon = themeToggle ? themeToggle.querySelector('i, svg') : null;
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

const sections = document.querySelectorAll('section, div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
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

      ticking = false;
    });
    ticking = true;
  }
});

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

const glowInterval = setInterval(() => {
  const accents = document.querySelectorAll('.hero-title span');
  accents.forEach(el => {
    el.style.textShadow = `0 0 ${Math.random() * 20 + 10}px var(--accent-glow)`;
  });
}, 3000);

window.addEventListener('beforeunload', () => {
  clearInterval(glowInterval);
});
