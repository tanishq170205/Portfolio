import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <div className="about__photo-container">
              <img
                src="/about-photo.jpg"
                alt="Tanishq Sharma"
                className="about__photo"
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Tanishq+Sharma&size=512&background=c9a84c&color=0a0a0a&bold=true"; }}
              />
              <div className="about__photo-overlay"></div>
              <div className="about__photo-corner about__photo-corner--tl"></div>
              <div className="about__photo-corner about__photo-corner--br"></div>
            </div>

            <div className="about__quick-facts">
              <div className="about__fact">
                <span className="about__fact-label">Institution</span>
                <span className="about__fact-value">IIIT Kota</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Degree</span>
                <span className="about__fact-value">B.Tech ECE</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">CGPA</span>
                <span className="about__fact-value">7.74</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Batch</span>
                <span className="about__fact-value">2023 – 2027</span>
              </div>
            </div>
          </div>

          <div className="about__right">
            <p className="section-eyebrow">Who I Am</p>
            <h2 className="section-title">
              I Am a Builder at the <span>Intersection</span><br />of ML & Engineering
            </h2>
            <div className="gold-divider"></div>

            <p className="about__para">
              Hey! I'm <strong>Tanishq Sharma</strong> — a Full Stack Developer and AI Researcher 
              pursuing B.Tech at IIIT Kota. My fascination with technology began when I realized 
              the immense power of algorithms to solve complex, real-world problems.
            </p>

            <p className="about__para">
              I thrive at the crossroads of <strong className="about__highlight">Machine Learning</strong> and 
              <strong className="about__highlight"> Software Engineering</strong>. Whether it's training neural 
              networks on cardiac datasets or architecting Kanban boards with real-time collaboration — 
              I love seeing ideas become real, impactful products.
            </p>

            <p className="about__para">
              I have solved <strong>500+ DSA problems</strong> across LeetCode &amp; CodeForces and built 
              <strong> 5+ major projects</strong> ranging from ML pipelines to full-stack platforms. 
              I've led hackathon teams, managed event budgets as Finance Executive, and competed 
              at state-level sports — all shaping me into someone who delivers under pressure.
            </p>

            <div className="about__interests">
              {['Deep Learning', 'Backend Systems', 'DSA', 'System Design', 'Open Source', 'Hackathons'].map(tag => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>

            <div className="about__cta-row">
              <a
                href="https://linkedin.com/in/tanishq-sharma-06a9b1270"
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                LinkedIn Profile
              </a>
              <a href="#contact" className="btn btn--outline">
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
