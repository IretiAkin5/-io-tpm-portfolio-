export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    { name: 'name', title: 'Skill Name', type: 'string' },
    { name: 'percentage', title: 'Proficiency Percentage', type: 'number' },
    { name: 'level', title: 'Level Label', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' }
  ]
}
