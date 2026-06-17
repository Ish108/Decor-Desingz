import { motion } from 'framer-motion';

const reviews = [
  { 
    id: 1, 
    author: 'Sandip R', 
    location: 'Hyderabad, TG.',
    text: 'Mr. Javeed and his team from Decore Designs, along with Mr. Mujeeb, have done excellent interior work for the villa. Right from designing to handover, we experienced smooth functioning throughout the project. Every corner of the villa offers a unique experience, reflecting their attention to detail and creativity. They were always cooperative, patient, and reliable, ensuring everything was completed to our satisfaction. We are very happy with their work and give them a positive response.',
    avatar: 'https://placehold.co/100x100/e2e8f0/1e293b?text=SR'
  },
  { 
    id: 2, 
    author: 'Bharti Vatwani', 
    location: 'Hyderabad, TG.',
    text: 'Working with Decore Designz team has been an exceptional experience from start to finish. Right from our first interaction, they demonstrated a clear ability to understand our needs and vision. The preparatory work and design blueprint were well-structured and shared with us transparently. One of the most impressive aspects was their timeliness, the project was completed as committed, without any unnecessary delays.',
    avatar: 'https://placehold.co/100x100/e2e8f0/1e293b?text=BV'
  },
  { 
    id: 3, 
    author: 'Suresh Raju Pilli', 
    location: 'Hyderabad, TG.',
    text: 'I recently had the pleasure of working with DecoreDesignz to perform interiors to my 3-bedroom apartment, and I couldn\'t be happier with the outcome! Their attention to detail is impressive - they transformed every room in my home into a beautiful, functional space that exceeds my expectations. The workmanship is top-notch. Their communication was transparent and regular, keeping me informed at every stage.',
    avatar: 'https://placehold.co/100x100/e2e8f0/1e293b?text=SP'
  },
  { 
    id: 4, 
    author: 'meena smily', 
    location: 'Hyderabad, TG.',
    text: '"I\'m thrilled to share my feedback on Decor Designz Studio! Javeed and his team truly exceeded my expectations. Javeed\'s deep knowledge and expertise in interior design was evident throughout the process. Sami, the talented in-house designer, listened attentively to our requirements and delivered impressive 3D designs that met our expectations. Highly recommend Decor Designz Studio for their professionalism and attention to detail!"',
    avatar: 'https://placehold.co/100x100/e2e8f0/1e293b?text=MS'
  }
];

export default function Testimonials() {
  return (
    <section className="section" style={{ padding: '8rem 0', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <h2 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-text)', textAlign: 'center' }}>
          Client Success Stories
        </h2>
        <p className="font-sans" style={{ textAlign: 'center', color: 'var(--color-gray)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          Don't just take our word for it. Hear from the families whose homes we've transformed.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: i * 0.1 }}
              style={{ borderRadius: '16px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', backgroundColor: 'var(--color-surface)' }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem', color: '#f59e0b' }}>
                  {/* 5 Stars */}
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--color-gray)', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic' }}>
                  "{review.text}"
                </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={review.avatar} alt={review.author} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-text)', fontWeight: '600' }}>{review.author}</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            className="hover-target" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '1.2rem 3rem', backgroundColor: 'var(--color-text)', color: 'var(--color-surface)', border: 'none', borderRadius: '50px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            See All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
