import React, { useState } from 'react';

interface NodeDef {
  id: string;
  label: string;
  cx: number;
  cy: number;
  description: string;
}

export const InteractiveNodeDiagram: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: NodeDef[] = [
    { id: 'discovery', label: 'Discovery', cx: 220, cy: 42, description: 'Problem space mapping & user telemetry analysis' },
    { id: 'product', label: 'Product', cx: 85, cy: 125, description: 'PRD synthesis & feature scoping for scale' },
    { id: 'strategy', label: 'Strategy', cx: 235, cy: 125, description: 'Business alignment & architectural roadmap' },
    { id: 'resolve', label: 'Resolve', cx: 365, cy: 125, description: 'SLA governance & automated execution' },
    { id: 'technology', label: 'Technology', cx: 220, cy: 208, description: 'Cloud infrastructure & microservices engineering' },
  ];

  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  const edges = [
    { from: 'discovery', to: 'product' },
    { from: 'discovery', to: 'strategy' },
    { from: 'strategy', to: 'resolve' },
    { from: 'product', to: 'resolve' },
    { from: 'resolve', to: 'technology' },
  ];

  const hoveredObj = nodes.find(n => n.id === hoveredNode);

  return (
    <div
      style={{
        backgroundColor: '#EFE2EF',
        borderRadius: '12px',
        minHeight: '240px',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <svg
        viewBox="0 0 440 250"
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '300px',
          overflow: 'visible',
        }}
      >
        {/* Draw Edges */}
        {edges.map((edge, idx) => {
          const source = nodeMap.get(edge.from);
          const target = nodeMap.get(edge.to);
          if (!source || !target) return null;

          const isEdgeHighlighted =
            hoveredNode === edge.from || hoveredNode === edge.to;

          return (
            <line
              key={idx}
              x1={source.cx}
              y1={source.cy}
              x2={target.cx}
              y2={target.cy}
              stroke="#C4197A"
              strokeWidth={isEdgeHighlighted ? 2.5 : 1.5}
              strokeOpacity={isEdgeHighlighted ? 0.9 : 0.45}
              style={{ transition: 'all 0.25s ease' }}
            />
          );
        })}

        {/* Draw Nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          return (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Outer Pulse / Ring */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={isHovered ? 24 : 18}
                fill="#7B1270"
                fillOpacity={isHovered ? 0.28 : 0.12}
                stroke="#7B1270"
                strokeWidth={1.5}
                style={{ transition: 'all 0.2s ease' }}
              />

              {/* Inner Dot */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={isHovered ? 7 : 5}
                fill={isHovered ? '#C4197A' : '#7B1270'}
                style={{ transition: 'all 0.2s ease' }}
              />

              {/* Node Label */}
              <text
                x={node.cx}
                y={node.cy + 34}
                textAnchor="middle"
                fontSize={12}
                fontWeight={isHovered ? 700 : 500}
                fill={isHovered ? '#0D0B14' : '#6B5E6B'}
                fontFamily="Inter, sans-serif"
                style={{ transition: 'fill 0.2s ease' }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Dynamic Hover Tooltip / Status Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          left: '16px',
          right: '16px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(4px)',
          borderRadius: '8px',
          padding: '4px 10px',
          fontSize: '11px',
          color: hoveredObj ? '#7B1270' : '#6B5E6B',
          fontWeight: hoveredObj ? 600 : 400,
          border: '1px solid rgba(123, 18, 112, 0.15)',
          transition: 'all 0.2s ease',
          pointerEvents: 'none',
        }}
      >
        {hoveredObj
          ? `${hoveredObj.label}: ${hoveredObj.description}`
          : 'Hover nodes to trace architectural workflow'}
      </div>
    </div>
  );
};
