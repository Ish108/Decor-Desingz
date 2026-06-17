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
        color: '#fff'
      }}
    >
      <div className="logo hover-target" style={{ cursor: 'none' }}>
        <img 
          src="/logo_final.png" 
          alt="Decore Designz Logo" 
          style={{ 
            height: '80px', 
            objectFit: 'contain',
            filter: 'invert(1) hue-rotate(180deg)',
            mixBlendMode: 'screen',
            marginTop: '-10px'
          }} 
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
