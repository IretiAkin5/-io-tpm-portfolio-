export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'codeTag', title: 'Code Tag', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'isFeatured', title: 'Featured Project', type: 'boolean' },
    { name: 'order', title: 'Display Order', type: 'number' }
  ]
}
