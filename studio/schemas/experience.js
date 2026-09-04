export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'period', title: 'Period', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'isActive', title: 'Active Role', type: 'boolean' },
    { name: 'order', title: 'Display Order', type: 'number' }
  ]
}
