import { motion } from 'framer-motion';

export default function About() {
  const transition = { duration: 1.2, ease: [0.76, 0, 0.24, 1] };

  return (
    <section id="about" className="section" style={{ padding: '12rem 0', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side: Typography */}
        <motion.div 
          style={{ flex: 1, paddingRight: '2rem' }}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <h2 className="font-serif" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1.1, color: 'var(--color-text)', textTransform: 'uppercase', marginBottom: '2rem' }}>
            Crafting<br />Bespoke<br />Living.
          </h2>
          <p className="font-sans" style={{ fontSize: '1.2rem', color: 'var(--color-gray)', maxWidth: '500px', lineHeight: 1.8, marginBottom: '3rem' }}>
            At Decore Designz, we don't just design rooms; we curate lifestyles. With over a decade of expertise, our award-winning team flawlessly blends breathtaking aesthetics with everyday functionality to create spaces that are distinctly yours.
          </p>
          <button 
            className="hover-target" 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '1.2rem 3rem', backgroundColor: 'transparent', color: 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: '50px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer', fontWeight: '600' }}
          >
            Discover Our Process ↗
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
            <img src="https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0300-1440x720.jpg" alt="Interior Design 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.3 }}
            style={{ position: 'absolute', bottom: 0, left: 0, width: '55%', height: '60%', borderRadius: '12px', overflow: 'hidden', border: '10px solid var(--color-surface)' }}
          >
            <img src="https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0335-1440x720.jpg" alt="Interior Design 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
