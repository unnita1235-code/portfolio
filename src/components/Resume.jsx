import { Download, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { resume, personal } from '../data/portfolio.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import './Resume.css';

export default function Resume() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="resume" className="resume" ref={ref}>
      <div className={`resume-header ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">My <span className="gradient-text">Resume</span></h2>
        <p className="section-subtitle">A snapshot of my experience, education, and certifications.</p>
        <a href="/UnniTAResume.pdf" download className="resume-download-btn">
          <Download size={18} /> Download Resume
        </a>
      </div>

      <div className={`resume-body ${visible ? 'visible' : ''}`}>
        <div className="resume-summary">
          <FileText size={20} />
          <p>{resume.summary}</p>
        </div>

        <div className="resume-columns">
          <div className="resume-col">
            <h3 className="resume-col-title"><Briefcase size={18} /> Experience</h3>
            {resume.experience.map((exp, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item-header">
                  <h4>{exp.role}</h4>
                  <span className="resume-period">{exp.period}</span>
                </div>
                <p className="resume-org">{exp.org}</p>
                <ul className="resume-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-col">
            <h3 className="resume-col-title"><GraduationCap size={18} /> Education</h3>
            {resume.education.map((edu, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item-header">
                  <h4>{edu.degree}</h4>
                </div>
                <p className="resume-org">{edu.school}</p>
              </div>
            ))}

            <h3 className="resume-col-title" style={{ marginTop: '2rem' }}>
              <Award size={18} /> Certifications
            </h3>
            <ul className="resume-certs">
              {resume.certifications.map((c, i) => (
                <li key={i}>
                  <Award size={14} /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
