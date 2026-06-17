export default function Footer() {
  return (
    <>


      <footer id="contact" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container" style={{ display: 'flex', gap: '4rem' }}>
          <div style={{ flex: 1 }}>
            <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to design your dream home in Hyderabad?</h2>
            <p className="font-sans" style={{ color: 'var(--color-gray)', marginBottom: '3rem' }}>
              Schedule a complimentary consultation with our principal designers today and let's bring your vision to life.
            </p>
            <div className="font-sans" style={{ color: 'var(--color-text)' }}>
              <p style={{ marginBottom: '1rem' }}><strong>Phone:</strong> +91 7207774500</p>
              <p style={{ marginBottom: '1rem' }}><strong>Email:</strong> decoredesignzstudio@gmail.com</p>
              <p><strong>Location:</strong> Silversand Cyberdyne 2, Hyderabad</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our design team will contact you shortly.");
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <input type="text" placeholder="Your Name" style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontSize: '1rem', outline: 'none' }} />
              <input type="email" placeholder="Your Email Address" style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontSize: '1rem', outline: 'none' }} />
              <input type="tel" placeholder="Phone Number" style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontSize: '1rem', outline: 'none' }} />
              <button type="submit" className="hover-target" style={{ padding: '1.5rem', background: 'var(--color-text)', color: 'var(--color-surface)', border: 'none', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', marginTop: '1rem' }}>
                Get Your Free Quote
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
