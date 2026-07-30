import React from 'react';
import { motion } from 'framer-motion';

export const News: React.FC = () => {
  const newsList = [
    {
      date: 'July 10, 2026',
      tag: 'Livestock Development',
      title: 'TAG Project to Expand Support to 1000 Conflict-Affected women',
      desc: 'The Take and Give Initiative has announced a major expansion phase. Through a coalition of private donors and state support, the livestock asset transfer model will scale up to reach more widows and displaced households.'
    },
    {
      date: 'June 28, 2026',
      tag: 'Conservation',
      title: 'iCARM Restores 2,000 Hectares of Degraded Land in Akko LGA',
      desc: 'Our conservation champion framework has successfully established agroforestry networks, intercropping Moringa and Acacia to combat desertification and create secondary NTFP incomes for smallholders.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div style={{ background: '#f4f8f5', padding: '140px 10% 80px', color: 'var(--text)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'var(--sky-dark)' }}>Updates & Stories</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)' }}>
            Newsroom
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', maxWidth: '650px', lineHeight: 1.7 }}>
            Stay updated on our field stories, program outcomes, and organization announcements.
          </p>
        </motion.div>
      </div>

      <section style={{ background: 'white', padding: '90px 10%' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}
        >
          {newsList.map((item, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#f4f8f5', 
                borderRadius: '16px', 
                padding: '36px 30px', 
                cursor: 'pointer' 
              }}
            >
              <span style={{ 
                background: 'white', 
                color: 'var(--sky)', 
                fontSize: '11px', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                padding: '6px 14px', 
                borderRadius: '20px', 
                display: 'inline-block', 
                marginBottom: '20px',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                {item.tag}
              </span>
              <div style={{ color: 'var(--text-light)', fontSize: '13px', marginBottom: '8px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {item.date}
              </div>
              <h3 style={{ 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontSize: '20px', 
                fontWeight: 700, 
                marginBottom: '12px', 
                color: 'var(--sky-dark)' 
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: '14.5px', 
                color: 'var(--text-light)', 
                lineHeight: '1.7',
                margin: 0
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
