import React from 'react';
import { 
  BookOpen, Accessibility, ArrowUpRight, Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../../images/hero-bg.jpg';
import * as images from '../assets/images';

interface HomeProps {
  showPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ showPage }) => {
  const focusAreas = [
    {
      title: "Community-Led Development",
      desc: "Communities are at the heart of lasting change. We invest in locally led solutions by partnering with communities to build local capacity and deliver initiatives that reflect their priorities and aspirations."
    },
    {
      title: "Women's Economic Empowerment and Justice",
      desc: "Families prosper and communities become more resilient when women thrive. We invest in opportunities and solutions that expand women's economic participation, strengthen livelihoods, promote entrepreneurship, and advance equity."
    },
    {
      title: "Health, Nutrition and Wellbeing",
      desc: "Healthy people are the foundation of thriving communities. We support initiatives that improve access to quality healthcare, promote better nutrition, and encourage healthy practices that enable individuals and families to live productive lives."
    },
    {
      title: "Water, Sanitation and Hygiene (WASH)",
      desc: "Access to safe water and sanitation transforms lives. We invest in community-driven WASH initiatives that improve access to clean water, sanitation, and hygiene, helping to reduce preventable diseases, improve public health, and create safer, healthier environments where people and communities can flourish."
    },
    {
      title: "Sustainable Livelihoods and Market Recovery",
      desc: "Economic recovery begins with restored livelihoods. We support individuals and communities, particularly those affected by conflict, displacement, economic hardship, and environmental challenges to restore livelihoods, strengthen local economies, and expand access to skills, markets, finance, and enterprise opportunities. We help communities build lasting resilience and shared prosperity by creating pathways to economic recovery."
    }
  ];

  return (
    <div>
      {/* MOTION RIBBON */}
      <div className="motion-ribbon" style={{ background: 'var(--gold)', color: 'white', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap', fontWeight: 600, fontSize: '14px', position: 'relative', zIndex: 900, marginTop: '72px' }}>
        <div style={{ display: 'inline-block', paddingLeft: '100%', animation: 'marquee 30s linear infinite' }}>
          Ongoing FUNDRAISING CAMPAIGN: TAG Initiative - Rebuilding Livelihoods for Conflict-Affected Women through Ruminant Enterprise &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ongoing FUNDRAISING CAMPAIGN: TAG Initiative - Rebuilding Livelihoods for Conflict-Affected Women through Ruminant Enterprise
        </div>
      </div>

      {/* HERO CANVAS */}
      <section style={{ padding: '80px 5% 60px', background: '#f9f9f9' }}>
        {/* Main Background Image Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            height: 'auto',
            minHeight: '520px',
            borderRadius: '24px',
            background: `linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 100%), url(${heroBg}) no-repeat center/cover`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 8%',
            color: 'white',
            overflow: 'hidden',
            marginBottom: '40px'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.2)', color: 'white', fontSize: '13px', fontWeight: 600, padding: '6px 16px', borderRadius: '20px', marginBottom: '20px', width: 'fit-content' }}>
            Ikore Empowerment Foundation
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 850, lineHeight: '1.1', maxWidth: '650px', marginBottom: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'white' }}>
            Sowing Seeds of Change
          </h1>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, marginBottom: '20px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--gold)' }}>
            Creating Pathways to Self-Sufficiency
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '650px', marginBottom: '32px', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
            Working alongside marginalized and conflict-affected communities to deploy human-centric, sustainable solutions, strengthen resilience, and create opportunities for economic independence.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); showPage('donate-general'); }} style={{ background: 'white', color: '#124e1b', textDecoration: 'none', padding: '14px 28px', borderRadius: '30px', fontWeight: 700, fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', border: 'none' }}>
              Make a Difference <span style={{ fontSize: '14px' }}>→</span>
            </a>
            <a href="#" className="btn-outline" onClick={(e) => { e.preventDefault(); showPage('donate-tag'); }} style={{ border: '2px solid rgba(255,255,255,0.8)', background: 'transparent', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: '30px', fontWeight: 600, fontSize: '14px', transition: 'background 0.3s' }}>
              Support TAG Initiative
            </a>
            <a href="#" className="btn-outline" onClick={(e) => { e.preventDefault(); showPage('programs'); }} style={{ border: '2px solid rgba(255,255,255,0.8)', background: 'transparent', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: '30px', fontWeight: 600, fontSize: '14px', transition: 'background 0.3s' }}>
              Our Programs
            </a>
          </div>
        </motion.div>

        {/* Info row with text and 3 key cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="responsive-grid-info" 
          style={{ gap: '40px', alignItems: 'start' }}
        >
          <div>
            <p style={{ color: 'var(--text-light)', fontSize: '16.5px', lineHeight: '1.8', margin: 0 }}>
              Building resilient communities through community-led solutions, strategic partnerships, and opportunities that enable people to shape their own future.
            </p>
          </div>

          <div className="responsive-grid-3" style={{ gap: '20px' }}>
            {/* Card 1 */}
            <div style={{ background: '#1c281e', color: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '220px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255,255,255,0.1)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Heart size={18} /></span>
                <span style={{ color: 'var(--gold)' }}><ArrowUpRight size={18} /></span>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'white' }}>Women & Girls</h4>
              <p style={{ fontSize: '12px', lineHeight: '1.5', opacity: 0.8, margin: 0 }}>
                Women are the backbone of rural agriculture yet are chronically underserved. We provide them with assets, training, and economic pathways to self-sufficiency and leadership.
              </p>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#1c281e', color: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '220px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255,255,255,0.1)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><BookOpen size={18} /></span>
                <span style={{ color: 'var(--gold)' }}><ArrowUpRight size={18} /></span>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'white' }}>Young People</h4>
              <p style={{ fontSize: '12px', lineHeight: '1.5', opacity: 0.8, margin: 0 }}>
                Nigeria's youth bulge is its greatest asset. We channel the energy of young Nigerians into productive agribusiness ventures and skill-building opportunities.
              </p>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#1c281e', color: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '220px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255,255,255,0.1)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Accessibility size={18} /></span>
                <span style={{ color: 'var(--gold)' }}><ArrowUpRight size={18} /></span>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'white' }}>Persons with Disabilities</h4>
              <p style={{ fontSize: '12px', lineHeight: '1.5', opacity: 0.8, margin: 0 }}>
                Through adaptive tools, inclusive programme design, and targeted support, we ensure no one is left behind in Nigeria's agricultural transformation.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BRAND VALUES STRIP */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mission-strip" 
        style={{ background: '#ffc83b', color: '#1c1503', padding: '40px 10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', minWidth: '300px' }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: '15px', lineHeight: '1.6', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            "Ikore - meaning Harvest in Yoruba - believes every seed of investment in a woman, a young person, or a person with a disability yields a bountiful harvest for all of Nigeria."
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Empathy
          </div>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Co-creation
          </div>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Inclusion
          </div>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Innovation
          </div>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Accountability
          </div>
        </div>
      </motion.div>

      {/* HORIZONTAL SCROLL THEMATIC AREAS */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: 'white', padding: '80px 5%' }}
      >
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Our Thematic Areas</h2>
        <p className="section-sub">
          We mobilize resources, forge strategic partnerships, and support community-led initiatives that strengthen resilience, expand opportunity, and enable marginalized and conflict-affected communities to build sustainable futures.
        </p>
        
        {/* Horizontal Carousel Scroller */}
        <div className="focus-scroll-container" style={{ 
          display: 'flex', 
          gap: '24px', 
          overflowX: 'auto', 
          padding: '20px 0 40px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {focusAreas.map((item, index) => (
            <div key={index} style={{ 
              background: '#f4f8f5', 
              borderRadius: '20px', 
              padding: '36px', 
              width: '360px', 
              flex: '0 0 auto', 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: '270px'
            }}>
              <h3 style={{ 
                fontSize: '19px', 
                fontWeight: 700, 
                color: '#124e1b', 
                marginBottom: '16px', 
                fontFamily: "'Plus Jakarta Sans', sans-serif" 
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: '14.5px', 
                lineHeight: '1.7', 
                color: 'var(--text-light)', 
                margin: 0 
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* IMPACT STATS */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="impact-section"
      >
        <div className="section-label">Our Impact</div>
        <h2 className="section-title">Transforming Lives at Scale</h2>
        <p className="section-sub">A summary of the verified metrics achieved across Gombe, Abuja, and other regional states.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '1000px', margin: '0 auto' }} className="responsive-grid-3">
          <div className="impact-card" style={{ background: '#f4f8f5', borderRadius: '16px', padding: '40px 24px', textAlign: 'center', boxShadow: 'none', border: 'none' }}>
            <div className="big-num" style={{ fontSize: '48px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: '8px' }}>242</div>
            <div className="impact-label" style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text)', marginBottom: '8px' }}>Numbers of Women Helped</div>
            <p style={{ color: 'var(--text-light)', fontSize: '13px', margin: 0 }}>We've helped 242 women across Nigeria.</p>
          </div>
          <div className="impact-card" style={{ background: '#f4f8f5', borderRadius: '16px', padding: '40px 24px', textAlign: 'center', boxShadow: 'none', border: 'none' }}>
            <div className="big-num" style={{ fontSize: '48px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: '8px' }}>62</div>
            <div className="impact-label" style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text)', marginBottom: '8px' }}>Small Businesses Impacted</div>
            <p style={{ color: 'var(--text-light)', fontSize: '13px', margin: 0 }}>We've been able to impact 62 businesses in the rural part of Nigeria.</p>
          </div>
          <div className="impact-card" style={{ background: '#f4f8f5', borderRadius: '16px', padding: '40px 24px', textAlign: 'center', boxShadow: 'none', border: 'none' }}>
            <div className="big-num" style={{ fontSize: '48px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: '8px' }}>10</div>
            <div className="impact-label" style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text)', marginBottom: '8px' }}>States In Nigeria</div>
            <p style={{ color: 'var(--text-light)', fontSize: '13px', margin: 0 }}>We've been able to go through 10 states in Nigeria including Gombe and Abuja.</p>
          </div>
        </div>
      </motion.section>

      {/* WHO WE SERVE */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="serve-section"
      >
        <div className="responsive-grid-split-serve" style={{ gap: '60px', alignItems: 'center' }}>
          <div className="serve-visual">
            <img src={images.base64Image12 || images.aboutStoryImage} alt="Women farmers with goats" className="serve-main-img" />
            <div className="serve-badge">
              <div className="b-num">3</div>
              <div className="b-text">Core Beneficiary Groups</div>
            </div>
          </div>
          <div>
            <div className="section-label">Who We Serve</div>
            <h2 className="section-title">Standing With the Most Vulnerable</h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8 }}>
              The Ikore Foundation was born from a deep conviction that the most marginalized members of Nigerian society - rural women, young people, and persons living with disabilities - hold the greatest untapped potential for national transformation. When we invest in them, we invest in Nigeria.
            </p>
            <ul className="serve-list">
              <li>
                <div>
                  <strong>Women & Girls:</strong> Women are the backbone of rural agriculture yet are chronically underserved. We provide them with assets, training, and economic pathways to self-sufficiency and leadership.
                </div>
              </li>
              <li>
                <div>
                  <strong>Young People:</strong> Nigeria's youth bulge is its greatest asset. We channel the energy of young Nigerians into productive agribusiness ventures and skill-building opportunities.
                </div>
              </li>
              <li>
                <div>
                  <strong>Persons with Disabilities:</strong> Through adaptive tools, inclusive programme design, and targeted support, we ensure no one is left behind in Nigeria's agricultural transformation.
                </div>
              </li>
              <li>
                <div>
                  <strong>All 36 States + FCT:</strong> From the arid North to the lush South, our programmes are designed to be contextually adaptive, reaching the hardest-to-reach communities across Nigeria.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FLAGSHIP INITIATIVES / PROGRAMS PREVIEW */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: 'var(--off-white)' }}
      >
        <div className="section-label">Programs</div>
        <h2 className="section-title">Flagship Initiatives</h2>
        <p className="section-sub">Targeted programmes designed to create lasting, measurable change for our beneficiaries.</p>
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-img"><img src={images.base64Image13 || images.aboutStoryImage} alt="Poultry programme" /></div>
            <div className="program-body">
              <span className="program-tag">Livestock</span>
              <h3>TAG Initiative - Take and Give Initiative</h3>
              <p>Rebuilding livelihoods for conflict-affected women through small ruminant asset transfers.</p>
              <a href="#" className="program-link" onClick={(e) => { e.preventDefault(); showPage('programs'); }}>Learn more →</a>
            </div>
          </div>
          <div className="program-card">
            <div className="program-img"><img src={images.base64Image15 || images.aboutStoryImage} alt="BIN2BANK Project" /></div>
            <div className="program-body">
              <span className="program-tag">Environment</span>
              <h3>BIN2BANK</h3>
              <p>Facilitating sustainable plastic waste reduction and circular opportunities at the community level.</p>
              <a href="#" className="program-link" onClick={(e) => { e.preventDefault(); showPage('programs'); }}>Learn more →</a>
            </div>
          </div>
          <div className="program-card">
            <div className="program-img"><img src={images.aboutStoryImage} alt="iCARM Project" /></div>
            <div className="program-body">
              <span className="program-tag">Conservation</span>
              <h3>iCARM Restoration Model</h3>
              <p>Promoting regenerative agriculture and Non-Timber Forest Product value chains in Gombe.</p>
              <a href="#" className="program-link" onClick={(e) => { e.preventDefault(); showPage('programs'); }}>Learn more →</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WHY PARTNER WITH US */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: '#f4f8f5', padding: '90px 5%' }}
      >
        <div className="responsive-grid-split-partner" style={{ gap: '60px', alignItems: 'center' }}>
          <div>
            <div className="section-label">Why Partner with Us?</div>
            <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '38px', fontWeight: 800 }}>
              Empowering Communities, Transforming Lives
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '16.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '32px' }}>
              We are empowering vulnerable women in rural communities with entrepreneurial skills with which they can generate income, reduce poverty and increase their impact in their families and communities.
            </p>
            <a href="#" onClick={(e) => { e.preventDefault(); showPage('donate-tag'); }} style={{ background: 'var(--sky)', color: 'white', textDecoration: 'none', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', display: 'inline-flex', alignItems: 'center', transition: 'background 0.2s', border: 'none' }}>
              Support Ongoing Fundraiser
            </a>
          </div>
        </div>
      </motion.section>

      {/* TRUSTED COLLABORATORS / PARTNERS */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', padding: '90px 5%', background: 'white' }}
      >
        <div className="section-label">Our Partners</div>
        <h2 className="section-title">Trusted Collaborators</h2>
        <p className="section-sub" style={{ margin: '0 auto 40px', maxWidth: '600px' }}>
          We work alongside leading development organisations, government bodies, and the private sector to maximise impact.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            "Ikore International Development Limited",
            "ChananHill"
          ].map((partner, idx) => (
            <div key={idx} style={{ 
              background: '#f4f8f5', 
              color: 'var(--sky-dark)', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              fontSize: '14.5px', 
              fontWeight: '600',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              {partner}
            </div>
          ))}
        </div>
      </motion.section>

      {/* REDESIGNED GET INVOLVED (JOIN THE HARVEST) */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: '80px 5% 100px', background: '#fcfdfe' }}
      >
        <div style={{ 
          background: '#124e1b', 
          borderRadius: '24px', 
          padding: '60px 8%', 
          color: 'white',
          position: 'relative'
        }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '38px', fontWeight: 800, marginBottom: '16px', color: 'white' }}>
            Join the Harvest
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 0 40px', opacity: 0.9, fontSize: '16px', lineHeight: 1.6 }}>
            Whether you donate, volunteer, partner, or spread the word - every contribution plants a seed that grows into lasting change.
          </p>

          <div className="responsive-grid-4" style={{ gap: '30px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '40px' }}>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'white' }}>Donate</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.8, margin: 0 }}>
                Fund a family, a flock, or an entire community programme
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'white' }}>Volunteer</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.8, margin: 0 }}>
                Share your skills on the ground or remotely
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'white' }}>Partner</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.8, margin: 0 }}>
                Co-create programmes with our expert team
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'white' }}>Advocate</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.8, margin: 0 }}>
                Amplify our mission across your networks
              </p>
            </div>
          </div>

          <div style={{ marginTop: '50px', textAlign: 'left' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); showPage('donate-general'); }} style={{ background: '#ffc83b', color: '#1c1503', padding: '14px 40px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'background 0.2s', border: 'none' }}>
              Donate Now
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
