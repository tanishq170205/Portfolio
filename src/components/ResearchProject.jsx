import React from 'react';
import { HeartPulse, ExternalLink, Activity } from 'lucide-react';
import { Github } from './Icons';
import './ResearchProject.css';

const ResearchProject = () => {
  return (
    <section className="research-project section-padding">
      <div className="container">
        <h2 className="section-title">Research Project</h2>
        
        <div className="research-card glass-panel">
          <div className="research-header">
            <HeartPulse size={40} className="text-gradient-cyan" />
            <div>
              <h3>CardioSense AI</h3>
              <p className="subtitle">AI-powered heart disease classification system</p>
            </div>
          </div>
          
          <div className="research-content">
            <p className="research-desc">
              A comprehensive system utilizing ML, Fuzzy Logic, and Ensemble Learning for binary and multi-class classification of heart disease. Employs SMOTE for data balancing and rigorous hyperparameter tuning to achieve clinical-grade accuracy.
            </p>
            
            <div className="research-metrics">
              <div className="metric-item">
                <span className="value text-gradient">92%</span>
                <span className="label">Classification Accuracy</span>
              </div>
              <div className="metric-item">
                <span className="value text-gradient-cyan">&lt;100ms</span>
                <span className="label">Inference Latency</span>
              </div>
              <div className="metric-item">
                <span className="value text-gradient">35%</span>
                <span className="label">Latency Reduction</span>
              </div>
            </div>
            
            <div className="research-models">
              <span className="model-tag">XGBoost</span>
              <span className="model-tag">LightGBM</span>
              <span className="model-tag">ANN</span>
              <span className="model-tag">Random Forest</span>
            </div>
            
            <div className="research-actions">
              <a href="#" className="btn-secondary glass-panel">
                <Activity size={18} /> View Metrics (ROC/F1)
              </a>
              <a href="#" className="btn-secondary glass-panel">
                <Github size={18} /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchProject;
