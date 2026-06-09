import React from 'react';
import './Experience.css';

const EXPERIENCE = [
  {
    role: 'Finance Senior Executive',
    org: 'Cultural Council, IIIT Kota',
    period: 'Jul 2023 – Jul 2024',
    type: 'Leadership',
    points: [
      'Digitized expense tracking using scripted pipelines, reducing manual errors by 50% and accelerating reconciliation by 3×',
      'Managed multi-event budgets with zero overspending; secured four business sponsorships covering significant event costs',
      'Coordinated cross-functional teams for cultural events with 500+ attendees',
    ]
  }
];

const EDUCATION = [
  {
    degree: 'B.Tech — Electronics & Communication Engineering',
    institution: 'Indian Institute of Information Technology Kota',
    period: 'Aug 2023 – Jun 2027',
    detail: 'CGPA: 7.74',
    location: 'Kota, India',
  },
  {
    degree: 'Class XII — Science',
    institution: 'Jai Jyoti School JJFT',
    period: '2022',
    detail: 'Score: 89%',
    location: 'Guna, India',
  },
  {
    degree: 'Class X',
    institution: 'Jai Jyoti School JJFT',
    period: '2020',
    detail: 'Score: 90%',
    location: 'Guna, India',
  },
];

const Experience = () => (
  <section className="experience section" id="experience">
    <div className="container">
      <p className="section-eyebrow">Background</p>
      <h2 className="section-title">Experience & <span>Education</span></h2>
      <div className="gold-divider"></div>

      <div className="experience__grid">
        {/* Position of Responsibility */}
        <div className="experience__col">
          <h3 className="experience__col-title">
            <span className="experience__col-icon">▸</span> Positions
          </h3>

          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot"></div>
                <div className="timeline__content">
                  <span className="timeline__type">{exp.type}</span>
                  <h4 className="timeline__role">{exp.role}</h4>
                  <p className="timeline__org">{exp.org}</p>
                  <span className="timeline__period">{exp.period}</span>
                  <ul className="timeline__points">
                    {exp.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="experience__col">
          <h3 className="experience__col-title">
            <span className="experience__col-icon">▸</span> Education
          </h3>

          <div className="timeline">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot"></div>
                <div className="timeline__content">
                  <h4 className="timeline__role">{edu.degree}</h4>
                  <p className="timeline__org">{edu.institution}</p>
                  <div className="timeline__meta">
                    <span className="timeline__period">{edu.period}</span>
                    <span className="timeline__detail">{edu.detail}</span>
                  </div>
                  <span className="timeline__location">{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
