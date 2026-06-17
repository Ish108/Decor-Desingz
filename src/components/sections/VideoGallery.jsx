import { motion } from 'framer-motion';

const videos = [
  { id: 1, title: '3BHK Flat House Tour', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0300-1440x720.jpg' },
  { id: 2, title: 'Villa Interior Hyderabad', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0307-1440x720.jpg' },
  { id: 3, title: 'Modern Living Space', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0312-1440x720.jpg' },
  { id: 4, title: 'Luxury Bedroom', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0335-1440x720.jpg' },
  { id: 5, title: 'Modern Bathroom', img: '/images/modern_bathroom.png' },
  { id: 6, title: 'Modular Kitchen', img: '/images/modular_kitchen.png' },
];

export default function VideoGallery() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '8rem 0' }}>
      <div className="container">
        <h2 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-text)', textAlign: 'center' }}>
          A Cinematic Look at Our Work
        </h2>
        <p className="font-sans" style={{ textAlign: 'center', color: 'var(--color-gray)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          Step inside our completed projects and experience the meticulous attention to detail that defines a Decore Designz home.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {videos.map((vid, i) => (
            <motion.div 
              key={vid.id}
              className="hover-target group"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: i * 0.1 }}
              style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9', cursor: 'pointer' }}
              whileHover="hover"
            >
              <motion.img 
                src={vid.img} 
                alt={`${vid.title} Video Tour - Luxury Interior Design`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.4 }}
              />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.2)' }} />
              {/* Play Button Overlay */}
              <motion.div 
                initial={{ x: "-50%", y: "-50%", scale: 1 }}
                style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  width: '70px',
                  height: '70px',
                  backgroundColor: 'rgba(230, 40, 40, 0.9)', // Red play button
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}
                variants={{ hover: { scale: 1.1, x: "-50%", y: "-50%" } }}
              >
                <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid white', marginLeft: '5px' }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
