import { motion } from 'framer-motion';

export default function Trust() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', color: 'white', minHeight: '56.25vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background Video */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#000' }}
        >
          {/* Using the showcase video as the background here */}
          <source src="https://decoredesignz.com/wp-content/uploads/2026/02/09105-1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '4rem', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#fff' }}>
            Why Hyderabad Homeowners Choose Us
          </h2>
          <p className="font-sans" style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            "Decore Designz completely transformed our 3BHK flat in Jubilee Hills into a luxury haven. Their turnkey execution was flawless, saving us immense time and stress."
          </p>
          <p className="font-sans" style={{ marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', color: 'var(--color-accent)' }}>
            - R. Sharma, Happy Homeowner in Hyderabad
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="font-serif" style={{ fontSize: '5rem', color: '#fff', lineHeight: 1, marginBottom: '0.2rem' }}>5.0</div>
            <p className="font-sans" style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Google Rating</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="font-serif" style={{ fontSize: '5rem', color: '#fff', lineHeight: 1, marginBottom: '0.2rem' }}>11+</div>
            <p className="font-sans" style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
