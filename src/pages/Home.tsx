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
      title: "Small Ruminants",
      desc: "Goat and sheep farming programmes providing beneficiaries with starter stock, veterinary support, and market linkages to build sustainable income."
    },
    {
      title: "Poultry & Chicken",
      desc: "Backyard and small-scale poultry farming training with inputs support, disease management, and access to feed, empowering women and youth entrepreneurs."
    },
    {
      title: "Livestock & Animal Health",
      desc: "Comprehensive livestock support including vaccination campaigns, community animal health workers training, and disease surveillance across Northern Nigeria."
    },
    {
      title: "Crop Farming & Seeds",
      desc: "Distribution of improved, biofortified seed varieties - rice, maize, cassava, vegetables - alongside good agronomic practices training for smallholder farmers."
    },
    {
      title: "Climate Change & Resilience",
      desc: "Climate-smart agriculture practices, drought-resistant varieties, water harvesting, and adaptation strategies to protect livelihoods from climate shocks."
    },
    {
      title: "Education & Capacity Building",
      desc: "Literacy, vocational skills, and agricultural extension training programmes for women, youth, and persons with disabilities to unlock their full potential."
    },
    {
      title: "Nutrition & Food Security",
      desc: "Biofortification, kitchen gardens, and nutrition education to combat micronutrient deficiency, particularly for women of reproductive age and young children."
    },
    {
      title: "Financial Inclusion",
      desc: "Linking beneficiaries to cooperative savings, credit facilities, and grants so they can invest in and grow their agricultural enterprises independently."
    },
    {
      title: "Agroforestry & Environment",
      desc: "Tree planting, nature-based solutions, and sustainable land management to restore degraded environments while improving farm productivity."
    },
    {
      title: "Digital Agriculture",
      desc: "Digital tools, e-extension services, and mobile-based reporting systems to connect farmers with knowledge, markets, and support services."
    },
    {
      title: "Post-Harvest & Value Addition",
      desc: "Processing, storage, and packaging support to reduce post-harvest losses and help producers capture more value from their crops and livestock."
    },
    {
      title: "Disability-Inclusive Agriculture",
      desc: "Adaptive farming tools, accessible training methods, and targeted grants ensuring persons living with disabilities are fully included in all programmes."
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
            height: '520px',
            borderRadius: '24px',
            background: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url(${heroBg}) no-repeat center/cover`,
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
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, lineHeight: '1.1', maxWidth: '650px', marginBottom: '30px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'white' }}>
            Sowing Seeds of Change
          </h1>
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
              Empowering women, youth, and persons living with disabilities through sustainable agriculture, education, and climate-resilient livelihoods across Nigeria.
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
            Harvest
          </div>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Inclusion
          </div>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Resilience
          </div>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Innovation
          </div>
          <div style={{ background: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Compassion
          </div>
        </div>
      </motion.div>

      {/* HORIZONTAL SCROLL FOCUS AREAS */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: 'white', padding: '80px 5%' }}
      >
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Our Areas of Focus</h2>
        <p className="section-sub">From livestock to climate resilience, we address the root causes of vulnerability with practical, evidence-based solutions.</p>
        
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
              width: '340px', 
              flex: '0 0 auto', 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: '250px'
            }}>
              <h3 style={{ 
                fontSize: '20px', 
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
        <p className="section-sub">Through the parent organization Ikore International and the Foundation, our reach continues to grow every year.</p>
        
        <div className="impact-grid responsive-grid-3" style={{ gap: '30px' }}>
          <div className="impact-card">
            <div className="big-num">10K+</div>
            <div className="impact-label">Farmers directly reached in Northern Nigeria</div>
          </div>
          <div className="impact-card">
            <div className="big-num">36</div>
            <div className="impact-label">Nigerian states covered by foundation programmes</div>
          </div>
          <div className="impact-card">
            <div className="big-num">600+</div>
            <div className="impact-label">Livestock farmers supported with in-kind financing</div>
          </div>
          <div className="impact-card">
            <div className="big-num">150%</div>
            <div className="impact-label">Increase in farm productivity for beneficiaries</div>
          </div>
          <div className="impact-card">
            <div className="big-num">60%</div>
            <div className="impact-label">Improved crop yield through compost programmes</div>
          </div>
          <div className="impact-card">
            <div className="big-num">500K</div>
            <div className="impact-label">Target farmers per planting season by 2027</div>
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
              <h3>PEACECORP II Project - Livestock</h3>
              <p>Field implementer on behalf of Ikore International.</p>
              <a href="#" className="program-link" onClick={(e) => { e.preventDefault(); showPage('programs'); }}>Learn more →</a>
            </div>
          </div>
          <div className="program-card">
            <div className="program-img"><img src={images.base64Image14 || images.aboutStoryImage} alt="Small ruminants programme" /></div>
            <div className="program-body">
              <span className="program-tag">Nutrition</span>
              <h3>Nutrition Advocacy</h3>
              <p>In collaboration with ChananHill, we drive nutrition advocacy at Primary Health Centres so women can lead in identifying affordable, balanced diets for their households.</p>
              <a href="#" className="program-link" onClick={(e) => { e.preventDefault(); showPage('programs'); }}>Learn more →</a>
            </div>
          </div>
          <div className="program-card">
            <div className="program-img"><img src={images.base64Image15 || images.aboutStoryImage} alt="Urban Farming" /></div>
            <div className="program-body">
              <span className="program-tag">Urban Farming</span>
              <h3>Urban Household Farming & Biofortified Inputs</h3>
              <p>Working with seed and fertiliser suppliers to break bulk for urban households and educate them on backyard farming with nutrient-dense crops like OFSP, maize, spinach and tomatoes.</p>
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
