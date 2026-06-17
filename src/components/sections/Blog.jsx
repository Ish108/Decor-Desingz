import { motion } from 'framer-motion';

const blogs = [
  { id: 1, title: 'Top Interior Design Trends for 2026', date: 'March 15, 2026', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0300-1440x720.jpg' },
  { id: 2, title: 'How to Choose the Right Wardrobe Finishes', date: 'April 02, 2026', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0312-1440x720.jpg' },
  { id: 3, title: 'Maximizing Space in a 3BHK Apartment', date: 'May 10, 2026', img: 'https://decoredesignz.com/wp-content/uploads/2025/09/IMG_0335-1440x720.jpg' }
];

export default function Blog() {
  return (
    <section className="section" style={{ padding: '8rem 0', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <h2 className="font-serif" style={{ fontSize: '3.5rem', color: 'var(--color-text)', margin: 0 }}>
            Design Insights & Trends
          </h2>
          <span className="hover-target" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-gray)', cursor: 'pointer', borderBottom: '1px solid var(--color-gray)' }}>
            View All Articles
          </span>
        </div>

        <div style={{ display: 'flex', gap: '2rem', overflowX: 'hidden' }}>
          {blogs.map((blog, i) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.1 }}
              style={{ flex: 1, minWidth: '300px', cursor: 'pointer' }}
              className="hover-target"
            >
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', aspectRatio: '4/3' }}>
                <motion.img src={blog.img} alt={`${blog.title} - Interior Design Blog`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="blog-img" />
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{blog.date}</p>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--color-text)', lineHeight: 1.3 }}>{blog.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .hover-target:hover .blog-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
