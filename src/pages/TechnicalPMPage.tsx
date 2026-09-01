import React from 'react';
import { PageId } from '../components/Navbar';
import { Compass, Triangle, Clock, Settings } from 'lucide-react';
import { EmbeddedBarChart } from '../components/EmbeddedBarChart';

interface TechnicalPMPageProps {
  onNavigate: (page: PageId) => void;
}

export const TechnicalPMPage: React.FC<TechnicalPMPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ backgroundColor: '#0D0B14', minHeight: '100vh', color: '#F0EBF0', paddingTop: '56px' }} className="page-enter">
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* HERO SECTION */}
        <section style={{ paddingTop: '80px', paddingBottom: '70px' }}>
          <h1
            style={{
              fontSize: '46px',
              fontWeight: 800,
              lineHeight: '1.15',
              marginBottom: '20px',
              letterSpacing: '-0.8px',
            }}
          >
            <span style={{ color: '#F0EBF0', display: 'block' }}>Bridging Vision and</span>
            <span style={{ color: '#C4197A', fontStyle: 'italic', fontWeight: 800, display: 'block' }}>Execution</span>
          </h1>

          <p
            style={{
              color: '#9E8F9E',
              fontSize: '14px',
              lineHeight: '1.6',
              maxWidth: '600px',
            }}
          >
            Effective Technical Product Management isn't just about writing tickets. It's about translating high-level business strategy into a coherent architecture. It requires deeply understanding both the market demands and the engineering constraints to deliver scalable user outcomes.
          </p>
        </section>

        {/* THREE-COLUMN COMPETENCY SECTION */}
        <section style={{ paddingBottom: '90px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              position: 'relative',
            }}
          >
            {/* COLUMN 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#9E8F9E',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                BUSINESS STRATEGY
              </span>

              {/* Card 1 */}
              <div
                style={{
                  backgroundColor: '#1A1625',
                  border: '1px solid #2E2040',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Compass size={20} color="#C4197A" />
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#F0EBF0' }}>
                    API Strategy
                  </h3>
                </div>
                <p style={{ fontSize: '13px', color: '#9E8F9E', lineHeight: '1.5', marginBottom: '20px' }}>
                  Designing developer-first contract specifications that treat APIs as core business assets with strict versioning, security, and developer analytics.
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span className="chip-tag chip-tag-dark">REST</span>
                  <span className="chip-tag chip-tag-dark">GraphQL</span>
                  <span className="chip-tag chip-tag-dark">OpenAPI</span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  backgroundColor: '#1A1625',
                  border: '1px solid #2E2040',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Triangle size={20} color="#C4197A" />
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#F0EBF0' }}>
                    System Architecture
                  </h3>
                </div>
                <p style={{ fontSize: '13px', color: '#9E8F9E', lineHeight: '1.5' }}>
                  Architecting decoupled event-driven systems that isolate domains, prevent cascade failures, and handle high transactional burst capacities.
                </p>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#9E8F9E',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                TECHNOLOGY
              </span>

              {/* Card 1 (Tall) */}
              <div
                style={{
                  backgroundColor: '#1A1625',
                  border: '1px solid #2E2040',
                  borderRadius: '12px',
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <Clock size={20} color="#C4197A" />
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#F0EBF0' }}>
                      Data-Driven Discovery
                    </h3>
                  </div>
                  <p style={{ fontSize: '13px', color: '#9E8F9E', lineHeight: '1.5', marginBottom: '16px' }}>
                    Leveraging telemetry analytics, p99 latency heatmaps, and funnel drop-off metrics to validate technical hypotheses before writing a line of code.
                  </p>
                </div>

                {/* Embedded SVG Bar Chart */}
                <EmbeddedBarChart />
              </div>
            </div>

            {/* COLUMN 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#9E8F9E',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                ENGINEERING EXECUTION
              </span>

              {/* Card 1 */}
              <div
                style={{
                  backgroundColor: '#1A1625',
                  border: '1px solid #2E2040',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Settings size={20} color="#C4197A" />
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#F0EBF0' }}>
                    Engineering Collaboration
                  </h3>
                </div>
                <p style={{ fontSize: '13px', color: '#9E8F9E', lineHeight: '1.5', marginBottom: '20px' }}>
                  Operating as a trusted peer to engineering leadership, establishing clear technical tradeoffs, and aligning sprint velocity with strategic milestones.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
                  {[
                    'Governing technical debt backlog',
                    'Defining SLAs and error budgets',
                    'Managing deprecation cycles',
                  ].map((bullet, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#F0EBF0' }}>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#C4197A',
                          display: 'inline-block',
                          flexShrink: 0,
                        }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER (dark) */}
      <footer
        style={{
          backgroundColor: '#0D0B14',
          borderTop: '1px solid #2E2040',
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
          <div style={{ fontWeight: 800, fontSize: '18px', color: '#F0EBF0' }}>IO</div>
          <div style={{ fontSize: '13px', color: '#9E8F9E' }}>
            © {new Date().getFullYear()} Iretioluwa Ogunrombi. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#9E8F9E' }}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#9E8F9E', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#9E8F9E', textDecoration: 'none' }}>GitHub</a>
            <a href="#techwriting" onClick={(e) => e.preventDefault()} style={{ color: '#9E8F9E', textDecoration: 'none' }}>TechWriting</a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: '#9E8F9E', textDecoration: 'none' }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
