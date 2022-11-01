export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'reviewtext',
        title: 'Review Text',
        type: 'text',
      },
      {
        name: 'ratingimage',
        title: 'Rating Image',
        type: 'image',
        options: {
            hotspot: true,
        }
      },
      {
        name: 'user',
        title: 'User',
        type: 'string',
      },
      {
        name: 'job',
        title: 'Job',
        type: 'string',
      },
      {
        name: 'userimage',
        title: 'User Image',
        type: 'image',
        options: {
            hotspot: true,
        }
      },
      
    ]
      
  }
  