import React from 'react';
import { Telescope, Layers, Zap } from 'lucide-react';
import { Github } from './Icons';
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        
        <div className="skills-layout">
          
          {/* Left: Skills & Exploring */}
          <div className="skills-left">
            <h2 className="section-title">Technical Skills</h2>
            
            <div className="skill-category">
              <h3 className="category-title"><Brain className="inline-icon"/> AI & Machine Learning</h3>
              <div className="skill-tags">
                <span>Machine Learning</span><span>Deep Learning</span><span>NLP</span>
                <span>Computer Vision</span><span>RAG Systems</span><span>PyTorch</span>
                <span>TensorFlow</span><span>Scikit-learn</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title"><Layers className="inline-icon"/> Tech Stack & Software Eng.</h3>
              <div className="skill-tags">
                <span>Python</span><span>C++</span><span>JavaScript</span>
                <span>FastAPI</span><span>React</span><span>Node.js</span>
                <span>Linux</span><span>Git</span><span>Docker</span>
              </div>
            </div>

            <div className="exploring-card glass-panel">
              <div className="exploring-header">
                <Telescope size={24} className="text-gradient-cyan" />
                <h3>Currently Exploring</h3>
              </div>
              <ul className="exploring-list">
                <li><Zap size={14}/> RAG Pipelines & Advanced Retrieval</li>
                <li><Zap size={14}/> Autonomous AI Agents</li>
                <li><Zap size={14}/> Distributed Systems & Microservices</li>
                <li><Zap size={14}/> LLM Fine-tuning (LoRA, QLoRA)</li>
                <li><Zap size={14}/> Advanced Graph Algorithms</li>
              </ul>
            </div>
          </div>

          {/* Right: Github Stats */}
          <div className="skills-right">
            <h2 className="section-title invisible">GitHub</h2>
            <div className="github-card glass-panel">
              <div className="github-header">
                <Github size={28} />
                <h3>tanishq170205</h3>
              </div>
              
              <div className="github-stats-grid">
                <div className="gh-stat">
                  <span className="gh-num">42</span>
                  <span className="gh-label">Repositories</span>
                </div>
                <div className="gh-stat">
                  <span className="gh-num">340+</span>
                  <span className="gh-label">Contributions</span>
                </div>
              </div>

              <div className="top-languages">
                <h4>Top Languages</h4>
                <div className="lang-bar-container">
                  <div className="lang-bar">
                    <div className="lang python" style={{width: '55%'}}></div>
                    <div className="lang cpp" style={{width: '25%'}}></div>
                    <div className="lang js" style={{width: '20%'}}></div>
                  </div>
                  <div className="lang-legend">
                    <span><span className="dot python-dot"></span> Python (55%)</span>
                    <span><span className="dot cpp-dot"></span> C++ (25%)</span>
                    <span><span className="dot js-dot"></span> JavaScript (20%)</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Quick mock for Brain icon
const Brain = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-5.224 4.473 4 4 0 0 0 5.142 4.593 4 4 0 0 0 3.101 4.319 3 3 0 0 0 5.956.002 4 4 0 0 0 3.101-4.319 4 4 0 0 0 5.142-4.593 4 4 0 0 0-5.224-4.473 3 3 0 1 0-5.997-.125z"/><path d="M12 5v14"/></svg>;

export default SkillsSection;
