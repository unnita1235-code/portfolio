import { Brain, Workflow, Terminal, Rocket, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/portfolio.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import './About.css';

const iconMap = { Brain, Workflow, Terminal, Rocket };

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about-content ${visible ? 'visible' : ''}`}>
        <div className="about-left">
          <div className="about-photo-wrap">
            <div className="about-photo-ring" />
            <div className="about-photo">
              <span className="about-photo-initials">UTA</span>
            </div>
          </div>
          <div className="about-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="about-right">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="about-bio">{personal.bio}</p>
          <p className="about-story">{personal.story}</p>

          <div className="about-highlights">
            {personal.highlights.map((h) => {
              const Icon = iconMap[h.icon] || Brain;
              return (
                <div key={h.label} className="about-highlight">
                  <div className="about-highlight-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4>{h.label}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
