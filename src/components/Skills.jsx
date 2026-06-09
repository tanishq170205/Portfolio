import React, { useState } from 'react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'JavaScript', level: 90, color: '#f7df1e' },
      { name: 'Python', level: 92, color: '#3776ab' },
      { name: 'C++', level: 80, color: '#00599c' },
      { name: 'SQL', level: 85, color: '#e38c00' },
      { name: 'Solidity', level: 55, color: '#363636' },
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend / SDE',
    icon: '</>',
    skills: [
      { name: 'React.js', level: 88, color: '#61dafb' },
      { name: 'Node.js', level: 82, color: '#339933' },
      { name: 'Next.js', level: 70, color: '#ffffff' },
      { name: 'Flask', level: 80, color: '#d4a72c' },
      { name: 'REST APIs', level: 90, color: '#c9a84c' },
      { name: 'WebRTC', level: 65, color: '#008000' },
    ]
  },
  {
    id: 'backend',
    label: 'Backend / DBs',
    icon: '⚙',
    skills: [
      { name: 'PostgreSQL', level: 85, color: '#336791' },
      { name: 'MongoDB', level: 78, color: '#47a248' },
      { name: 'SQL Server', level: 72, color: '#cc2927' },
      { name: 'DB Design', level: 82, color: '#c9a84c' },
      { name: 'Docker', level: 65, color: '#2496ed' },
      { name: 'Git / CI-CD', level: 88, color: '#f05033' },
    ]
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    icon: '⬡',
    skills: [
      { name: 'TensorFlow', level: 82, color: '#ff6f00' },
      { name: 'PyTorch', level: 75, color: '#ee4c2c' },
      { name: 'Scikit-learn', level: 90, color: '#f7931e' },
      { name: 'XGBoost', level: 85, color: '#189fdd' },
      { name: 'OpenCV', level: 72, color: '#5c3ee8' },
      { name: 'Hugging Face', level: 65, color: '#ffd21e' },
    ]
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const active = SKILL_CATEGORIES.find(c => c.id === activeTab);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section-eyebrow">Capabilities</p>
        <h2 className="section-title">Technical <span>Arsenal</span></h2>
        <div className="gold-divider"></div>

        <div className="skills__tabs">
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`skills__tab ${activeTab === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className="skills__tab-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills__panel">
          <div className="skills__grid">
            {active.skills.map(skill => (
              <div key={skill.name} className="skill-item">
                <div className="skill-item__header">
                  <span className="skill-item__name">{skill.name}</span>
                  <span className="skill-item__level">{skill.level}%</span>
                </div>
                <div className="skill-item__bar">
                  <div
                    className="skill-item__fill"
                    style={{ '--skill-width': `${skill.level}%`, '--skill-color': skill.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills__dsa-card">
            <div className="skills__dsa-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <strong>DSA & Problem Solving</strong>
              <p>150+ problems solved across LeetCode & CodeForces. Strong in Trees, Graphs, DP, Segment Trees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
