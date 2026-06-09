import React from 'react';
import { GitBranch, Box, Network, Columns } from 'lucide-react';
import './DSASection.css';

const DSASection = () => {
  return (
    <section id="dsa" className="dsa-section section-padding">
      <div className="container">
        <h2 className="section-title">Data Structures & Algorithms</h2>
        
        <div className="dsa-intro glass-panel">
          <p className="text-gradient">
            "I enjoy solving algorithmic optimization problems and building scalable systems."
          </p>
          <div className="stats-row">
            <div className="stat">
              <span className="stat-num">300+</span>
              <span className="stat-label">Problems Solved</span>
            </div>
            <div className="stat">
              <span className="stat-num">Top 5%</span>
              <span className="stat-label">LeetCode</span>
            </div>
            <div className="stat">
              <span className="stat-num">Pupil</span>
              <span className="stat-label">Codeforces</span>
            </div>
          </div>
        </div>

        <h3 className="sub-heading">Favorite Topics</h3>
        <div className="topics-grid">
          <div className="topic-card glass-panel">
            <Network size={28} className="topic-icon" />
            <h4>Graphs</h4>
            <div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div>
          </div>
          <div className="topic-card glass-panel">
            <Box size={28} className="topic-icon" />
            <h4>Dynamic Programming</h4>
            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
          </div>
          <div className="topic-card glass-panel">
            <GitBranch size={28} className="topic-icon" />
            <h4>Trees</h4>
            <div className="progress-bar"><div className="progress" style={{width: '95%'}}></div></div>
          </div>
          <div className="topic-card glass-panel">
            <Columns size={28} className="topic-icon" />
            <h4>Sliding Window</h4>
            <div className="progress-bar"><div className="progress" style={{width: '88%'}}></div></div>
          </div>
        </div>

        {/* Mock Heatmap */}
        <h3 className="sub-heading mt-4" style={{marginTop: '4rem'}}>Activity Heatmap</h3>
        <div className="heatmap-container glass-panel">
          <div className="heatmap-grid">
            {Array.from({length: 150}).map((_, i) => {
              const intensity = Math.floor(Math.random() * 5);
              return <div key={i} className={`heat-cell level-${intensity}`}></div>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSASection;
