import {defineArrayMember, defineField} from 'sanity'

export default defineField({
  name: 'hero.collection',
  title: 'Collection hero',
  type: 'object',
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
    }),
    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    // Content
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      validation: (rule) => rule.max(1),
      of: [
        defineArrayMember({
          name: 'productWithVariant',
          title: 'Product with variant',
          type: 'productWithVariant',
        }),
        defineArrayMember({
          name: 'imageWithProductHotspots',
          title: 'Image',
          type: 'imageWithProductHotspots',
        }),
      ],
    }),
  ],
})
