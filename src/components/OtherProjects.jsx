import React from 'react';
import { Camera, Users, ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import './OtherProjects.css';

const OtherProjects = () => {
  const projects = [
    {
      title: "FoodVision",
      icon: <Camera size={32} className="text-gradient-cyan" />,
      desc: "An advanced image classification model built with PyTorch, capable of identifying 101 food categories. Deployed via Gradio for ultra-fast, lightweight inference.",
      metrics: ["70% Accuracy", "<0.03s Response", "30MB Model"],
      tags: ["PyTorch", "Computer Vision", "Gradio"]
    },
    {
      title: "Skill Swap Platform",
      icon: <Users size={32} className="text-gradient-cyan" />,
      desc: "A full-stack platform leveraging ML-based matching to optimize user pairing based on proficiency. Includes real-time audio/video communication via WebRTC.",
      metrics: ["Real-time WebRTC", "ML Matching", "Secure Auth"],
      tags: ["React", "Machine Learning", "WebRTC", "Odoo"]
    }
  ];

  return (
    <section className="other-projects section-padding">
      <div className="container">
        <h2 className="section-title">Other Engineering Projects</h2>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="small-project-card glass-panel">
              <div className="card-header">
                {proj.icon}
                <h3>{proj.title}</h3>
              </div>
              <p className="card-desc">{proj.desc}</p>
              
              <div className="card-metrics">
                {proj.metrics.map((m, i) => (
                  <span key={i} className="mini-metric font-mono">{m}</span>
                ))}
              </div>
              
              <div className="card-tags">
                {proj.tags.map((t, i) => (
                  <span key={i} className="small-tag">{t}</span>
                ))}
              </div>
              
              <div className="card-links">
                <a href="#"><Github size={20} /></a>
                <a href="#"><ExternalLink size={20} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
