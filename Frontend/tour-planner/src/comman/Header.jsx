import React, { useState } from 'react';
import logo from '../assets/tour-planner.jpg';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      style={{
        backgroundColor: '#ffffff',
        padding: '20px 40px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Tour-Planner Logo"
        style={{
          position: 'absolute',
          left: '30px',
          width: '120px', // Increased size
          height: '120px', // Increased size
          borderRadius: '50%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15) rotate(10deg)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />

      {/* Heading */}
      <h1
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          margin: 0,
          fontSize: '4rem',
          fontWeight: '900',
          textTransform: 'uppercase',
          textAlign: 'center',
          background: 'linear-gradient(90deg, #ff416c, #ff4b2b, #f9d423, #00c6ff)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '3px',
          textShadow: '2px 2px 8px rgba(0,0,0,0.3), 0 0 15px rgba(255,255,255,0.3)',
          cursor: 'pointer',
          transition: 'all 0.5s ease, transform 0.3s ease',
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          animation: isHovered ? 'gradientShift 4s ease infinite' : 'none',
        }}
      >
        Tour-Planner
      </h1>

      {/* Animated gradient keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
    </header>
  );
}
