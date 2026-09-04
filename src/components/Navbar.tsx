import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import logoImg from '../../images/ikore.png';

interface NavbarProps {
  currentPage: string;
  showPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, showPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDonateDropdown, setShowDonateDropdown] = useState(false);

  const toggleDonateDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDonateDropdown(!showDonateDropdown);
  };

  return (
    <nav style={{ transition: 'all 0.3s ease' }}>
      <a href="#" className="nav-logo" onClick={() => { showPage('home'); setIsOpen(false); setShowDonateDropdown(false); }} style={{ textDecoration: 'none' }}>
        <img src={logoImg} alt="Ikore Logo" style={{ height: '70px', width: 'auto', display: 'block', borderRadius: '4px' }} />
        <div className="nav-logo-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="name" style={{ color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: 1.2 }}>Ikore</div>
          <div className="tag" style={{ color: 'var(--text-light)', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>Empowerment Foundation</div>
        </div>
      </a>

      <div className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
        <a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={() => { showPage('home'); setIsOpen(false); setShowDonateDropdown(false); }}>Home</a>
        <a href="#" className={currentPage === 'about' ? 'active' : ''} onClick={() => { showPage('about'); setIsOpen(false); setShowDonateDropdown(false); }}>About Us</a>
        <a href="#" className={currentPage === 'programs' ? 'active' : ''} onClick={() => { showPage('programs'); setIsOpen(false); setShowDonateDropdown(false); }}>Programs</a>
        <a href="#" className={currentPage === 'team' ? 'active' : ''} onClick={() => { showPage('team'); setIsOpen(false); setShowDonateDropdown(false); }}>Our Team</a>
        <a href="#" className={currentPage === 'gallery' ? 'active' : ''} onClick={() => { showPage('gallery'); setIsOpen(false); setShowDonateDropdown(false); }}>Gallery</a>
        <a href="#" className={currentPage === 'news' ? 'active' : ''} onClick={() => { showPage('news'); setIsOpen(false); setShowDonateDropdown(false); }}>News</a>
        <a href="#" className={currentPage === 'careers' ? 'active' : ''} onClick={() => { showPage('careers'); setIsOpen(false); setShowDonateDropdown(false); }}>Careers</a>
        <a href="#" className={currentPage === 'contact' ? 'active' : ''} onClick={() => { showPage('contact'); setIsOpen(false); setShowDonateDropdown(false); }}>Contact</a>
        
        <div className="dropdown" style={{ position: 'relative', display: 'inline-block', marginLeft: '8px' }}>
          <a 
            href="#" 
            className="donate-btn" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              textDecoration: 'none',
              boxShadow: 'none',
              transform: 'none',
              transition: 'background 0.2s'
            }} 
            onClick={toggleDonateDropdown}
          >
            Donate {showDonateDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </a>
          
          {showDonateDropdown && (
            <div 
              className="dropdown-content" 
              style={{ 
                display: 'block', 
                position: 'absolute', 
                right: 0, 
                backgroundColor: 'white', 
                minWidth: '230px', 
                boxShadow: '0px 8px 16px rgba(0,0,0,0.1)', 
                borderRadius: '12px', 
                zIndex: 1100, 
                border: '1px solid var(--sky-mid)', 
                overflow: 'hidden', 
                marginTop: '5px' 
              }}
            >
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); showPage('donate-general'); setShowDonateDropdown(false); setIsOpen(false); }} 
                style={{ color: 'var(--text)', padding: '12px 16px', textDecoration: 'none', display: 'block', fontSize: '14px', fontWeight: 500, transition: 'background 0.2s' }}
              >
                Donate to Ikore Foundation
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); showPage('donate-tag'); setShowDonateDropdown(false); setIsOpen(false); }} 
                style={{ color: 'var(--text)', padding: '12px 16px', textDecoration: 'none', display: 'block', fontSize: '14px', fontWeight: 500, transition: 'background 0.2s', borderTop: '1px solid #f0f0f0' }}
              >
                Support TAG Initiative
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="hamburger" onClick={() => { setIsOpen(!isOpen); setShowDonateDropdown(false); }}>
        <span style={isOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
        <span style={isOpen ? { opacity: 0 } : {}}></span>
        <span style={isOpen ? { transform: 'rotate(-45deg) translate(7px, -7px)' } : {}}></span>
      </div>
    </nav>
  );
};
