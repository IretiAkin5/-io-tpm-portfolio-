import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0D0B14', marginBottom: '4px' }}>
          Get in Touch
        </h3>
        <p style={{ fontSize: '14px', color: '#6B5E6B', marginBottom: '24px' }}>
          Connect with Iretioluwa for technical product leadership & consulting.
        </p>

        <ContactForm />
      </div>
    </div>
  );
};
