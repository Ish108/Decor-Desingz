import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Do you offer complete turnkey interior execution?", a: "Yes, we handle everything from 2D/3D design conceptualization to the final flawless execution, ensuring zero stress for our clients." },
  { q: "How long does a typical luxury 3BHK flat interior take?", a: "Depending on the design complexity and material choices, a standard luxury 3BHK flat interior in Hyderabad takes about 45-60 days to complete." },
  { q: "Do you design and execute commercial spaces?", a: "Absolutely. We design and execute both bespoke luxury residential interiors and premium commercial workspaces." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)', padding: '8rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '4rem', color: 'var(--color-text)', textAlign: 'center' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="hover-target"
              style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', cursor: 'pointer' }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
                <h3 className="font-sans" style={{ fontSize: '1.2rem', fontWeight: 500, margin: 0 }}>{faq.q}</h3>
                <span style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>{openIndex === i ? '−' : '+'}</span>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="font-sans" style={{ paddingBottom: '1rem', color: 'var(--color-gray)', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
