import React, { useState, useEffect } from 'react';
import { PageId } from '../components/Navbar';
import { InteractiveNodeDiagram } from '../components/InteractiveNodeDiagram';
import { Code2, Database, Cloud, Shield, Activity, Lock, ArrowRight } from 'lucide-react';
import { client } from '../lib/sanity';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenCaseStudyModal: () => void;
}

interface SanityProject {
  _id?: string;
  title: string;
  codeTag?: string;
  description: string;
  tags?: string[];
  isFeatured?: boolean;
  order?: number;
}

const defaultProjects: SanityProject[] = [
  {
    title: 'PropertyBridge Platform Scaling',
    codeTag: '<PropertyBridge_Architecture />',
    description: 'Engineered real-time Kafka data pipeline normalizing 14 regional MLS feeds. Cut query latency from 8.4s to 1.8s while maintaining 99.8% uptime SLA.',
    tags: ['Python', 'React'],
    isFeatured: true,
  },
  {
    title: 'Data Telemetry Dashboard',
    description: 'Real-time event streaming pipeline processing 2M+ daily events with sub-100ms delivery SLA.',
    tags: ['Python'],
    isFeatured: false,
  },
  {
    title: 'Authentication Gateway',
    description: 'Unified IAM authentication provider resolving OAuth 2.0 tokens across 8 microservice endpoints.',
    tags: ['Next.js', 'Node.js'],
    isFeatured: false,
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [projects, setProjects] = useState<SanityProject[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch('*[_type == "project"] | order(order asc)')
      .then((data) => {
        setProjects(data && data.length > 0 ? data : defaultProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setProjects(defaultProjects);
        setLoading(false);
      });
  }, []);

  const displayProjects = projects || defaultProjects;
  const featured = displayProjects.find((p) => p.isFeatured) || displayProjects[0];
  const sideProjects = displayProjects.filter((p) => p !== featured);

  return (
    <div style={{ backgroundColor: '#F7EFF7', minHeight: '100vh', paddingTop: '56px' }} className="page-enter">
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* HERO SECTION */}
        <section
          style={{
            padding: '60px 0 80px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 800,
                color: '#0D0B14',
                lineHeight: '1.1',
                letterSpacing: '-1px',
                marginBottom: '20px',
              }}
            >
              Bridging Technical<br />
              Architecture<br />
              &amp; Product Strategy.
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: '#6B5E6B',
                lineHeight: '1.6',
                marginBottom: '28px',
                maxWidth: '480px',
              }}
            >
              Iretioluwa Ogunrombi is a Technical Product Manager specialising in translating complex engineering concepts into scalable, high-impact product solutions for enterprise architectures.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                className="btn-primary"
                onClick={() => onNavigate('case-studies')}
              >
                View Case Studies
              </button>
              <button
                className="btn-secondary"
                onClick={() => onNavigate('technical-pm')}
              >
                Technical Stack
              </button>
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <InteractiveNodeDiagram />
          </div>
        </section>

        {/* TECHNICAL FOUNDATION SECTION */}
        <section
          style={{
            padding: '60px 0 80px 0',
            borderTop: '1px solid #E8D8E8',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#9E8F9E',
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              FOUNDATION
            </span>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#0D0B14',
                marginBottom: '14px',
              }}
            >
              Technical Foundation.
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: '#6B5E6B',
                lineHeight: '1.6',
                maxWidth: '400px',
              }}
            >
              Decoupling monolithic legacy systems into high-throughput microservices requires both granular API governance and cloud-native resilience.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8D8E8', borderRadius: '12px', padding: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(196,25,122,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Code2 size={20} color="#C4197A" />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '6px' }}>API Design</h3>
              <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>RESTful patterns, GraphQL endpoints. Microservices architecture.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8D8E8', borderRadius: '12px', padding: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(196,25,122,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Database size={20} color="#C4197A" />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '6px' }}>Data Architecture</h3>
              <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>Designing data-first, scalable strategies and systems design.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8D8E8', borderRadius: '12px', padding: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(196,25,122,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Cloud size={20} color="#C4197A" />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '6px' }}>Cloud Infrastructure</h3>
              <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>AWS ecosystem expertise. Scalable Kubernetes deployments.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8D8E8', borderRadius: '12px', padding: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(196,25,122,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Shield size={20} color="#C4197A" />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0D0B14', marginBottom: '6px' }}>Security &amp; Auth</h3>
              <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>OAuth 2.0, JWT implementation. IAM/IAG systems.</p>
            </div>
          </div>
        </section>

        {/* PRODUCT ENGINEERING OUTCOMES SECTION */}
        <section style={{ padding: '60px 0 90px 0', borderTop: '1px solid #E8D8E8' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0D0B14', marginBottom: '32px' }}>
            Product Engineering Outcomes.
          </h2>

          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              <div style={{ backgroundColor: '#EFE2EF', borderRadius: '12px', height: '300px', opacity: 0.7 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ backgroundColor: '#EFE2EF', borderRadius: '12px', height: '140px', opacity: 0.7 }} />
                <div style={{ backgroundColor: '#EFE2EF', borderRadius: '12px', height: '140px', opacity: 0.7 }} />
              </div>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Left Column (Featured Project) */}
              {featured && (
                <div
                  style={{
                    backgroundColor: '#EFE2EF',
                    border: '1px solid #E8D8E8',
                    borderRadius: '12px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {featured.codeTag && (
                      <div
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#7B1270',
                          marginBottom: '16px',
                        }}
                      >
                        {featured.codeTag}
                      </div>
                    )}

                    {featured.tags && featured.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                        {featured.tags.map((tag, idx) => (
                          <span key={idx} className="chip-tag chip-tag-light">{tag}</span>
                        ))}
                      </div>
                    )}

                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0D0B14', marginBottom: '10px' }}>
                      {featured.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6B5E6B', lineHeight: '1.6', marginBottom: '24px' }}>
                      {featured.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('case-studies')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#7B1270',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0,
                    }}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {/* Right Column: Stacked Projects */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {sideProjects.map((proj, i) => (
                  <div
                    key={proj._id || i}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E8D8E8',
                      borderRadius: '12px',
                      padding: '24px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(196,25,122,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {i % 2 === 0 ? <Activity size={18} color="#C4197A" /> : <Lock size={18} color="#C4197A" />}
                      </div>
                      {proj.tags && proj.tags.length > 0 && (
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {proj.tags.map((tag, idx) => (
                            <span key={idx} className="chip-tag chip-tag-light">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0D0B14', marginBottom: '6px' }}>
                      {proj.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#6B5E6B', lineHeight: '1.5' }}>
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
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
