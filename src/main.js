// ============================================================
// Priority 2: Lucide availability checks on every usage site
// Lucide is loaded synchronously before this module runs,
// so window.lucide should always be defined. However all calls
// are guarded defensively in case of CDN failure, which
// triggers the CSS fallback icon system instead.
// ============================================================

/**
 * Safely call lucide.createIcons(). Falls back to CSS icon system if needed.
 */
function safeCreateIcons() {
    if (typeof window.lucide !== 'undefined' && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    } else if (window.__LUCIDE_FALLBACK__) {
        // Already using CSS fallback, nothing to do
    } else {
        // Lucide not yet available — set flag and activate CSS fallback
        console.warn('[main.js] Lucide unavailable at safeCreateIcons() call. Activating fallback.');
        window.__LUCIDE_FALLBACK__ = true;
        activateCssFallbackIcons();
    }
}

/**
 * CSS fallback: replaces data-lucide <i> elements with span.icon-fallback divs
 * that render icons via CSS mask + inline SVG data URIs (defined in index.html).
 */
function activateCssFallbackIcons() {
    const iconMap = {
        'moon': 'icon-moon',
        'sun': 'icon-sun',
        'github': 'icon-github',
        'linkedin': 'icon-linkedin',
        'mail': 'icon-mail',
        'external-link': 'icon-external-link',
        'terminal': 'icon-terminal',
        'layout-grid': 'icon-layout-grid',
        'network': 'icon-network',
        'database': 'icon-database',
    };

    document.querySelectorAll('[data-lucide]').forEach(el => {
        const iconName = el.getAttribute('data-lucide');
        const cssClass = iconMap[iconName];
        if (cssClass) {
            // Copy over any width/height inline styles for sizing
            const computedSize = el.style.width || '20px';
            el.classList.add('icon-fallback', cssClass);
            el.style.width = computedSize;
            el.style.height = computedSize;
        } else {
            // Unknown icon — render a small accent square as last resort
            el.style.cssText += 'width:18px;height:18px;display:inline-block;background:var(--accent);border-radius:3px;vertical-align:middle;';
        }
    });
    console.info('[Lucide Fallback] CSS icons activated for all data-lucide elements.');
}

// ============================================================
// Boot sequence: Initialize icons on DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    if (window.__LUCIDE_FALLBACK__) {
        // CDN failed before DOMContentLoaded — use CSS fallback
        activateCssFallbackIcons();
    } else {
        safeCreateIcons();
    }
});

// ============================================================
// Theme Toggle Logic
// ============================================================
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

/**
 * Updates the theme toggle icon (moon ↔ sun) and re-renders.
 * Handles both Lucide and CSS fallback icon modes.
 * NOTE: After lucide.createIcons() runs, the <i> element is replaced by <svg>.
 * We must re-insert the <i> element so Lucide can process it again on the next call.
 */
function updateThemeIcon(theme) {
    const newIconName = theme === 'light' ? 'sun' : 'moon';

    if (window.__LUCIDE_FALLBACK__) {
        // CSS fallback mode: swap the icon-* class on existing element
        let icon = themeToggle.querySelector('i, svg, span.icon-fallback');
        if (!icon) return;
        icon.classList.remove('icon-moon', 'icon-sun');
        icon.classList.add('icon-fallback', `icon-${newIconName}`);
    } else {
        // Lucide mode: Lucide replaces <i> with <svg> after first render.
        // We need to put the <i> back so Lucide can re-process it.
        let icon = themeToggle.querySelector('i, svg');
        if (!icon) return;

        if (icon.tagName.toLowerCase() === 'svg') {
            // Replace the svg back with a fresh <i> for Lucide to process
            const newI = document.createElement('i');
            newI.setAttribute('data-lucide', newIconName);
            themeToggle.replaceChild(newI, icon);
        } else {
            icon.setAttribute('data-lucide', newIconName);
        }
        safeCreateIcons();
    }
}

// ============================================================
// Scroll Reveal Animation (Intersection Observer)
// ============================================================
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

// ============================================================
// Active Link Tracking
// ============================================================
const sections = document.querySelectorAll('section, div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
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

// ============================================================
// Smooth Scroll for Navigation
// ============================================================
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

// ============================================================
// Vibe Coding Easter Egg: Subtle glow pulse on key elements
// ============================================================
setInterval(() => {
    const accents = document.querySelectorAll('.hero-title span');
    accents.forEach(el => {
        el.style.textShadow = `0 0 ${Math.random() * 20 + 10}px var(--accent-glow)`;
    });
}, 3000);
