import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds total loading time
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500); // Wait a bit at 100% before hiding
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color-bg)',
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--color-text)'
      }}
    >
      <div className="font-serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Decore Designz.
      </div>
      <div className="progress-text font-sans" style={{ fontSize: '5rem', fontWeight: 300, color: 'var(--color-accent)' }}>
        {progress}%
      </div>
      <div 
        style={{ 
          width: '200px', 
          height: '1px', 
          backgroundColor: 'rgba(255,255,255,0.1)',
          marginTop: '2rem',
          position: 'relative'
        }}
      >
        <motion.div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: 'var(--color-accent)',
            width: `${progress}%`
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
}
