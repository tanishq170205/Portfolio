import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Don't show on mobile
    if (window.innerWidth < 768) return;

    const updateCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animateFollower = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12;
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animateFollower);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    // Hoverable elements
    const updateHover = () => {
      const interactives = document.querySelectorAll('a, button, .project-card, .achievement-card, .skill-item, .navbar__tab');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    rafRef.current = requestAnimationFrame(animateFollower);
    
    setTimeout(updateHover, 1000);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`cursor ${hovered ? 'cursor--hovered' : ''} ${clicked ? 'cursor--clicked' : ''} ${hidden ? 'cursor--hidden' : ''}`}
      />
      {/* Trailing circle */}
      <div
        ref={followerRef}
        className={`cursor-follower ${hovered ? 'cursor-follower--hovered' : ''} ${hidden ? 'cursor-follower--hidden' : ''}`}
      />
    </>
  );
};

export default Cursor;
