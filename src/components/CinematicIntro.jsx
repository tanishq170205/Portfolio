import React, { useEffect, useRef, useState } from 'react';
import './CinematicIntro.css';

const CinematicIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('start');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('name'), 600);
    const t2 = setTimeout(() => setPhase('tagline'), 1600);
    const t3 = setTimeout(() => setPhase('exit'), 4200);
    const t4 = setTimeout(() => onComplete(), 5400);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`intro ${phase === 'exit' ? 'intro--exit' : ''}`}>

      {/* ── Real Kling AI video — fullscreen ── */}
      <div className="intro__video-bg">
        <video autoPlay muted loop playsInline className="intro__video-el">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Cinematic overlays ── */}
      <div className="intro__overlay" />
      <div className="intro__bar intro__bar--top" />
      <div className="intro__bar intro__bar--bottom" />

      {/* ── Left-aligned name like Jyoti Sinha style ── */}
      <div className="intro__center">

        <div className={`intro__logo ${phase !== 'start' ? 'intro__logo--visible' : ''}`}>
          <span className="intro__logo-bracket">[</span>
          <span className="intro__logo-text">T.S.</span>
          <span className="intro__logo-bracket">]</span>
        </div>

        <h1 className={`intro__name ${phase === 'name' || phase === 'tagline' ? 'intro__name--visible' : ''}`}>
          <span className="intro__name-word">
            {'Tanishq'.split('').map((char, i) => (
              <span key={i} className="intro__name-char" style={{ animationDelay: `${i * 0.07}s` }}>
                {char}
              </span>
            ))}
          </span>
          <span className="intro__name-char intro__name-char--space">&nbsp;</span>
          <span className="intro__name-word">
            {'Sharma'.split('').map((char, i) => (
              <span key={i + 8} className="intro__name-char intro__name-char--gold" style={{ animationDelay: `${(i + 8) * 0.07}s` }}>
                {char}
              </span>
            ))}
          </span>
        </h1>

        <div className={`intro__tagline ${phase === 'tagline' ? 'intro__tagline--visible' : ''}`}>
          <span className="intro__tag">Full Stack Developer</span>
          <span className="intro__tag-divider">·</span>
          <span className="intro__tag">ML Engineer</span>
          <span className="intro__tag-divider">·</span>
          <span className="intro__tag">Backend</span>
        </div>

        <div className={`intro__meta ${phase === 'tagline' ? 'intro__meta--visible' : ''}`}>
          <span>IIIT KOTA</span>
          <span className="intro__meta-dot">◆</span>
          <span>B.TECH ECE 2027</span>
          <span className="intro__meta-dot">◆</span>
          <span>CGPA 7.74</span>
        </div>

      </div>

      {/* ── Corner brackets ── */}
      <div className="intro__corner intro__corner--tl"><span></span><span></span></div>
      <div className="intro__corner intro__corner--tr"><span></span><span></span></div>
      <div className="intro__corner intro__corner--bl"><span></span><span></span></div>
      <div className="intro__corner intro__corner--br"><span></span><span></span></div>

      {/* ── Bottom bar info ── */}
      <div className="intro__frame-counter">
        <span>24fps</span>
        <span>4K</span>
        <span>KLING AI</span>
      </div>

      <button className="intro__skip" onClick={onComplete}>Skip ›</button>
    </div>
  );
};

export default CinematicIntro;
