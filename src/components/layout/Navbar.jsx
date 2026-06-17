import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        mixBlendMode: 'difference', // Makes it invert automatically against black/white backgrounds
        color: '#fff'
      }}
    >
      <div className="logo hover-target" style={{ cursor: 'none' }}>
        <img 
          src="https://decoredesignz.com/wp-content/uploads/2020/03/logo_final_white.png" 
          alt="Decore Designz Logo" 
          style={{ height: '70px', objectFit: 'contain' }} // Larger logo
        />
      </div>
      
      <div className="nav-links font-sans" style={{ display: 'flex', gap: '3rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover-target" style={{ cursor: 'none', color: '#fff' }}>About</a>
        <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover-target" style={{ cursor: 'none', color: '#fff' }}>Services</a>
        <a href="#portfolio" onClick={(e) => scrollTo(e, 'portfolio')} className="hover-target" style={{ cursor: 'none', color: '#fff' }}>Portfolio</a>
        <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover-target" style={{ cursor: 'none', color: '#fff' }}>Contact</a>
      </div>
    </motion.nav>
  );
}
