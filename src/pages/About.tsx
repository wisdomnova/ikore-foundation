import React from 'react';
import { Award, Users, Compass, Eye, ShieldCheck, HeartHandshake, HelpCircle } from 'lucide-react';
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
            We exist to connect empathy with action bringing together partners, communities, philanthropists, and changemakers to address society's most pressing challenges through human-centric, sustainable, solutions.
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
              Established as the non-profit arm of Ikore International Development Limited, the Ikore Empowerment Foundation was created to advance charitable causes that create meaningful and lasting social impact. Born from years of experience designing and delivering development solutions across Nigeria, the Foundation was created to extend that impact beyond commercial pathways and provide a dedicated platform for philanthropy extending development solutions in Nigeria’s most marginalized and conflict-affected communities.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
              Our journey has been shaped by the belief that sustainable development is achieved when communities are empowered to lead their own progress. Rather than delivering solutions to communities, we work with them, mobilizing resources, fostering strategic partnerships, and supporting locally driven initiatives that strengthen resilience, restore livelihoods, and expand opportunities.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
              Today, Ikore Foundation champions community-led development, women's economic empowerment and justice, health and wellbeing, water, sanitation and hygiene (WASH), and sustainable livelihoods and economic recovery. Across every initiative, we remain committed to creating pathways that enable marginalized and conflict-affected individuals and communities to reclaim agency, overcome systemic barriers, and build more resilient futures.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0, fontWeight: 600 }}>
              At the heart of our work is a commitment to ensuring that communities lead their own development, supported by partnerships that expand opportunity and strengthen resilience.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={aboutStoryImage} alt="Our Story" style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', height: '480px' }} />
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
              We envision an equitable and peaceful society, where marginalized and conflict-affected people and communities overcome systemic barriers to reclaim agency, dignity and economic independence.
            </p>
          </div>
          <div style={{ background: '#f4f8f5', padding: '40px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Compass size={28} style={{ color: 'var(--sky)' }} />
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--sky-dark)' }}>Our Mission</h3>
            </div>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0 }}>
              To mobilize resources and forge strategic partnerships that deploy human-centric, sustainable solutions, empowering vulnerable communities to build resilience and achieve self-sufficiency.
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

        {/* 5 Core Values Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}
        >
          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <HeartHandshake style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Empathy</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We listen deeply to understand the lived experiences and challenges of the people and communities we serve, ensuring our work responds to actual needs.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Users style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Co-creation</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We believe the most sustainable solutions are created with communities, not for them. We work alongside communities and partners to deliver locally-owned and relevant solutions.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Award style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Inclusion</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We are committed to ensuring that women, youth, persons with disabilities, conflict-affected populations and underserved communities have equitable opportunities to participate and benefit from our initiatives.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <ShieldCheck style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Innovation</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We champion the deployment and scaling of practical, proven solutions that address pressing social challenges and improve lives of disadvantaged groups.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <HelpCircle style={{ color: 'var(--sky)' }} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Accountability</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              We manage resources responsibly and remain transparent to the communities we serve, the partners we work with, and the donors who invest in our mission.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
