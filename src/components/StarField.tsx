import React, { useEffect, useRef } from 'react';

export function StarField() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    const container = starsRef.current;
    const starCount = 50;

    // Clear existing stars
    container.innerHTML = '';

    // Create stars with random positions and delays
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random size between 1-2px
      const size = Math.random() * 1 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      container.appendChild(star);
    }
  }, []);

  return (
    <>
      <div className="stars" ref={starsRef} />
      <div className="moon" aria-hidden="true" />
    </>
  );
}