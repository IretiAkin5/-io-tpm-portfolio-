import React, { useState, useEffect } from 'react';
import { PageId } from '../components/Navbar';
import { ContactForm } from '../components/ContactForm';
import { Linkedin, Github } from 'lucide-react';
import { client } from '../lib/sanity';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
}

interface SanitySkill {
  _id?: string;
  name: string;
  percentage?: number;
  pct?: number;
  level: string;
  order?: number;
}

interface SanityExperience {
  _id?: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
  isActive?: boolean;
  order?: number;
}

const defaultSkills: SanitySkill[] = [
  { name: 'System Architecture', percentage: 95, level: 'Advanced' },
  { name: 'Cloud Infrastructure (AWS/GCP)', percentage: 78, level: 'Proficient' },
  { name: 'Data Engineering / SQL', percentage: 80, level: 'Proficient' },
  { name: 'API Design', percentage: 88, level: 'Proficient' },
];

const defaultExperiences: SanityExperience[] = [
  {
    role: 'Senior Technical Product Manager',
    company: 'Fintech Scaleup',
    period: '2022 — Present',
    description: 'Orchestrated enterprise payments gateway migration processing $450M+ annual volume. Led 14 engineers in decomposing legacy monolith into 6 AWS microservices with zero downtime.',
    tags: ['API Design', 'Microservices', 'AWS'],
    isActive: true,
  },
  {
    role: 'Product Manager, Data Platform',
    company: 'PropertyBridge',
    period: '2019 — 2022',
    description: 'Spearheaded real-time real estate data pipeline rebuild. Standardized multi-tenant Kafka streaming architecture serving 14 regional MLS providers.',
    isActive: false,
  },
];

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  const [skills, setSkills] = useState<SanitySkill[] | null>(null);
  const [experiences, setExperiences] = useState<SanityExperience[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      client.fetch('*[_type == "experience"] | order(order asc)'),
      client.fetch('*[_type == "skill"] | order(order asc)'),
    ])
      .then(([expData, skillData]) => {
        setExperiences(expData && expData.length > 0 ? expData : defaultExperiences);
        setSkills(skillData && skillData.length > 0 ? skillData : defaultSkills);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error in ExperiencePage:', err);
        setExperiences(defaultExperiences);
        setSkills(defaultSkills);
        setLoading(false);
      });
  }, []);

  const displayExperiences = experiences || defaultExperiences;
  const displaySkills = skills || defaultSkills;

  return (
    <div style={{ backgroundColor: '#F7EFF7', minHeight: '100vh', paddingTop: '56px' }} className="page-enter">
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* PAGE HEADER */}
        <section style={{ padding: '60px 0 40px 0' }}>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#0D0B14',
              marginBottom: '10px',
            }}
          >
            Professional Architecture
          </h1>
          <p style={{ fontSize: '14px', color: '#6B5E6B', maxWidth: '640px' }}>
            A timeline of scaling complex technical products and aligning engineering outcomes with business strategy.
          </p>
        </section>

        {/* TWO-COLUMN LAYOUT */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            paddingBottom: '80px',
          }}
        >
          {/* LEFT COLUMN: Career Timeline */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0D0B14', marginBottom: '24px' }}>
              Career Timeline
            </h2>

            {loading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ backgroundColor: '#EFE2EF', borderRadius: '8px', height: '100px', opacity: 0.7 }} />
                <div style={{ backgroundColor: '#EFE2EF', borderRadius: '8px', height: '100px', opacity: 0.7 }} />
              </div>
            ) : (
              <div style={{ position: 'relative', paddingLeft: '28px' }}>
                {/* Gradient Timeline Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    bottom: '20px',
                    left: '7px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, #C4197A, #E8D8E8)',
                  }}
                />

                {displayExperiences.map((exp, idx) => (
                  <div key={exp._id || idx} style={{ position: 'relative', marginBottom: idx < displayExperiences.length - 1 ? '36px' : 0 }}>
                    {/* Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-28px',
                        top: '4px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: exp.isActive ? '#7B1270' : '#FFFFFF',
                        border: exp.isActive ? '3px solid #FFFFFF' : '2px solid #E8D8E8',
                        boxShadow: exp.isActive ? '0 0 0 1px #7B1270' : 'none',
                      }}
                    />

                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0D0B14', marginBottom: '2px' }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: '13px', color: '#9E8F9E', marginBottom: '8px' }}>
                      {exp.company} · {exp.period}
                    </div>
                    <p style={{ fontSize: '13px', color: exp.isActive ? '#6B5E6B' : '#9E8F9E', lineHeight: '1.5', marginBottom: exp.tags && exp.tags.length ? '12px' : 0 }}>
                      {exp.description}
                    </p>
                    {exp.tags && exp.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {exp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="chip-tag chip-tag-light">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Technical Matrix + Education & Certs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Section 1: Technical Matrix */}
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0D0B14', marginBottom: '20px' }}>
                Technical Matrix
              </h2>

              {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ backgroundColor: '#EFE2EF', borderRadius: '6px', height: '24px', opacity: 0.7 }} />
                  <div style={{ backgroundColor: '#EFE2EF', borderRadius: '6px', height: '24px', opacity: 0.7 }} />
                  <div style={{ backgroundColor: '#EFE2EF', borderRadius: '6px', height: '24px', opacity: 0.7 }} />
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {displaySkills.map((skill, idx) => {
                    const pctVal = skill.percentage ?? skill.pct ?? 80;
                    return (
                      <div key={skill._id || idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#0D0B14', flex: '1 1 180px' }}>
                          {skill.name}
                        </div>

                        <div
                          style={{
                            width: '130px',
                            height: '4px',
                            backgroundColor: '#E8D8E8',
                            borderRadius: '2px',
                            overflow: 'hidden',
                            flexShrink: 0,
                          }}
                        >
                          <div
                            style={{
                              width: `${pctVal}%`,
                              height: '100%',
                              backgroundColor: '#7B1270',
                              borderRadius: '2px',
                            }}
                          />
                        </div>

                        <div style={{ fontSize: '12px', color: '#6B5E6B', minWidth: '70px', textAlign: 'right' }}>
                          {skill.level}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Section 2: Education & Certs */}
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0D0B14', marginBottom: '16px' }}>
                Education &amp; Certs
              </h2>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C4197A', display: 'inline-block', marginTop: '6px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0D0B14' }}>AWS Certified Solutions Architect</div>
                    <div style={{ fontSize: '12px', color: '#6B5E6B' }}>Amazon Web Services · 2022</div>
                  </div>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C4197A', display: 'inline-block', marginTop: '6px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0D0B14' }}>B.Sc. Computer Science</div>
                    <div style={{ fontSize: '12px', color: '#6B5E6B' }}>Babcock University · 2018</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA + CONTACT FORM ROW */}
        <section
          style={{
            padding: '60px 0 90px 0',
            borderTop: '1px solid #E8D8E8',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '120px',
                fontWeight: 800,
                color: '#EFE2EF',
                lineHeight: '0.9',
                userSelect: 'none',
                marginBottom: '16px',
                letterSpacing: '-4px',
              }}
            >
              IO
            </div>

            <div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0D0B14', marginBottom: '10px' }}>
                Let's build structural integrity.
              </h2>
              <p style={{ fontSize: '14px', color: '#6B5E6B', lineHeight: '1.6', marginBottom: '24px', maxWidth: '420px' }}>
                Available for technical product leadership roles and strategic consulting engagements.
              </p>

              <div style={{ display: 'flex', gap: '20px' }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#7B1270', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
                >
                  <Linkedin size={18} color="#7B1270" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#7B1270', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
                >
                  <Github size={18} color="#7B1270" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8D8E8', borderRadius: '12px', padding: '28px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0D0B14', marginBottom: '16px' }}>
              Send a Direct Message
            </h3>
            <ContactForm />
          </div>
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
