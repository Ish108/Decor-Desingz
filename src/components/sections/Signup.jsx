export default function Signup() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ 
          backgroundColor: 'var(--color-surface)', 
          padding: '4rem', 
          borderRadius: '24px', 
          textAlign: 'center',
          border: '1px solid var(--color-border)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
        }}>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
            Elevate Your Space
          </h2>
          <p className="font-sans" style={{ color: 'var(--color-gray)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Subscribe to our exclusive newsletter for premium luxury interior design inspiration, trends, and early access to VIP consultations.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to our newsletter!");
            }}
            style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}
          >
            <input 
              type="email" 
              placeholder="Your Email Address" 
              style={{ 
                flex: 1, 
                padding: '1rem 1.5rem', 
                borderRadius: '50px', 
                border: '1px solid var(--color-border)', 
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem'
              }} 
            />
            <button 
              className="hover-target"
              type="submit" 
              style={{ 
                padding: '1rem 2.5rem', 
                borderRadius: '50px', 
                backgroundColor: 'var(--color-text)', 
                color: 'var(--color-surface)', 
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
