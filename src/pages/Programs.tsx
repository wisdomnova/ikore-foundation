import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProgramsProps {
  showPage: (page: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ showPage }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
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
          <div className="section-label" style={{ color: 'var(--sky-dark)' }}>What We Do</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)' }}>
            Our Programs & Projects
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', maxWidth: '650px', lineHeight: 1.7 }}>
            Empowering smallholder farmer communities, restoring ecosystems, and designing models for sustainable livelihoods.
          </p>
        </motion.div>
      </div>

      <section style={{ background: 'white', padding: '90px 10%' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px', display: 'table' }}>Active Portfolio</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800 }}>
            Current Projects
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="accordion" 
          style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          
          {/* Project 01: TAG Initiative */}
          <div style={{ background: '#f4f8f5', borderRadius: '16px', overflow: 'hidden' }}>
            <button 
              onClick={() => toggleAccordion(1)}
              style={{ 
                width: '100%', 
                background: 'transparent', 
                border: 'none', 
                padding: '24px 32px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                cursor: 'pointer',
                textAlign: 'left',
                outline: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>01</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  TAG Initiative - Take and Give Initiative
                  <span style={{ background: 'rgba(56, 182, 232, 0.15)', color: 'var(--sky)', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px' }}>
                    Currently Fundraising
                  </span>
                </h3>
              </div>
              <span style={{ fontSize: '24px', fontWeight: 300, color: 'var(--sky)' }}>{activeAccordion === 1 ? '−' : '+'}</span>
            </button>
            
            {activeAccordion === 1 && (
              <div style={{ padding: '0 32px 32px', color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '16px', margin: 0 }}>
                  Women play a central role in the agricultural value chain, forming its backbone by making up 52% of the total population in the sector (FAO). They also are responsible for up to 50% of the farm labor in Sub-Saharan Africa. Mostly, women are seen within the sector as entrepreneurs, livestock owners and smallholder farmers within the sector. Women are however limited by lack of access to productive resources and are not opportune to take advantage of the opportunities available within the sector.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  ChananHill, in a bid to address these challenges, identifies communities and target farmers, particularly widows and internally displaced women who fall within the most vulnerable group in their community. The women are supported with small ruminant (Male and Female goat), medication, vaccine and feed. Upon reproduction, the woman will also introduce another woman who is interested and she will be given the one kid out of the number of kids birthed by the goat whilst the remaining kids becomes hers. This way women learn to help other women and together they build a strong community of financially stable women resilient to economic shocks.
                </p>
                <button 
                  onClick={() => showPage('donate-tag')} 
                  style={{ background: 'var(--sky)', color: 'white', padding: '12px 28px', fontSize: '14px', borderRadius: '8px', border: 'none', fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }}
                >
                  View Campaign
                </button>
              </div>
            )}
          </div>

          {/* Project 02: iCARM */}
          <div style={{ background: '#f4f8f5', borderRadius: '16px', overflow: 'hidden' }}>
            <button 
              onClick={() => toggleAccordion(2)}
              style={{ 
                width: '100%', 
                background: 'transparent', 
                border: 'none', 
                padding: '24px 32px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                cursor: 'pointer',
                textAlign: 'left',
                outline: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>02</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Ikore Conservation and Restoration Model (iCARM)
                </h3>
              </div>
              <span style={{ fontSize: '24px', fontWeight: 300, color: 'var(--sky)' }}>{activeAccordion === 2 ? '−' : '+'}</span>
            </button>
            
            {activeAccordion === 2 && (
              <div style={{ padding: '0 32px 32px', color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '16px', margin: 0 }}>
                  To restore degraded landscapes and improve the livelihoods of smallholder farmers in Akko Local Government Area of Gombe State, the ICARM project promoted regenerative agriculture, sustainable land management, and the production and commercialisation of Non-Timber Forest Products (NTFPs). The initiative sought to facilitate the restoration of 2,000 hectares of degraded land, strengthen sustainable intercropping systems involving Gum Arabic, Moringa, sesame, soybean, and castor, enhance market access for 2,000 farmers, and increase the production and trade of 200,000 metric tons of NTFPs by 2030.
                </p>
                <p style={{ margin: 0 }}>
                  Ikore built the capacity of smallholder farmers through targeted training, practical demonstrations, and market-oriented agronomy. Seventeen farmers were trained as Conservation Champions and equipped with skills in regenerative agriculture, land restoration, crop establishment, and good agronomic practices. A demonstration plot was established where 400 Moringa and 100 Acacia (Gum Arabic) seedlings were cultivated using climate-smart techniques, including mulching, Zai pits, and half-moon water harvesting. Through a partnership with Agriarche Limited, farmers gained exposure to premium market requirements, while the project generated practical lessons on community engagement, continuous capacity building, and market linkages to support long-term land restoration, biodiversity conservation, and sustainable livelihoods.
                </p>
              </div>
            )}
          </div>

          {/* Project 03: PEACECORP II */}
          <div style={{ background: '#f4f8f5', borderRadius: '16px', overflow: 'hidden' }}>
            <button 
              onClick={() => toggleAccordion(3)}
              style={{ 
                width: '100%', 
                background: 'transparent', 
                border: 'none', 
                padding: '24px 32px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                cursor: 'pointer',
                textAlign: 'left',
                outline: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>03</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  PEACECORP II - Gombe State Agricultural Value Chain
                </h3>
              </div>
              <span style={{ fontSize: '24px', fontWeight: 300, color: 'var(--sky)' }}>{activeAccordion === 3 ? '−' : '+'}</span>
            </button>
            
            {activeAccordion === 3 && (
              <div style={{ padding: '0 32px 32px', color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8' }}>
                <p style={{ margin: 0 }}>
                  PEACECORP II focused on building long-term food security and local economic stability in northeastern Nigeria. Through training, input supply, and direct market linkage, we helped over 3,500 grain and vegetable smallholder farmers increase crop yields by 45% and access off-taker markets, reducing post-harvest losses by over half.
                </p>
              </div>
            )}
          </div>

          {/* Project 04: Nutrition Advocacy */}
          <div style={{ background: '#f4f8f5', borderRadius: '16px', overflow: 'hidden' }}>
            <button 
              onClick={() => toggleAccordion(4)}
              style={{ 
                width: '100%', 
                background: 'transparent', 
                border: 'none', 
                padding: '24px 32px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                cursor: 'pointer',
                textAlign: 'left',
                outline: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>04</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Nutrition Advocacy and Biofortified Foods Integration
                </h3>
              </div>
              <span style={{ fontSize: '24px', fontWeight: 300, color: 'var(--sky)' }}>{activeAccordion === 4 ? '−' : '+'}</span>
            </button>
            
            {activeAccordion === 4 && (
              <div style={{ padding: '0 32px 32px', color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8' }}>
                <p style={{ margin: 0 }}>
                  We promote biofortified crops, including Vitamin A Cassava and Orange-Fleshed Sweet Potatoes (OFSP), to combat malnutrition (hidden hunger) in nursing mothers and school-aged children. The initiative integrates nutritional education, crop recipes, and farming kits to over 5,000 households.
                </p>
              </div>
            )}
          </div>

          {/* Project 05: Urban Household Farming */}
          <div style={{ background: '#f4f8f5', borderRadius: '16px', overflow: 'hidden' }}>
            <button 
              onClick={() => toggleAccordion(5)}
              style={{ 
                width: '100%', 
                background: 'transparent', 
                border: 'none', 
                padding: '24px 32px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                cursor: 'pointer',
                textAlign: 'left',
                outline: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>05</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Urban Household Farming and Poultry Sponsorship
                </h3>
              </div>
              <span style={{ fontSize: '24px', fontWeight: 300, color: 'var(--sky)' }}>{activeAccordion === 5 ? '−' : '+'}</span>
            </button>
            
            {activeAccordion === 5 && (
              <div style={{ padding: '0 32px 32px', color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8' }}>
                <p style={{ margin: 0 }}>
                  Sponsoring urban micro-farming and poultry systems for vulnerable families living in semi-urban suburbs. By providing backyard cage systems, day-old chicks, and feed packages, families can generate household protein and secure an additional source of daily cash income.
                </p>
              </div>
            )}
          </div>

        </motion.div>
      </section>
    </div>
  );
};
