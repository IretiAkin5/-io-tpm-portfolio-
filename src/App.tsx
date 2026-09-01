import React, { useState } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { TechnicalPMPage } from './pages/TechnicalPMPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ContactModal } from './components/ContactModal';
import { CaseStudyModal } from './components/CaseStudyModal';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Fixed Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Page Routing */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenCaseStudyModal={() => setCaseStudyModalOpen(true)}
          />
        )}

        {activePage === 'technical-pm' && (
          <TechnicalPMPage onNavigate={handleNavigate} />
        )}

        {activePage === 'case-studies' && (
          <CaseStudyPage
            onNavigate={handleNavigate}
            onOpenFullCaseStudy={() => setCaseStudyModalOpen(true)}
          />
        )}

        {activePage === 'experience' && (
          <ExperiencePage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Centered Contact Modal Overlay */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Full Architecture Case Study Modal Overlay */}
      <CaseStudyModal
        isOpen={caseStudyModalOpen}
        onClose={() => setCaseStudyModalOpen(false)}
        onNavigateToExperience={() => handleNavigate('experience')}
      />
    </div>
  );
};

export default App;
