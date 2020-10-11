export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    // {
    //   name: 'siteUrl',
    //   type: 'url',
    //   title: 'Site URL (no trailing slash)',
    //   validation: Rule => Rule.required()
    // },
    {
      name: 'title',
      type: 'string',
      title: 'Website Title',
      description: 'Default SEO title used for search engines and social media.',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Website Description',
      description: 'Default SEO descriptions used for search engines and social media.',
      validation: Rule => Rule.required()
    }
    // {
    //   name: 'author',
    //   type: 'reference',
    //   description: 'Publish an author and set a reference to them here.',
    //   title: 'Author',
    //   to: [{type: 'author'}]
    // }
  ]
}
