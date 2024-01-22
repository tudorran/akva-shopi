import {TagIcon} from '@sanity/icons'
import pluralize from 'pluralize-esm'
import {defineArrayMember, defineField} from 'sanity'

export default defineField({
  name: 'module.products',
  title: 'Products',
  type: 'object',
  icon: TagIcon,
  fields: [
    // Modules (products)
    defineField({
      name: 'modules',
      title: 'Products',
      type: 'array',
      of: [defineArrayMember({type: 'module.product'})],
      validation: (rule) => rule.required().max(2),
    }),
    // Layout
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'card',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          {
            title: 'Cards (large)',
            value: 'card',
          },
          {
            title: 'Pills (small)',
            value: 'pill',
          },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      products: 'modules',
    },
    prepare(selection) {
      const {products} = selection
      return {
        subtitle: 'Products',
        title: products?.length > 0 ? pluralize('product', products.length, true) : 'No products',
        media: TagIcon,
      }
    },
  },
})
