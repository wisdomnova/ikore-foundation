import React from 'react';
import { motion } from 'framer-motion';

export const Team: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div style={{ background: '#f4f8f5', padding: '140px 10% 80px', color: 'var(--text)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'var(--sky-dark)' }}>The People</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)' }}>
            Meet Our Team
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', maxWidth: '650px', lineHeight: 1.7 }}>
            Passionate, skilled, and mission-driven development leaders working to transform lives across Nigeria.
          </p>
        </motion.div>
      </div>

      <section className="team-section" style={{ padding: '90px 10%', background: 'white' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="team-intro-grid" 
          style={{ marginBottom: '60px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'center' }}
        >
          <div>
            <div className="section-label">Our People</div>
            <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800 }}>
              The Heart Behind the Harvest
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0 }}>
              The Ikore Foundation team is a diverse, dynamic group of development professionals, agricultural scientists, community mobilisers, data analysts, and communications experts - united by a single purpose: to see Nigeria's most vulnerable people thrive.
            </p>
          </div>
        </motion.div>

        {/* Board Members */}
        <div style={{ marginBottom: '60px' }}>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: 'var(--sky-dark)' }}
          >
            Board Members
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}
          >
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ogheneneovo Ugbebor</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Board Member</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Godson Ohuruogu</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Board Member</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Dr. Blessing Allen</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Board Member</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Dr. David Shamaki</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Board Member</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nseobong Dennis</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Board Member</p>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: 'var(--sky-dark)' }}
          >
            Leadership Team
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}
          >
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nkemjika Onuoha</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Chief Executive</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Dr. Gbenga Ariyo</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Director, Livestock</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Dr. Blessing Allen</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Director, Programmes</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Dr. Emmanuel Adegbe</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Nutrition and MERL Advisor</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Esther Yila</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Head, Business Development</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nkechi Ibekwe</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Grants and Finance Manager</p>
            </div>
            <div style={{ background: '#f4f8f5', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: '6px', fontWeight: 700, color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Hauwa Abubakar</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>Programme Officer</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
