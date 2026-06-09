import React from 'react';
import './Achievements.css';

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Hackathon Finalist',
    subtitle: 'Otru Open Innovation Hackathon',
    desc: 'Placed 8th out of 200+ teams, building an AI-powered full-stack platform under a 24-hour deadline.',
    tag: 'AI + SDE',
  },
  {
    icon: '⚡',
    title: 'Finance Executive',
    subtitle: 'IIIT Kota Cultural Council',
    desc: 'Led event budgeting and sponsorship efforts, securing 4 business sponsors and reducing expense errors by 50% via automation.',
    tag: 'Leadership',
  },
  {
    icon: '🥋',
    title: 'State-Level Athlete',
    subtitle: 'Under-16 Kabaddi State Championship',
    desc: 'Represented at Rajasthan Kabaddi Association state championship, demonstrating teamwork and discipline.',
    tag: 'Sports',
  },
  {
    icon: '🎙️',
    title: 'Debate 2nd Place',
    subtitle: 'Inter-School Debate Competition',
    desc: 'Secured 2nd place in inter-school debate, demonstrating strong communication and analytical reasoning skills.',
    tag: 'Communication',
  },
];

const Achievements = () => (
  <section className="achievements section" id="achievements">
    <div className="container">
      <p className="section-eyebrow">Recognition</p>
      <h2 className="section-title">Awards & <span>Achievements</span></h2>
      <div className="gold-divider"></div>

      <div className="achievements__grid">
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} className="achievement-card">
            <div className="achievement-card__icon">{a.icon}</div>
            <span className="achievement-card__tag">{a.tag}</span>
            <h3 className="achievement-card__title">{a.title}</h3>
            <p className="achievement-card__subtitle">{a.subtitle}</p>
            <p className="achievement-card__desc">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
