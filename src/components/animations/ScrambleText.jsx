"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function ScrambleText({ text }) {
  const [displayedText, setDisplayedText] = useState(text);
  const scrambleIntervalRef = useRef(null);
  const originalTextRef = useRef(text); // Use a ref to store the original text

  // Function to shuffle characters in the text
  const shuffleText = (originalText) => {
    let characters = originalText.split('');
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]]; // Swap characters
    }
    return characters.join('');
  };

  const handleMouseEnter = () => {
    // Clear existing interval (if any) to ensure we start fresh
    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current);
    }

    // Scramble text at a faster rate
    scrambleIntervalRef.current = setInterval(() => {
      setDisplayedText(shuffleText(originalTextRef.current));
    }, 100); // Adjust this rate as needed

    // Set a timeout to stop scrambling and revert back to original text after half a second
    setTimeout(() => {
      clearInterval(scrambleIntervalRef.current); // Stop scrambling
      setDisplayedText(originalTextRef.current); // Revert to original text
    }, 500); // 500 milliseconds = half a second
  };

  const handleMouseLeave = () => {
    // Clear interval and timeout on mouse leave to ensure the text reverts back to original immediately
    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current);
    }
    setDisplayedText(originalTextRef.current);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
      }
    };
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {displayedText}
    </div>
  );
}
