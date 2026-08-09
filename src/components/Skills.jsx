import { useEffect, useRef, useState } from 'react';
import { LayoutGrid as Layout, Server, Wrench, PenTool } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio.js';
import './Skills.css';

const ICON_MAP = {
  layout: Layout,
  server: Server,
  wrench: Wrench,
  'pen-tool': PenTool,
};

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className={`section-header fade-in ${visible ? 'visible' : ''}`}>
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">A toolkit refined over years of shipping production software.</p>
        </div>
        <div ref={ref} className={`skills-grid fade-in ${visible ? 'visible' : ''}`}>
          {PORTFOLIO_CONFIG.skills.map((group) => {
            const Icon = ICON_MAP[group.icon];
            return (
              <div key={group.category} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    {Icon ? <Icon size={22} /> : null}
                  </div>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-items">
                  {group.items.map((item) => (
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
      </div>
    </section>
  );
}
