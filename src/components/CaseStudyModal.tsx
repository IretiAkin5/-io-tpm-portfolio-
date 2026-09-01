import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Zap, Database, Server, Cpu } from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToExperience?: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, onNavigateToExperience }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
      style={{ zIndex: 1100 }}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
        }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
          <X size={22} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#9E8F9E', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Full Architecture Case Study
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0D0B14', marginTop: '4px', marginBottom: '8px' }}>
            PropertyBridge: Architecting Scalable PropTech
          </h2>
          <p style={{ fontSize: '14px', color: '#6B5E6B', lineHeight: '1.6' }}>
            Rebuilding enterprise property data infrastructure for 10x scale while resolving legacy monolith bottlenecks across 14 regional MLS providers.
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '14px' }}>
            {['PropTech', 'API Design', 'Data Arch', 'Next.js', 'Kafka', 'Elasticsearch', 'Python'].map((tag) => (
              <span key={tag} className="chip-tag chip-tag-light">{tag}</span>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E8D8E8', margin: '24px 0' }} />

        {/* Executive Summary */}
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0D0B14', marginBottom: '10px' }}>
            Executive Summary & Role
          </h3>
          <p style={{ fontSize: '14px', color: '#6B5E6B', lineHeight: '1.6' }}>
            As Lead Technical Product Manager, Iretioluwa Ogunrombi spearheaded the end-to-end modernization of PropertyBridge’s core real estate MLS ingestion and query system. By decoupling the monolithic database into an event-driven Kafka streaming architecture with Elasticsearch indexing, the engineering team achieved sub-2s query latencies and 99.8% platform uptime.
          </p>
        </div>

        {/* Architectural Deep Dive */}
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0D0B14', marginBottom: '14px' }}>
            Key Architectural Decisions
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#F7EFF7', borderRadius: '8px', border: '1px solid #E8D8E8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Zap size={18} color="#C4197A" />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0D0B14' }}>Strangler Fig Pattern</h4>
              </div>
              <p style={{ fontSize: '13px', color: '#6B5E6B' }}>
                Incrementally migrated 8 core domain services without taking down legacy client web portals or mobile APIs during business peak hours.
              </p>
            </div>

            <div style={{ padding: '16px', background: '#F7EFF7', borderRadius: '8px', border: '1px solid #E8D8E8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Database size={18} color="#C4197A" />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0D0B14' }}>Canonical Schema Normalization</h4>
              </div>
              <p style={{ fontSize: '13px', color: '#6B5E6B' }}>
                Unified 14 disparate regional MLS payloads into a standardized Protobuf structure, eliminating duplicate listing states.
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div style={{ backgroundColor: '#0D0B14', borderRadius: '12px', padding: '24px', color: '#F0EBF0', marginBottom: '28px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#C4197A', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>
            Verified Production Metrics
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF' }}>99.8%</div>
              <div style={{ fontSize: '12px', color: '#9E8F9E', marginTop: '2px' }}>System Uptime SLA</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#C4197A' }}>1.8s</div>
              <div style={{ fontSize: '12px', color: '#9E8F9E', marginTop: '2px' }}>Average p99 Latency</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF' }}>3×</div>
              <div style={{ fontSize: '12px', color: '#9E8F9E', marginTop: '2px' }}>Listing Throughput</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#7B1270',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
