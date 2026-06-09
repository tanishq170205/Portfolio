import React from 'react';
import { Lightbulb, Code2, Cpu } from 'lucide-react';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <section id="about" className="philosophy section-padding">
      <div className="container">
        <h2 className="section-title">Problem Solving Philosophy</h2>
        
        <div className="philosophy-content glass-panel">
          <p className="philosophy-text text-gradient">
            "I enjoy transforming complex real-world problems into scalable AI-driven systems using a combination of machine learning, software engineering, and algorithmic thinking."
          </p>
          
          <div className="philosophy-pillars">
            <div className="pillar">
              <div className="pillar-icon">
                <Cpu size={32} />
              </div>
              <h3>Machine Learning</h3>
              <p>Building models that reason, adapt, and learn from data.</p>
            </div>
            
            <div className="pillar">
              <div className="pillar-icon">
                <Code2 size={32} />
              </div>
              <h3>Software Engineering</h3>
              <p>Designing robust, scalable architectures and APIs.</p>
            </div>
            
            <div className="pillar">
              <div className="pillar-icon">
                <Lightbulb size={32} />
              </div>
              <h3>Algorithmic Thinking</h3>
              <p>Optimizing for performance, latency, and resource efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
