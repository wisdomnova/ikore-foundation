import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Team } from './pages/Team';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { DonateGeneral } from './pages/DonateGeneral';
import { DonateTAG } from './pages/DonateTAG';

const App: React.FC = () =>{
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false);

  const showPage = (pageId: string) =>{
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>{/* Dynamic Navbar */}
      <Navbar currentPage={currentPage} showPage={showPage} />{/* Active Page View */}
      <main style={{ flexGrow: 1 }}>{currentPage === 'home' && <Home showPage={showPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'programs' && <Programs showPage={showPage} />}
        {currentPage === 'team' && <Team />}
        {currentPage === 'gallery' && <Gallery />}
        {currentPage === 'news' && <News />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'donate-general' && <DonateGeneral onSuccess={() =>setIsSuccessOpen(true)} />}
        {currentPage === 'donate-tag' && <DonateTAG onSuccess={() =>setIsSuccessOpen(true)} />}
      </main>{/* Shared Footer */}
      <Footer showPage={showPage} />{/* Paystack Payment Success Modal Overlay */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() =>setIsSuccessOpen(false)} /></div>);
};

export default App;
