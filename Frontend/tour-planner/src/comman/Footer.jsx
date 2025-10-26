import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your local temple images
import temple1 from '../assets/temple1.jpg';
import temple2 from '../assets/temple2.jpg';
import temple3 from '../assets/temple3.jpg';

export default function Footer() {
  const images = [temple1, temple2, temple3]; // array of local images
  const [currentImage, setCurrentImage] = useState(0);

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5000ms = 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '40px 20px',
        marginTop: '40px',
        position: 'relative',
        transition: 'background-image 1s ease-in-out', // smooth transition
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* About Section */}
        <div style={{ flex: '1 1 250px', margin: '10px' }}>
          <h2 style={{ color: '#00b4d8' }}>Tour-Planner</h2>
          <p>
            Plan your perfect journey effortlessly and explore the world with unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 150px', margin: '10px' }}>
          <h3 style={{ color: '#00b4d8' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>AboutUs</Link></li>
            <li><Link to="/destinations" style={linkStyle}>Destinations</Link></li>
            <li><Link to="/contact" style={linkStyle}>ContactUs</Link></li>
            <li><Link to="/enquiry" style={linkStyle}>Enquiry</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 250px', margin: '10px' }}>
          <h3 style={{ color: '#00b4d8' }}>Contact Us</h3>
          <p><MapPin size={16} style={iconStyle}/> 555 Kachhawa Road, Mirzapur, India</p>
          <p><Phone size={16} style={iconStyle}/> +91 98765 43210</p>
          <p><Mail size={16} style={iconStyle}/> tourplanner@gmail.com</p>
        </div>

        {/* Social Media */}
        <div style={{ flex: '1 1 150px', margin: '10px' }}>
          <h3 style={{ color: '#00b4d8' }}>Follow Us</h3>
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialStyle}><Facebook size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialStyle}><Instagram size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialStyle}><Twitter size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialStyle}><Linkedin size={24} /></a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={socialStyle}><MessageCircle size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright & Developed By */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          borderTop: '1px solid #1e2a3a',
          paddingTop: '15px',
          fontSize: '0.9rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        © {new Date().getFullYear()} Tour-Planner | All Rights Reserved 🌏

        {/* Developed By on bottom right */}
        <div
          style={{
            position: 'absolute',
            right: '30px',
            bottom: '20px',
            fontSize: '1.3rem',
            color: '#eeeeeeff',
          }}
        >
          Developed by:- Raj Kumar Chaurasiya
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  transition: '0.3s',
};

const iconStyle = {
  marginRight: '8px',
  verticalAlign: 'middle',
  color: '#00b4d8',
};

const socialStyle = {
  color: '#00b4d8',
  fontSize: '1.5rem',
  transition: '0.3s',
};
