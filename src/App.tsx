import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Team } from './pages/Team';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { DonateGeneral } from './pages/DonateGeneral';
import { DonateTAG } from './pages/DonateTAG';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false);

  // Map path to pageId for Navbar active styling
  const getPageIdFromPath = (path: string): string => {
    switch (path) {
      case '/': return 'home';
      case '/about': return 'about';
      case '/programs': return 'programs';
      case '/team': return 'team';
      case '/gallery': return 'gallery';
      case '/news': return 'news';
      case '/careers': return 'careers';
      case '/contact': return 'contact';
      case '/donate': return 'donate-general';
      case '/donate-tag': return 'donate-tag';
      default: return 'home';
    }
  };

  const currentPage = getPageIdFromPath(location.pathname);

  const showPage = (pageId: string) => {
    const routeMap: Record<string, string> = {
      'home': '/',
      'about': '/about',
      'programs': '/programs',
      'team': '/team',
      'gallery': '/gallery',
      'news': '/news',
      'careers': '/careers',
      'contact': '/contact',
      'donate-general': '/donate',
      'donate-tag': '/donate-tag'
    };
    navigate(routeMap[pageId] || '/');
  };

  // Scroll to top on route change (excluding default hash anchors if any)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Dynamic Navbar */}
      <Navbar currentPage={currentPage} showPage={showPage} />
      
      {/* Active Page View */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home showPage={showPage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs showPage={showPage} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<DonateGeneral onSuccess={() => setIsSuccessOpen(true)} />} />
          <Route path="/donate-tag" element={<DonateTAG onSuccess={() => setIsSuccessOpen(true)} />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home showPage={showPage} />} />
        </Routes>
      </main>
      
      {/* Shared Footer */}
      <Footer showPage={showPage} />
      
      {/* Paystack Payment Success Modal Overlay */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </div>
  );
};

export default App;
