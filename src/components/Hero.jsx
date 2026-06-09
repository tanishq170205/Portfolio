import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const ROLES = [
  'a Full Stack Developer',
  'an AI / ML Engineer',
  'a Backend Developer',
  'a Systems Builder',
];

// Generate floating particles
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.4 + 0.1,
}));

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const canvasRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      {/* Cinematic image background with Ken Burns motion */}
      <div className="hero__video-bg" />

      {/* Animated particle canvas */}
      <div className="hero__particles">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="hero__particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>

      {/* Background texture */}
      <div className="hero__bg-grain"></div>
      <div className="hero__bg-grid"></div>

      <div className="container hero__container">
        {/* Left */}
        <div className="hero__left">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot"></span>
            <span className="hero__eyebrow-text">Available for opportunities · IIIT Kota · CGPA 7.74</span>
          </div>

          <h1 className="hero__name">
            <span className="hero__name-line">Tanishq</span>
            <span className="hero__name-line hero__name-line--gold">Sharma.</span>
          </h1>

          <div className="hero__role-wrapper">
            <span className="hero__role-prefix">I am </span>
            <span className="hero__role-typed">{displayed}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__bio">
            CS engineer at IIIT Kota, bridging the world of <strong>AI/ML research</strong> and 
            <strong> production-grade SDE</strong>. I turn complex problems into elegant, 
            high-impact solutions.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <path d="m8 21 4-4 4 4"/><path d="M12 17v4"/>
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline">
              Let's Talk
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/tanishq170205" target="_blank" rel="noreferrer" className="hero__social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/tanishq-sharma-06a9b1270" target="_blank" rel="noreferrer" className="hero__social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a href="mailto:tanishqsharmait@gmail.com" className="hero__social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Right — Photo */}
        <div className="hero__right">
          <div className="hero__photo-wrapper">
            {/* Rotating ring */}
            <div className="hero__photo-ring">
              <div className="hero__photo-ring-inner"></div>
            </div>

            <div className="hero__photo-frame">
              <img
                src="/profile.jpg"
                alt="Tanishq Sharma"
                className="hero__photo"
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Tanishq+Sharma&size=512&background=c9a84c&color=080808&bold=true"; }}
              />
              <div className="hero__photo-shimmer"></div>
            </div>

            <div className="hero__photo-badge">
              <div className="hero__badge-dot"></div>
              <div>
                <span>Open to</span>
                <strong>Internships & FTE</strong>
              </div>
            </div>

            {/* Floating skill chips */}
            <div className="hero__chip hero__chip--1">
              <span>⚡</span> React + Node
            </div>
            <div className="hero__chip hero__chip--2">
              <span>🤖</span> ML / AI
            </div>
            <div className="hero__chip hero__chip--3">
              <span>🏆</span> 8th / 200+ teams
            </div>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">5+</span>
              <span className="hero__stat-label">Major Projects</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">500+</span>
              <span className="hero__stat-label">DSA Problems</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">7.74</span>
              <span className="hero__stat-label">CGPA · IIIT Kota</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
