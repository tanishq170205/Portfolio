import React from 'react';
import { User, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="container">
        <h2 className="section-title light">About Me</h2>
        
        <div className="about-grid">
          <div className="about-content">
            <h3 className="about-greeting">Hey! 👋 I'm Tanishq</h3>
            <p>
              I'm a Full Stack Developer & AI Researcher currently pursuing my B.Tech in Computer Science and Engineering at IIIT Kota. My fascination with technology began when I realized the immense power of algorithms to solve complex, real-world problems.
            </p>
            <p>
              Today, I'm passionate about building scalable applications and intelligent systems that genuinely help people. I love the challenge of breaking down complex logic and machine learning concepts into functional, impactful products.
            </p>
            <p>
              Collaboration fuels my work. I thrive in environments where ideas are exchanged freely, and where working with others sparks innovation and creativity. Whether in hackathons, team projects, or solo ventures, I'm driven by the excitement of seeing tangible results.
            </p>
          </div>
          
          <div className="about-img-section">
            <img 
              src="/profile.jpg" 
              alt="Tanishq Sharma" 
              className="about-profile-img" 
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Tanishq+Sharma&size=512&background=0D8ABC&color=fff"; }}
            />
            
            <div className="about-socials">
              <a href="#" className="social-icon">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-icon">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="#" className="social-icon">
                <User size={24} />
                <span>Student Profile</span>
              </a>
              <a href="#" className="social-icon">
                <Mail size={24} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
