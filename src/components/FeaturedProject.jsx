import React from 'react';
import { Database, Server, Smartphone, Brain, Lock, Activity, ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import './FeaturedProject.css';

const FeaturedProject = () => {
  return (
    <section id="projects" className="featured-project section-padding">
      <div className="container">
        <h2 className="section-title">Featured Project: Sakhi</h2>
        
        <div className="project-grid">
          {/* Left: Info */}
          <div className="project-info">
            <h3 className="project-name">Multimodal Healthcare Platform</h3>
            <p className="project-desc">
              A futuristic, AI-powered full-stack healthcare platform focused on improving women’s health, emotional well-being, and accessibility. Sakhi combines Multimodal Emotion Understanding, Predictive Healthcare, LLM-based Conversational AI, and Blockchain Security into a single intelligent ecosystem.
            </p>
            
            <div className="metrics-grid">
              <div className="metric-box glass-panel">
                <span className="metric-value text-gradient-cyan">~100ms</span>
                <span className="metric-label">API Latency</span>
              </div>
              <div className="metric-box glass-panel">
                <span className="metric-value text-gradient">90%+</span>
                <span className="metric-label">Accuracy</span>
              </div>
              <div className="metric-box glass-panel">
                <span className="metric-value text-gradient-cyan">Hybrid</span>
                <span className="metric-label">LLM + CNN</span>
              </div>
            </div>

            <div className="tech-tags">
              <span>React</span>
              <span>FastAPI</span>
              <span>PyTorch</span>
              <span>LLaMA/Mistral</span>
              <span>Hyperledger</span>
              <span>WebRTC</span>
            </div>

            <div className="project-links">
              <a href="#" className="btn-primary">
                View Live System <ExternalLink size={18} />
              </a>
              <a href="#" className="btn-secondary glass-panel">
                <Github size={18} /> Source Code
              </a>
            </div>
          </div>

          {/* Right: Architecture Flow */}
          <div className="project-visual glass-panel">
            <h4 className="visual-title font-mono">system_architecture.drawio</h4>
            
            <div className="arch-flow">
              <div className="arch-layer client-layer">
                <Smartphone className="arch-icon" />
                <span>Frontend React UI</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="arch-layer api-layer">
                <Server className="arch-icon" />
                <span>FastAPI Orchestration Layer</span>
              </div>
              
              <div className="flow-split">
                <div className="flow-branch">
                  <div className="flow-arrow">↙</div>
                  <div className="arch-layer ai-layer pulse-node">
                    <Brain className="arch-icon" />
                    <span>AI Reasoning Engine<br/><small>(Emotion + PCOS + LLM)</small></span>
                  </div>
                </div>
                <div className="flow-branch">
                  <div className="flow-arrow">↘</div>
                  <div className="arch-layer data-layer">
                    <Database className="arch-icon" />
                    <Lock className="arch-icon" />
                    <span>PostgreSQL &<br/>Blockchain Storage</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Modules Section */}
        <div className="modules-grid mt-4">
            <div className="module-card glass-panel">
              <Activity className="module-icon text-gradient" />
              <h4>Emotion AI</h4>
              <p>CNN-based facial emotion detection combined with BERT/LLM text emotion understanding to evaluate distress scores.</p>
            </div>
            <div className="module-card glass-panel">
              <Brain className="module-icon text-gradient" />
              <h4>SakhiBot (LLM + RAG)</h4>
              <p>Context-aware conversational AI assistant merging health data, facial emotions, and text to generate safe, personalized guidance.</p>
            </div>
            <div className="module-card glass-panel">
              <Lock className="module-icon text-gradient" />
              <h4>Blockchain Security</h4>
              <p>Ensuring tamper-proof healthcare records by storing prescription hashes and medical report verification data.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
