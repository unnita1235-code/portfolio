import { Briefcase, Award, Download, GraduationCap } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio.js';
import './Resume.css';

export default function Resume() {
  const { experience, certifications, resumeUrl } = PORTFOLIO_CONFIG;

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-eyebrow">Resume</span>
          <h2 className="section-title">Experience & credentials</h2>
          <a href={resumeUrl} className="resume-download-btn">
            <Download size={16} />
            Download Resume
          </a>
        </div>
        <div className="resume-body fade-in">
          <div className="resume-summary">
            <Briefcase size={20} />
            <p>
              {experience.length} roles across startups and agencies, building everything from
              marketing sites to real-time SaaS platforms.
            </p>
          </div>
          <div className="resume-columns">
            <div>
              <h3 className="resume-col-title">
                <Briefcase size={18} />
                Experience
              </h3>
              {experience.map((job) => (
                <div key={job.role + job.org} className="resume-item">
                  <div className="resume-item-header">
                    <h4>{job.role}</h4>
                    <span className="resume-period">{job.period}</span>
                  </div>
                  <p className="resume-org">{job.org}</p>
                  <ul className="resume-points">
                    {job.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h3 className="resume-col-title">
                <Award size={18} />
                Certifications
              </h3>
              <ul className="resume-certs">
                {certifications.map((cert) => (
                  <li key={cert}>
                    <GraduationCap size={16} />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
