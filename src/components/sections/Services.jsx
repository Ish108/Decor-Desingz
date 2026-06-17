import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesList = [
  {
    title: 'Bespoke Turnkey Interiors',
    desc: 'From architectural conceptualization to final decor placement, we handle every detail of your luxury villa or apartment.',
    img: 'https://decoredesignz.com/wp-content/uploads/2026/02/1-805x683.png.webp'
  },
  {
    title: 'Premium Modular Kitchens',
    desc: 'State-of-the-art, custom-built modular kitchens that combine sleek aesthetics with unparalleled ergonomic efficiency.',
    img: 'https://decoredesignz.com/wp-content/uploads/2026/02/2-805x683.png.webp'
  },
  {
    title: 'Commercial & Retail Spaces',
    desc: 'Designing captivating corporate and retail environments that elevate your brand identity and inspire productivity.',
    img: 'https://decoredesignz.com/wp-content/uploads/2026/02/3-805x683.png.webp'
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section 
      id="services" 
      className="section" 
      style={{ 
        backgroundColor: 'var(--color-surface)', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        padding: '10rem 4rem',
        position: 'relative'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '4rem', color: 'var(--color-accent)' }}>
          Our Signature Services
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {servicesList.map((service, i) => (
            <div 
              key={i}
              className="hover-target"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: '3rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: hoveredIndex === i ? 'var(--color-text)' : 'rgba(255,255,255,0.4)',
                transition: 'color 0.4s ease'
              }}
            >
              <h3 className="font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', margin: 0, fontWeight: 400 }}>
                {service.title}
              </h3>
              <p className="font-sans" style={{ width: '30%', fontSize: '1rem', lineHeight: 1.5, opacity: hoveredIndex === i ? 1 : 0, transition: 'opacity 0.4s ease', transform: hoveredIndex === i ? 'translateX(0)' : 'translateX(20px)' }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Reveal */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10%',
              transform: 'translateY(-50%)',
              width: '400px',
              height: '500px',
              pointerEvents: 'none',
              zIndex: 1,
              overflow: 'hidden',
              borderRadius: '8px'
            }}
          >
            <motion.img 
              src={servicesList[hoveredIndex].img} 
              alt={`${servicesList[hoveredIndex].title} - Decore Designz Hyderabad`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
