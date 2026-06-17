import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const videos = [
  '/videos/Initial_Scene_-_2026-06-17_202606172018.mp4',
  '/videos/Initial_Scene_-_2026-06-17_202606172016.mp4'
];

export default function Hero() {
  const containerRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const titleVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section 
      ref={containerRef}
      className="hero section" 
      style={{ 
        minHeight: '100vh', 
        padding: '0', 
        overflow: 'hidden', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }}
    >
      {/* Background Video Wrapper */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video 
          key={videos[currentVideoIndex]} // Re-mounts video to autoPlay next source
          autoPlay 
          muted 
          playsInline
          onEnded={handleVideoEnd}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(3,3,3,0.3) 0%, rgba(3,3,3,0.6) 100%)'
        }} />
      </motion.div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginTop: '5rem' }}>
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 
            custom={0}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="font-serif" 
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', lineHeight: 1.1, marginBottom: '0.5rem', color: '#fff' }}
          >
            Transforming Spaces
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 
            custom={1}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="font-serif" 
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: '#fff' }}
          >
            Into Masterpieces.
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          <motion.p
            custom={2}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="font-sans"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', lineHeight: 1.6 }}
          >
            Hyderabad's Premier Luxury Interior Design Studio. We craft bespoke, turnkey residential and commercial interiors.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
