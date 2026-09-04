export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'challenge', title: 'The Challenge', type: 'text' },
    { name: 'problemPoints', title: 'Problem Bullet Points', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'architectureStages',
      title: 'Architecture Diagram Stages',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Box Label', type: 'string' },
          { name: 'subtitle', title: 'Box Subtitle', type: 'string' },
          { name: 'isHighlighted', title: 'Highlighted (Purple)', type: 'boolean' }
        ]
      }]
    },
    {
      name: 'highlights',
      title: 'Technical Highlights',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'body', title: 'Body', type: 'string' }
        ]
      }]
    },
    {
      name: 'metrics',
      title: 'Outcome Metrics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Metric Value', type: 'string' },
          { name: 'label', title: 'Metric Label', type: 'string' }
        ]
      }]
    }
  ]
}
