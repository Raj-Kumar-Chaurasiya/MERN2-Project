import React, { useState, useEffect } from 'react';
import Header from '../comman/Header';
import Navbar from '../comman/Navbar';
import Footer from '../comman/Footer';
import { MapPin, Calendar, Users, Camera } from 'lucide-react';

// Import your local temple images
import temple1 from '../assets/forest.jpg';
import temple2 from '../assets/snow.jpg';
import temple3 from '../assets/desert.jpg';

export default function AboutUs() {
  const features = [
    {
      icon: <MapPin size={24} />,
      title: 'Customizable Tours',
      description: 'Plan your trips with personalized itineraries, including destinations, activities, and timing.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Easy Booking',
      description: 'Book tours, hotels, and activities effortlessly with our integrated booking system.'
    },
    {
      icon: <Users size={24} />,
      title: 'Group Planning',
      description: 'Invite friends or family to collaborate and plan trips together in real-time.'
    },
    {
      icon: <Camera size={24} />,
      title: 'Photo Memories',
      description: 'Capture and store your travel memories with our photo and journal features.'
    }
  ];

  // Rotating background images
  const images = [temple1, temple2, temple3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <Navbar />

      {/* Background Section */}
      <section
        className="about-us-container"
        style={{
          position: 'relative',
          padding: '50px 20px',
          textAlign: 'center',
          color: '#fff',
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex:0
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>About Tour Planner</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Tour Planner is your ultimate travel companion. Plan trips, book activities, and create unforgettable memories with our intuitive platform. From solo adventures to group vacations, we help you explore the world effortlessly.
          </p>

          <div className="features-grid" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{
                  flex: '0 1 250px',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)', // semi-transparent for readability
                  color: '#000',
                }}
              >
                <div style={{ marginBottom: '15px', color: '#3b82f6' }}>{feature.icon}</div>
                <h3 style={{ marginBottom: '10px' }}>{feature.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#333' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
