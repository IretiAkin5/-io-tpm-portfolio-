import React, { useState, useEffect } from 'react';
import { PageId } from '../components/Navbar';
import { Zap, Search, Box as CubeIcon, Activity, ArrowRight } from 'lucide-react';
import { client } from '../lib/sanity';

interface CaseStudyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenFullCaseStudy: () => void;
}

interface SanityCaseStudy {
  _id?: string;
  title: string;
  subtitle: string;
  tags?: string[];
  challenge: string;
  problemPoints?: string[];
  architectureStages?: { label: string; subtitle?: string; isHighlighted?: boolean }[];
  highlights?: { title: string; body: string }[];
  metrics?: { value: string; label: string }[];
}

const defaultCaseStudy: SanityCaseStudy = {
  title: 'PropertyBridge: Architecting Scalable PropTech.',
  subtitle: 'Rebuilding enterprise property data infrastructure for 10x scale.',
  tags: ['PropTech', 'API Design', 'Data Arch', 'Next.js', 'Kafka'],
  challenge: "PropertyBridge's legacy monolithic architecture struggled to digest asynchronous payload updates from 14 distinct MLS regional data sources. Database locks during peak user activity led to search timeouts, incomplete property listings, and severe operational bottlenecks.",
  problemPoints: [
    'Anonymous users hitting 22% CTR but 0% property query capabilities',
    'Inconsistent MLS data across 14 regional providers causing listing duplication',
    'Search latency averaging 8.4s on peak load, driving 34% session abandonment',
  ],
  architectureStages: [
    { label: 'MLS Data Sources', subtitle: '14 regional providers', isHighlighted: false },
    { label: 'Event-Driven Core', subtitle: 'Kafka · Redis · Elasticsearch', isHighlighted: true },
    { label: 'Consumer APIs', subtitle: 'GraphQL · REST Gateway', isHighlighted: false },
  ],
  highlights: [
    { title: 'Real-time Event Streaming', body: 'Kafka pipeline processing 2M+ property events/day with sub-100ms delivery SLA.' },
    { title: 'Elasticsearch Integration', body: 'Geo-spatial search reducing p99 latency from 8.4s to 1.8s.' },
    { title: 'Microservices Migration', body: 'Zero-downtime strangler-fig migration across 8 domain services.' },
    { title: 'Observability Stack', body: 'Datadog APM with custom telemetry dashboards.' },
  ],
  metrics: [
    { value: '99.8%', label: 'Platform system uptime' },
    { value: '<2s', label: 'Average query latency of 1.8s' },
    { value: '3×', label: 'Increase in MLS listing throughput' },
  ],
};

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onNavigate, onOpenFullCaseStudy }) => {
  const [caseStudy, setCaseStudy] = useState<SanityCaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "caseStudy"][0]`)
      .then((data) => {
        setCaseStudy(data || defaultCaseStudy);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error in CaseStudyPage:', err);
        setCaseStudy(defaultCaseStudy);
        setLoading(false);
      });
  }, []);

  const cs = caseStudy || defaultCaseStudy;

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

          {loading ? (
            <div style={{ backgroundColor: '#EFE2EF', borderRadius: '8px', height: '80px', opacity: 0.7 }} />
          ) : (
            <>
              <h1
                style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  color: '#0D0B14',
                  marginBottom: '10px',
                  lineHeight: '1.2',
                }}
              >
                {cs.title}
              </h1>
              <p style={{ fontSize: '14px', color: '#6B5E6B', marginBottom: '20px', maxWidth: '640px' }}>
                {cs.subtitle}
              </p>

              {cs.tags && cs.tags.length > 0 && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {cs.tags.map((tag, idx) => (
                    <span key={idx} className="chip-tag chip-tag-light">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
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
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0D0B14', marginBottom: '14px' }}>
              The Challenge
            </h2>
            <p style={{ fontSize: '14px', color: '#6B5E6B', lineHeight: '1.6' }}>
              {cs.challenge}
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0D0B14', marginBottom: '16px' }}>
              Fragmentation &amp; Data Silos
            </h2>

            {cs.problemPoints && (
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cs.problemPoints.map((bullet, idx) => (
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
            )}
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

          {cs.architectureStages && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              {cs.architectureStages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div
                    style={{
                      backgroundColor: stage.isHighlighted ? '#7B1270' : '#FFFFFF',
                      border: stage.isHighlighted ? 'none' : '1px solid #E8D8E8',
                      borderRadius: '12px',
                      padding: stage.isHighlighted ? '32px 36px' : '24px 28px',
                      textAlign: 'center',
                      minWidth: stage.isHighlighted ? '260px' : '220px',
                      flex: stage.isHighlighted ? '1.2 1 240px' : '1 1 200px',
                      maxWidth: stage.isHighlighted ? '320px' : '280px',
                      boxShadow: stage.isHighlighted ? '0 12px 28px rgba(123, 18, 112, 0.25)' : 'none',
                    }}
                  >
                    <div style={{ fontSize: stage.isHighlighted ? '18px' : '16px', fontWeight: 800, color: stage.isHighlighted ? '#FFFFFF' : '#0D0B14', marginBottom: '4px' }}>
                      {stage.label}
                    </div>
                    {stage.subtitle && (
                      <div style={{ fontSize: stage.isHighlighted ? '13px' : '12px', color: stage.isHighlighted ? 'rgba(255, 255, 255, 0.75)' : '#6B5E6B' }}>
                        {stage.subtitle}
                      </div>
                    )}
                  </div>

                  {idx < cs.architectureStages!.length - 1 && (
                    <div style={{ color: '#C4197A', fontSize: '24px', fontWeight: 800, userSelect: 'none' }}>
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </section>

        {/* TECHNICAL HIGHLIGHTS */}
        <section style={{ padding: '60px 0', borderTop: '1px solid #E8D8E8' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0D0B14', marginBottom: '32px' }}>
            Technical Highlights
          </h2>

          {cs.highlights && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
              }}
            >
              {cs.highlights.map((item, idx) => {
                const icons = [<Zap size={20} color="#C4197A" />, <Search size={20} color="#C4197A" />, <CubeIcon size={20} color="#C4197A" />, <Activity size={20} color="#C4197A" />];
                return (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
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
                      {icons[idx % icons.length]}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '4px' }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* OUTCOMES */}
        <section style={{ padding: '60px 0 90px 0', borderTop: '1px solid #E8D8E8' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0D0B14', marginBottom: '36px' }}>
            Outcomes
          </h2>

          {cs.metrics && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
                marginBottom: '40px',
              }}
            >
              {cs.metrics.map((metric, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '40px', fontWeight: 800, color: '#0D0B14', lineHeight: '1' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '14px', color: '#6B5E6B', marginTop: '6px' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

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

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#F7EFF7', borderTop: '1px solid #E8D8E8', padding: '24px 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
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
