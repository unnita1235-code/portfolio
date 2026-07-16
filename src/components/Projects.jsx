import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import './Projects.css';

export default function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`projects-header ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Production AI systems I've designed and shipped.</p>
      </div>

      <div className={`projects-grid ${visible ? 'visible' : ''}`}>
        {projects.map((p) => (
          <article key={p.name} className={`project-card ${p.featured ? 'featured' : ''}`}>
            <div className="project-banner" style={{ background: p.gradient }}>
              {p.featured && (
                <span className="project-featured-badge">
                  <Star size={12} /> Featured
                </span>
              )}
              <span className="project-banner-name">{p.name}</span>
            </div>

            <div className="project-body">
              <span className="project-tag">{p.tag}</span>
              <h3 className="project-title">{p.name}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="project-tech-pill">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={16} /> Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
