import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  if (submitted) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '24px 12px',
          minHeight: '220px',
        }}
      >
        <CheckCircle2 size={48} color="#7B1270" style={{ marginBottom: '16px' }} />
        <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0D0B14', marginBottom: '8px' }}>
          Message Sent
        </h4>
        <p style={{ fontSize: '14px', color: '#6B5E6B', marginBottom: '20px', maxWidth: '320px' }}>
          Thank you for reaching out! Iretioluwa will review your note and respond shortly.
        </p>
        <button
          onClick={handleReset}
          style={{
            background: 'transparent',
            border: '1.5px solid #7B1270',
            color: '#7B1270',
            borderRadius: '8px',
            padding: '8px 18px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label
          htmlFor="name"
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 600,
            color: '#0D0B14',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{
            width: '100%',
            padding: '10px 14px',
            fontSize: '14px',
            border: '1px solid #E8D8E8',
            borderRadius: '8px',
            outline: 'none',
            color: '#0D0B14',
            backgroundColor: '#FFFFFF',
            transition: 'border-color 0.15s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#7B1270')}
          onBlur={(e) => (e.target.style.borderColor = '#E8D8E8')}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 600,
            color: '#0D0B14',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="your.email@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{
            width: '100%',
            padding: '10px 14px',
            fontSize: '14px',
            border: '1px solid #E8D8E8',
            borderRadius: '8px',
            outline: 'none',
            color: '#0D0B14',
            backgroundColor: '#FFFFFF',
            transition: 'border-color 0.15s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#7B1270')}
          onBlur={(e) => (e.target.style.borderColor = '#E8D8E8')}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 600,
            color: '#0D0B14',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={3}
          placeholder="How can Iretioluwa help your product architecture?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{
            width: '100%',
            padding: '10px 14px',
            fontSize: '14px',
            border: '1px solid #E8D8E8',
            borderRadius: '8px',
            outline: 'none',
            color: '#0D0B14',
            backgroundColor: '#FFFFFF',
            resize: 'vertical',
            minHeight: '84px',
            transition: 'border-color 0.15s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#7B1270')}
          onBlur={(e) => (e.target.style.borderColor = '#E8D8E8')}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          backgroundColor: '#7B1270',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '8px',
          padding: '12px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: loading ? 'wait' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '4px',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = '#9B1890')}
        onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = '#7B1270')}
      >
        {loading ? 'Sending...' : (
          <>
            <span>Send Message</span>
            <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
};
