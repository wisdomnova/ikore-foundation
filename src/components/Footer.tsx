import React, { useState } from 'react';
import logoImg from '../../images/ikore.png';

interface FooterProps {
  showPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ showPage }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing! We've registered ${email} for our newsletter.`);
      setEmail('');
    }
  };

  return (
    <footer style={{ background: '#fcfdfe', padding: '80px 5% 40px', color: '#4a3d24' }}>
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr', gap: '40px', marginBottom: '60px' }}>
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', textDecoration: 'none' }}>
            <img src={logoImg} alt="Ikore Logo" style={{ height: '70px', width: 'auto', display: 'block', borderRadius: '4px' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: 'var(--sky-dark)', fontWeight: 700, fontSize: '18px', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.2 }}>Ikore</div>
              <div style={{ color: 'var(--text-light)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: '2px' }}>Empowerment Foundation</div>
            </div>
          </div>
          <p style={{ marginBottom: '24px', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--text-light)' }}>Sowing Seeds of Change - empowering women, youth, and persons with disabilities through sustainable agriculture across all 36 states of Nigeria.</p>
          
          {/* Newsletter Signup */}
          <div style={{ marginBottom: '24px', width: '100%' }}>
            <h5 style={{ color: 'var(--text)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Subscribe to Newsletter</h5>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', background: '#f4f8f5', borderRadius: '30px', padding: '4px', border: '1px solid #e2ece5', maxWidth: '360px', width: '100%', alignItems: 'center' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flexGrow: 1, padding: '10px 16px', border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', color: 'var(--text)' }} 
              />
              <button type="submit" style={{ background: 'var(--sky)', color: 'white', border: 'none', padding: '10px 22px', borderRadius: '25px', fontWeight: 700, cursor: 'pointer', fontSize: '13px', transition: 'background 0.2s' }}>Subscribe</button>
            </form>
          </div>

          <div className="f-socials" style={{ display: 'flex', gap: '8px' }}>
            <a href="https://facebook.com/ikorefoundation" target="_blank" rel="noopener noreferrer" className="f-soc" style={{ textDecoration: 'none', width: '36px', height: '36px', borderRadius: '50%', background: '#f4f8f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sky)', transition: 'background 0.2s' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>
            <a href="https://www.instagram.com/ikorefoundation?igsh=MWtkeWM3N2t2dDBhYg==" target="_blank" rel="noopener noreferrer" className="f-soc" style={{ textDecoration: 'none', width: '36px', height: '36px', borderRadius: '50%', background: '#f4f8f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sky)', transition: 'background 0.2s' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: 'var(--sky-dark)', fontSize: '16px', fontWeight: 600 }}>Navigate</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('home'); }} style={{ color: 'inherit', textDecoration: 'none', fontSize: '14.5px' }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('about'); }} style={{ color: 'inherit', textDecoration: 'none', fontSize: '14.5px' }}>About Us</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('programs'); }} style={{ color: 'inherit', textDecoration: 'none', fontSize: '14.5px' }}>Programmes</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('team'); }} style={{ color: 'inherit', textDecoration: 'none', fontSize: '14.5px' }}>Our Team</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('gallery'); }} style={{ color: 'inherit', textDecoration: 'none', fontSize: '14.5px' }}>Gallery</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('news'); }} style={{ color: 'inherit', textDecoration: 'none', fontSize: '14.5px' }}>News & Stories</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('contact'); }} style={{ color: 'inherit', textDecoration: 'none', fontSize: '14.5px' }}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: 'var(--sky-dark)', fontSize: '16px', fontWeight: 600 }}>Programmes</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14.5px' }}>
            <li>PEACECORP II - Livestock</li>
            <li>Nutrition Advocacy</li>
            <li>Urban Household Farming</li>
            <li>Market Systems Facilitation</li>
            <li>Women's Economic Empowerment</li>
            <li>Behaviour Change Communication</li>
          </ul>
        </div>

        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: 'var(--sky-dark)', fontSize: '16px', fontWeight: 600 }}>Contact</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14.5px' }}>
            <li>info@ikorefoundation.org</li>
            <li><a href="tel:+2347088559767" style={{ color: 'inherit', textDecoration: 'none' }}>+234 708 855 9767</a></li>
            <li><a href="https://maps.google.com/?q=11+Vanern+Street,+Wuse,+Abuja" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>11 Vanern St, Wuse, Abuja</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('donate-general'); }} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}>Donate Now</a></li>
            <li><a href="https://ikore.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Ikore International ↗</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: 'var(--text-light)' }}>
        <p>&copy; {new Date().getFullYear()} Ikore Empowerment Foundation. All rights reserved. | Registered Non-Profit Organisation, Nigeria | www.ikorefoundation.org</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};
