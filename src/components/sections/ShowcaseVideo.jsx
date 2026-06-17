import { motion } from 'framer-motion';

export default function ShowcaseVideo() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)', padding: '0', margin: '4rem 0' }}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ width: '100%', height: '80vh', position: 'relative' }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#000' }}
        >
          <source src="https://decoredesignz.com/wp-content/uploads/2026/02/09105-1.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)'
        }} />
      </motion.div>
    </section>
  );
}
