import { motion } from 'framer-motion';

export default function ProjectGallery() {
  const transition = { duration: 1.2, ease: [0.76, 0, 0.24, 1] };

  return (
    <section id="project-gallery" className="section" style={{ padding: '8rem 0 12rem', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side: Typography */}
        <motion.div 
          style={{ flex: 1, paddingRight: '2rem' }}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <h2 className="font-serif" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, color: 'var(--color-text)', marginBottom: '2rem' }}>
            Project Gallery
          </h2>
          <p className="font-sans" style={{ fontSize: '1.2rem', color: 'var(--color-gray)', maxWidth: '500px', lineHeight: 1.8, marginBottom: '3rem' }}>
            View our collection of well-thought-out commercial spaces, luxury villas and flat interiors created by one of Hyderabad's top interior designers. Every project showcases our proficiency in fusing imagination and practicality to produce sophisticated, useful, and long-lasting environments.
          </p>
          <button 
            className="hover-target" 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '1.2rem 3rem', backgroundColor: 'transparent', color: 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: '50px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer', fontWeight: '600' }}
          >
            Explore Projects ↗
          </button>
        </motion.div>

        {/* Right Side: Asymmetrical Images */}
        <div style={{ flex: 1, position: 'relative', height: '800px' }}>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            style={{ position: 'absolute', top: 0, right: 0, width: '70%', height: '70%', borderRadius: '12px', overflow: 'hidden' }}
          >
            <img src="https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0414-1440x720.jpg" alt="Prestige High Field" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Prestige High Field</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.3 }}
            style={{ position: 'absolute', bottom: 0, left: 0, width: '55%', height: '60%', borderRadius: '12px', overflow: 'hidden', border: '10px solid var(--color-surface)' }}
          >
            <img src="https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0305-1440x720.jpg" alt="Casa Levanta Apartment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              <h3 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Casa Levanta Apartment</h3>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
