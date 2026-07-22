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

      {/* Thematic Areas */}
      <section style={{ background: '#fcfdfe', padding: '90px 10%' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px', display: 'table' }}>Our Focus</div>
          <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800 }}>
            Thematic Areas
          </h2>
          <p className="section-sub" style={{ margin: '0 auto', maxWidth: '600px' }}>
            Our interventions are strategically designed around five key pillars to achieve maximum, long-term impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="responsive-grid-3"
          style={{ gap: '30px' }}
        >
          <div style={{ background: '#f4f8f5', padding: '36px 30px', borderRadius: '16px' }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '16px' }}>
              Sustainable Agriculture & Livestock
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              Supporting smallholders with high-quality inputs, veterinary services, asset transfer models (like the TAG Initiative), and capacity building to increase productivity and resilience.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 30px', borderRadius: '16px' }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '16px' }}>
              Women’s Economic Empowerment
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              Bridging resources to rural women and widows, enabling them to build independent agricultural enterprises, access credit, and lead within their local value chains.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 30px', borderRadius: '16px' }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '16px' }}>
              Youth & Capacity Development
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              Equipping younger generations with training in digital agriculture, agribusiness skills, and entrepreneurship opportunities to generate local job pathways.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 30px', borderRadius: '16px' }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '16px' }}>
              Climate Solutions & Environmental Resilience
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              Promoting regenerative farming, soil conservation, gum arabic restoration (iCARM), and circular economy waste solutions (BIN2BANK) to combat land degradation.
            </p>
          </div>

          <div style={{ background: '#f4f8f5', padding: '36px 30px', borderRadius: '16px' }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '16px' }}>
              Inclusive Development & Disability Inclusion
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              Designing adaptive tools and targeting grants to ensure that persons living with disabilities are completely integrated into agricultural projects.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section style={{ background: 'white', padding: '90px 10%' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px', display: 'table' }}>Active Portfolio</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800 }}>
            Projects
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
                  Ikore Foundation, in a bid to address these challenges, in collaboration with ChananHill as her grassroot implementation partner identifies communities and target farmers, particularly widows and internally displaced women who fall within the most vulnerable group in their community. The women are supported with small ruminant (Male and Female goat), medication, vaccine and feed. Upon reproduction, the woman will also introduce another woman who is interested and she will be given the one kid out of the number of kids birthed by the goat whilst the remaining kids becomes hers. This way women learn to help other women and together they build a strong community of financially stable women resilient to economic shocks.
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

          {/* Project 03: BIN2BANK */}
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
                  BIN2BANK
                </h3>
              </div>
              <span style={{ fontSize: '24px', fontWeight: 300, color: 'var(--sky)' }}>{activeAccordion === 3 ? '−' : '+'}</span>
            </button>
            
            {activeAccordion === 3 && (
              <div style={{ padding: '0 32px 32px', color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '16px', margin: 0 }}>
                  Bin2bank is an initiative facilitating the sustainable reduction of plastic waste at the community level using a decentralized approach. The project aims to reduce the indiscriminate disposal of plastic waste by creating social awareness and engaging individuals within the project community. Our focus is essentially on PET bottles due to their wide prevalence, ease of recycling, accessibility and reusing. Our primary targets are women and youths who are trained and mobilised to champion the initiative and cascade positive behavioural change around proper plastic waste management within their various communities. We collaborate closely with local businesses and households within communities providing technical support and resources to selected women and youths which would enable and encourage them to actively participate and take ownership of the project.
                </p>
                <p style={{ margin: 0 }}>
                  Plastic waste pose global environmental threats because it alters habitats and natural processes, reducing our ecosystems’ ability to adapt to climate change directly affecting millions of people’s livelihoods and social well-being. Plastic pollution currently contributes to 10% of globally generated waste and Nigeria ranks 9th in the global plastic pollution chart with beverage companies, households, restaurants, hotels, lounges and supermarkets as leading plastic users. Majorly, poorer countries are hit the most as they lack infrastructural and technological facilities, and social awareness needed to tackle the plastic waste pandemic. To this effect, our project is committed to revolutionizing and developing effective and efficient methods of disposing of PET bottles in our communities, creating employment opportunities that invariably reduce poverty, ensure a cleaner environment, educate communities about the environmental and health risk associated with indiscriminate plastic waste disposal, foster collaboration with stakeholders, encourage community ownership and behavioural change and promote active participation in waste management.At the core, we strive to build sustainable communities that tackle the endemic problem of plastic waste pollution.
                </p>
              </div>
            )}
          </div>

        </motion.div>
      </section>
    </div>
  );
};
