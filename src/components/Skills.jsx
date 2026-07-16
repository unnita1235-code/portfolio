import { Brain, Server, LayoutGrid as Layout, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import './Skills.css';

const iconMap = { Brain, Server, Layout, Wrench };

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className={`skills-header ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">Tech <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Tools and technologies I use to build production AI systems.</p>
      </div>

      <div className={`skills-grid ${visible ? 'visible' : ''}`}>
        {skills.map((cat) => {
          const Icon = iconMap[cat.icon] || Brain;
          return (
            <div key={cat.category} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <Icon size={22} />
                </div>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-items">
                {cat.items.map((item) => (
                  <div key={item.name} className="skill-item">
                    <div className="skill-item-top">
                      <span>{item.name}</span>
                      <span className="skill-item-level">{item.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: visible ? `${item.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
