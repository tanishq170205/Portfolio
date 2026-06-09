import React, { useState, useEffect, useCallback } from 'react';
import CinematicIntro from './components/CinematicIntro';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  useScrollReveal();

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
    setTimeout(() => setPortfolioVisible(true), 200);
  }, []);

  return (
    <>
      {/* Cinematic Intro — plays on first load */}
      {!introComplete && (
        <CinematicIntro onComplete={handleIntroComplete} />
      )}

      {/* Main Portfolio — fades in after intro */}
      <div className={`app ${portfolioVisible ? 'app--visible' : ''}`}>
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
