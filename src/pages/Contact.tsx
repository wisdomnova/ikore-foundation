import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert(`Thank you, ${formData.name}! Your message has been sent successfully. We will get back to you shortly.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ background: '#f4f8f5', padding: '140px 10% 80px', color: 'var(--text)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'var(--sky-dark)' }}>Get in Touch</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', maxWidth: '650px', lineHeight: 1.7 }}>
            We would love to hear from you. Reach out to collaborate, ask questions, or support our work.
          </p>
        </motion.div>
      </div>

      <section style={{ background: 'white', padding: '90px 10%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'start' }} className="responsive-grid-split-partner">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Connect</div>
            <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800 }}>
              Our Office Locations
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '30px' }}>
              Have questions about donating, partnerships, or our programmes? Stop by our head office or reach out via phone or email.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: '#f4f8f5', padding: '12px', borderRadius: '12px', color: 'var(--sky)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Headquarters</h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: 1.5, margin: 0 }}>
                    No. 11 Vanern St Wuse 2, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: '#f4f8f5', padding: '12px', borderRadius: '12px', color: 'var(--sky)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Phone Number</h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: 1.5, margin: 0 }}>
                    +234 (0)70 885 59767
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: '#f4f8f5', padding: '12px', borderRadius: '12px', color: 'var(--sky)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email Address</h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: 1.5, margin: 0 }}>
                    info@ikorefoundation.org
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ background: '#f4f8f5', borderRadius: '24px', padding: '40px' }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: 'var(--sky-dark)' }}>
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dcdcdc', fontSize: '14px', outline: 'none', background: 'white', color: 'var(--text)', boxSizing: 'border-box' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dcdcdc', fontSize: '14px', outline: 'none', background: 'white', color: 'var(--text)', boxSizing: 'border-box' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dcdcdc', fontSize: '14px', outline: 'none', background: 'white', color: 'var(--text)', boxSizing: 'border-box' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Message
                  </label>
                  <textarea 
                    rows={5} 
                    placeholder="Type your message here..." 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dcdcdc', fontSize: '14px', outline: 'none', background: 'white', color: 'var(--text)', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }}
                  />
                </div>
                <button 
                  type="submit" 
                  style={{ width: '100%', background: 'var(--sky)', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', transition: 'background 0.2s' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
