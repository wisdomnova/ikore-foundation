import React from 'react';
import { Award, Users, Compass, Eye, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutStoryImage } from '../assets/images';

export const About: React.FC = () => {
  return (
    <div>
      {/* Page Header Banner */}
      <div style={{ background: '#f4f8f5', padding: '140px 10% 80px', color: 'var(--text)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'var(--sky-dark)' }}>Who We Are</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)' }}>
            About Ikore Empowerment Foundation
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', maxWidth: '650px', lineHeight: 1.7, marginBottom: '32px' }}>
            The not-for-profit arm of Ikore International, dedicated to empowering Nigeria's most vulnerable through sustainable agriculture and inclusive development.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/ikorefoundation?igsh=MWtkeWM3N2t2dDBhYg==" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--sky)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              Instagram
            </a>
            <a href="https://facebook.com/ikorefoundation" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--sky)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              Facebook
            </a>
          </div>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <section style={{ background: 'white', padding: '90px 10%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="responsive-grid-split-serve">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Our Story</div>
            <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800 }}>
              Rooted in Impact
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
              Established as the non-profit division of Ikore International Development Limited, the Ikore Empowerment Foundation was created to bridge the gap between high-level development research and real-world implementation in Nigeria's most marginalized communities.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
              For years, we have worked on the ground across all 36 states, targeting our interventions at those who need them most: rural women, vulnerable youth, and persons living with disabilities. We believe that true development is not about hand-outs; it is about providing the tools, training, and productive assets that enable self-reliance and economic resilience.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0 }}>
              Our unique approach combines deep value chain expertise in agriculture and livestock with a passion for human dignity. By creating models like the Take and Give (TAG) Initiative, we ensure that every seed planted and every asset donated multiplies within the community, creating a chain reaction of prosperity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={aboutStoryImage} alt="Our Story" style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', height: '440px' }} />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Values Strip */}
      <section style={{ background: '#fcfdfe', padding: '90px 10%' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '80px' }}
          className="responsive-grid-split-serve"
        >
          <div style={{ background: '#f4f8f5', padding: '40px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Eye size={28} style={{ color: 'var(--sky)' }} />
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--sky-dark)' }}>Our Vision</h3>
            </div>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0 }}>
              A resilient, inclusive society where rural communities, women, youth, and marginalized groups have equal access to economic opportunities and resources, allowing them to lead self-sufficient lives.
            </p>
          </div>
          <div style={{ background: '#f4f8f5', padding: '40px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Compass size={28} style={{ color: 'var(--sky)' }} />
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--sky-dark)' }}>Our Mission</h3>
            </div>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0 }}>
              To design and implement community-led, sustainable initiatives in agriculture, value chain integration, and capacity building that break the cycle of poverty and empower vulnerable groups across Nigeria.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>Core Values</div>
          <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800 }}>
            The Values That Guide Us
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="responsive-grid-4"
          style={{ gap: '24px' }}
        >
          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Award style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Integrity</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We hold ourselves to the highest standards of transparency, accountability, and ethical action.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Users style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Inclusivity</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We actively serve and include the most vulnerable, prioritizing women, youth, and persons with disabilities.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <ShieldCheck style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Sustainability</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We construct our programmes to outlive our interventions, creating permanent livelihood shifts.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <HeartHandshake style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Empathy</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We treat every community partner with respect, valuing their voice and preserving their dignity.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
