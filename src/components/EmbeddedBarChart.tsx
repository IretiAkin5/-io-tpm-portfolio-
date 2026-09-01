import React from 'react';

export const EmbeddedBarChart: React.FC = () => {
  // 6 bars with varying heights suggesting growth trend
  const bars = [
    { height: 35, val: '12ms' },
    { height: 65, val: '45ms' },
    { height: 50, val: '30ms' },
    { height: 95, val: '120ms' },
    { height: 75, val: '85ms' },
    { height: 90, val: '110ms' },
  ];

  return (
    <div style={{ width: '100%', marginTop: '20px' }}>
      <svg
        viewBox="0 0 300 120"
        style={{ width: '100%', height: '110px', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="pinkBarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C4197A" />
            <stop offset="100%" stopColor="#7B1270" />
          </linearGradient>
        </defs>

        {/* Baseline rule line */}
        <line
          x1="0"
          y1="105"
          x2="300"
          y2="105"
          stroke="#2E2040"
          strokeWidth="1.5"
        />

        {/* 6 Bars */}
        {bars.map((bar, idx) => {
          const width = 32;
          const gap = 16;
          const startX = 14;
          const x = startX + idx * (width + gap);
          const barHeight = bar.height;
          const y = 105 - barHeight;

          return (
            <g key={idx} className="bar-group" style={{ cursor: 'pointer' }}>
              <rect
                x={x}
                y={y}
                width={width}
                height={barHeight}
                rx={4}
                ry={4}
                fill="url(#pinkBarGradient)"
                style={{
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  transformOrigin: `${x + width / 2}px 105px`,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
