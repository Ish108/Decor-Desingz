import { motion } from 'framer-motion';

const portfolioItems = [
  { id: 1, title: 'Luxury 3BHK Flat, Kondapur', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0484-1440x720.jpg' },
  { id: 2, title: 'Premium Villa Interiors, Kokapet', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0414-1440x720.jpg' },
  { id: 3, title: 'Modern Living Spaces', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0430-1440x720.jpg' },
  { id: 4, title: 'Bespoke Bedrooms', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0305-1440x720.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '10rem 0' }}>
      <div className="container">
        <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-accent)', textAlign: 'center' }}>
          Explore Our Masterpieces
        </h2>
        <p className="font-sans" style={{ textAlign: 'center', color: 'var(--color-gray)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          A curated gallery of our most prestigious turnkey interior projects in Hyderabad.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="hover-target"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                cursor: 'pointer',
                marginTop: index % 2 !== 0 ? '6rem' : '0' // staggered layout
              }}
              whileHover="hover"
            >
              <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}>
                <motion.img 
                  src={item.img} 
                  alt={`${item.title} - Decore Designz Showcase`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  variants={{
                    hover: { scale: 1.1, filter: 'brightness(1.2)' }
                  }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>
              <motion.div 
                style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  padding: '2rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                }}
                variants={{
                  hover: { y: 0, opacity: 1 }
                }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>
                  {item.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
