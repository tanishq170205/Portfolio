import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 'sakhi',
    featured: true,
    title: 'Sakhi',
    tagline: 'Full-Stack Project Management Platform',
    type: 'SDE · Full Stack',
    stack: ['Node.js', 'React', 'PostgreSQL', 'JWT', 'REST API', 'Tailwind CSS'],
    description: 'A full-stack Kanban project management app with drag-and-drop boards, real-time activity tracking, team workspaces, and role-based member management.',
    highlights: [
      'JWT-based authentication with secure session management and a PostgreSQL-backed data layer supporting multi-team collaboration with full audit logging',
      'Responsive productivity suite UI with board analytics (task counts, velocity metrics, member contributions) and CRUD pipeline for automated task creation',
      'Role-based access control with team workspaces and real-time member activity feeds',
    ],
    links: { github: 'https://github.com/tanishq1705', demo: null },
    year: '2024',
  },
  {
    id: 'cardiosense',
    featured: true,
    title: 'CardioSense AI',
    tagline: 'Cardiac Risk Detection with Explainable ML',
    type: 'ML / AI · Research',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'Streamlit', 'Pandas', 'NumPy'],
    description: 'End-to-end ML/DL pipeline on the UCI Heart Disease dataset with ensemble models and neural network classifier, achieving 96%+ accuracy.',
    highlights: [
      'Integrated SHAP-based explainability and clinical risk stratification for transparent, interpretable early cardiac risk detection',
      'Designed modular preprocessing automation pipeline — feature selection, cross-validation stability, rapid experimentation across multiple model architectures',
      'Neural network + ensemble fusion achieving 96%+ accuracy with ROC-AUC analysis',
    ],
    links: { github: 'https://github.com/tanishq1705', demo: null },
    year: '2024',
  },
  {
    id: 'skillswap',
    featured: false,
    title: 'Skill Swap',
    tagline: 'AI-Powered P2P Skill Exchange Platform',
    type: 'SDE · Hackathon',
    stack: ['React', 'Python', 'Flask', 'WebRTC', 'Collaborative Filtering', 'REST API'],
    description: 'Led a team to build a full-stack skill exchange platform at Otru Hackathon — placed 8th out of 200+ teams in 24 hours.',
    highlights: [
      'Collaborative filtering recommendation engine that intelligently pairs users by skill and proficiency',
      'Real-time audio/video via WebRTC with secure auth, dynamic dashboards, and credit management',
    ],
    links: { github: 'https://github.com/tanishq1705', demo: null },
    year: '2024',
  },
];

const ProjectCard = ({ project, isFeatured }) => (
  <div className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}>
    {isFeatured && project.id === 'sakhi' && (
      <div className="project-card__featured-badge">⭐ Highlight Project</div>
    )}

    <div className="project-card__header">
      <div>
        <span className="project-card__type">{project.type}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
      </div>
      <span className="project-card__year">{project.year}</span>
    </div>

    <p className="project-card__desc">{project.description}</p>

    <ul className="project-card__highlights">
      {project.highlights.map((h, i) => (
        <li key={i}>{h}</li>
      ))}
    </ul>

    <div className="project-card__footer">
      <div className="project-card__stack">
        {project.stack.map(t => (
          <span key={t} className="project-card__tech">{t}</span>
        ))}
      </div>
      <div className="project-card__links">
        <a href={project.links.github} target="_blank" rel="noreferrer" className="project-card__link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const featured = PROJECTS.filter(p => p.featured);
  const others = PROJECTS.filter(p => !p.featured);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title">Selected <span>Projects</span></h2>
        <div className="gold-divider"></div>

        {/* Sakhi — Primary Spotlight */}
        <div className="projects__spotlight">
          <ProjectCard project={PROJECTS[0]} isFeatured={true} />
        </div>

        {/* Two-col grid for remaining featured */}
        <div className="projects__grid">
          {PROJECTS.slice(1).map(project => (
            <ProjectCard key={project.id} project={project} isFeatured={project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
