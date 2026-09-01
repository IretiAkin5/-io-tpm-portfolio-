import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type PageId = 'home' | 'technical-pm' | 'case-studies' | 'experience';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = activePage === 'technical-pm';

  const navBg = isDark ? '#0D0B14' : '#F7EFF7';
  const navBorder = isDark ? '1px solid #2E2040' : '1px solid #E8D8E8';
  const logoColor = isDark ? '#FFFFFF' : '#0D0B14';
  const linkTextColor = isDark ? '#9E8F9E' : '#6B5E6B';
  const activeTextColor = isDark ? '#F0EBF0' : '#0D0B14';
  const activeUnderlineColor = isDark ? '#F0EBF0' : '#0D0B14';

  const links: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'technical-pm', label: 'Technical PM' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '56px',
        backgroundColor: navBg,
        borderBottom: navBorder,
        zIndex: 500,
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        {/* Left: Logo */}
        <button
          onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
          style={{
            background: 'none',
            border: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '22px',
            fontWeight: 800,
            color: logoColor,
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.5px'
          }}
        >
          IO
        </button>

        {/* Center: Nav Links (Desktop) */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {links.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '16px 0 14px 0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? activeTextColor : linkTextColor,
                  cursor: 'pointer',
                  borderBottom: isActive ? `2px solid ${activeUnderlineColor}` : '2px solid transparent',
                  transition: 'color 0.15s ease, border-color 0.15s ease',
                  borderRadius: 0,
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Far Right: Contact Button (Desktop) */}
        <div className="desktop-contact-btn" style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={onOpenContact}
            style={{
              backgroundColor: '#7B1270',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 18px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9B1890')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7B1270')}
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
          style={{
            background: 'none',
            border: 'none',
            color: isDark ? '#FFFFFF' : '#0D0B14',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '56px',
            left: 0,
            right: 0,
            backgroundColor: navBg,
            borderBottom: navBorder,
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
          }}
        >
          {links.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 0',
                  textAlign: 'left',
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? activeTextColor : linkTextColor,
                  borderBottom: isActive ? `2px solid ${activeUnderlineColor}` : 'none',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            style={{
              backgroundColor: '#7B1270',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '10px',
              fontWeight: 600,
              fontSize: '14px',
              marginTop: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Contact
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-contact-btn { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
