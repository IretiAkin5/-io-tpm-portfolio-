import React from 'react';
import { PageId } from '../components/Navbar';
import { Zap, Search, Box as CubeIcon, Activity, ArrowRight } from 'lucide-react';

interface CaseStudyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenFullCaseStudy: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onNavigate, onOpenFullCaseStudy }) => {
  return (
    <div style={{ backgroundColor: '#F7EFF7', minHeight: '100vh', paddingTop: '56px' }} className="page-enter">
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* PAGE HEADER */}
        <section style={{ padding: '60px 0 40px 0' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#9E8F9E',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            CASE STUDY
          </span>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#0D0B14',
              marginBottom: '10px',
              lineHeight: '1.2',
            }}
          >
            PropertyBridge: Architecting Scalable PropTech.
          </h1>
          <p style={{ fontSize: '14px', color: '#6B5E6B', marginBottom: '20px', maxWidth: '640px' }}>
            Rebuilding enterprise property data infrastructure for 10x scale.
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['PropTech', 'API Design', 'Data Arch', 'Next.js', 'Kafka'].map((tag) => (
              <span key={tag} className="chip-tag chip-tag-light">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section
          style={{
            padding: '40px 0 60px 0',
            borderTop: '1px solid #E8D8E8',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Left Column */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0D0B14', marginBottom: '14px' }}>
              The Challenge
            </h2>
            <p style={{ fontSize: '14px', color: '#6B5E6B', lineHeight: '1.6' }}>
              PropertyBridge's legacy monolithic architecture struggled to digest asynchronous payload updates from 14 distinct MLS regional data sources. Database locks during peak user activity led to search timeouts, incomplete property listings, and severe operational bottlenecks.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0D0B14', marginBottom: '16px' }}>
              Fragmentation &amp; Data Silos
            </h2>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Anonymous users hitting 22% CTR but 0% property query capabilities',
                'Inconsistent MLS data across 14 regional providers causing listing duplication',
                'Search latency averaging 8.4s on peak load, driving 34% session abandonment',
              ].map((bullet, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#C4197A',
                      display: 'inline-block',
                      marginTop: '7px',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '14px', color: '#0D0B14', lineHeight: '1.5' }}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SOLUTION ARCHITECTURE */}
        <section style={{ padding: '60px 0', borderTop: '1px solid #E8D8E8' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 800,
              color: '#0D0B14',
              textAlign: 'center',
              marginBottom: '36px',
            }}
          >
            Solution Architecture
          </h2>

          {/* Horizontal 3-box diagram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {/* Box 1 (Left) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8D8E8',
                borderRadius: '12px',
                padding: '24px 28px',
                textAlign: 'center',
                minWidth: '220px',
                flex: '1 1 200px',
                maxWidth: '280px',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '4px' }}>
                MLS Data Sources
              </div>
              <div style={{ fontSize: '12px', color: '#6B5E6B' }}>
                14 regional providers
              </div>
            </div>

            {/* Arrow 1 */}
            <div style={{ color: '#C4197A', fontSize: '24px', fontWeight: 800, userSelect: 'none' }}>
              →
            </div>

            {/* Box 2 (Center, HIGHLIGHTED) */}
            <div
              style={{
                backgroundColor: '#7B1270',
                borderRadius: '12px',
                padding: '32px 36px',
                textAlign: 'center',
                minWidth: '260px',
                flex: '1.2 1 240px',
                maxWidth: '320px',
                boxShadow: '0 12px 28px rgba(123, 18, 112, 0.25)',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
                Event-Driven Core
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 500 }}>
                Kafka · Redis · Elasticsearch
              </div>
            </div>

            {/* Arrow 2 */}
            <div style={{ color: '#C4197A', fontSize: '24px', fontWeight: 800, userSelect: 'none' }}>
              →
            </div>

            {/* Box 3 (Right) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8D8E8',
                borderRadius: '12px',
                padding: '24px 28px',
                textAlign: 'center',
                minWidth: '220px',
                flex: '1 1 200px',
                maxWidth: '280px',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '4px' }}>
                Consumer APIs
              </div>
              <div style={{ fontSize: '12px', color: '#6B5E6B' }}>
                GraphQL · REST Gateway
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL HIGHLIGHTS */}
        <section style={{ padding: '60px 0', borderTop: '1px solid #E8D8E8' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0D0B14', marginBottom: '32px' }}>
            Technical Highlights
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Item 1 */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(196,25,122,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Zap size={20} color="#C4197A" />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '4px' }}>
                  Real-time Event Streaming
                </h3>
                <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>
                  Kafka pipeline processing 2M+ property events/day with sub-100ms delivery SLA.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(196,25,122,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Search size={20} color="#C4197A" />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '4px' }}>
                  Elasticsearch Integration
                </h3>
                <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>
                  Geo-spatial search reducing p99 latency from 8.4s to 1.8s.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(196,25,122,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CubeIcon size={20} color="#C4197A" />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '4px' }}>
                  Microservices Migration
                </h3>
                <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>
                  Zero-downtime strangler-fig migration across 8 domain services.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(196,25,122,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Activity size={20} color="#C4197A" />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '4px' }}>
                  Observability Stack
                </h3>
                <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>
                  Datadog APM with custom telemetry dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section style={{ padding: '60px 0 90px 0', borderTop: '1px solid #E8D8E8' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0D0B14', marginBottom: '36px' }}>
            Outcomes
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              marginBottom: '40px',
            }}
          >
            {/* Metric 1 */}
            <div>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#0D0B14', lineHeight: '1' }}>
                99.8%
              </div>
              <div style={{ fontSize: '14px', color: '#6B5E6B', marginTop: '6px' }}>
                Platform system uptime
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#0D0B14', lineHeight: '1' }}>
                &lt;2s
              </div>
              <div style={{ fontSize: '14px', color: '#6B5E6B', marginTop: '6px' }}>
                Average query latency of 1.8s
              </div>
            </div>

            {/* Metric 3 */}
            <div>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#0D0B14', lineHeight: '1' }}>
                3×
              </div>
              <div style={{ fontSize: '14px', color: '#6B5E6B', marginTop: '6px' }}>
                Increase in MLS listing throughput
              </div>
            </div>
          </div>

          <button
            onClick={onOpenFullCaseStudy}
            style={{
              background: 'none',
              border: 'none',
              color: '#7B1270',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: 0,
            }}
          >
            <span>Show Full Case Study</span>
            <ArrowRight size={16} />
          </button>
        </section>
      </div>

      {/* FOOTER (light) */}
      <footer
        style={{
          backgroundColor: '#F7EFF7',
          borderTop: '1px solid #E8D8E8',
          padding: '24px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ fontWeight: 800, fontSize: '18px', color: '#0D0B14' }}>IO</div>
          <div style={{ fontSize: '13px', color: '#6B5E6B' }}>
            © {new Date().getFullYear()} Iretioluwa Ogunrombi. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#6B5E6B' }}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#6B5E6B', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#6B5E6B', textDecoration: 'none' }}>GitHub</a>
            <a href="#techwriting" onClick={(e) => { e.preventDefault(); onNavigate('technical-pm'); }} style={{ color: '#6B5E6B', textDecoration: 'none' }}>TechWriting</a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: '#6B5E6B', textDecoration: 'none' }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
