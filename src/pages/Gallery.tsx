import React from 'react';
import { motion } from 'framer-motion';
import * as images from '../assets/images';

export const Gallery: React.FC = () => {
  // Select some base64 images to represent the gallery
  const galleryItems = [
    { src: images.base64Image2 || images.aboutStoryImage, caption: 'Livestock Distribution in Rural Communities', spanClass: 'gallery-item span2' },
    { src: images.base64Image3 || images.aboutStoryImage, caption: 'Hands-on Agronomy Training for Women Farmers', spanClass: 'gallery-item row2' },
    { src: images.base64Image4 || images.aboutStoryImage, caption: 'Vitamin A Cassava harvest inspection', spanClass: 'gallery-item' },
    { src: images.base64Image5 || images.aboutStoryImage, caption: 'iCARM reforestation seedling planting', spanClass: 'gallery-item' },
    { src: images.base64Image6 || images.aboutStoryImage, caption: 'Community Nutrition Awareness Campaign', spanClass: 'gallery-item span2' },
    { src: images.base64Image7 || images.aboutStoryImage, caption: 'Goat health and vaccination checkup', spanClass: 'gallery-item' },
    { src: images.base64Image8 || images.aboutStoryImage, caption: 'Training session on livestock management', spanClass: 'gallery-item' },
    { src: images.base64Image9 || images.aboutStoryImage, caption: 'Smallholder field day in Gombe State', spanClass: 'gallery-item span2' }
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
          <div className="section-label" style={{ color: 'var(--sky-dark)' }}>Images of Impact</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)' }}>
            Our Gallery
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', maxWidth: '650px', lineHeight: 1.7 }}>
            Visual stories of hope, resilience, and transformation across Nigeria's farming communities.
          </p>
        </motion.div>
      </div>

      <section style={{ background: 'white', padding: '90px 10%' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gallery-grid" 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 220px)', gap: '12px', marginTop: '30px' }}
        >
          {galleryItems.map((item, idx) => (
            <div key={idx} className={item.spanClass} style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
              <img src={item.src} alt={item.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }} />
              <div className="caption" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(18,78,27,0.9))', color: 'white', padding: '20px 14px 12px', fontSize: '13px', fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {item.caption}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
