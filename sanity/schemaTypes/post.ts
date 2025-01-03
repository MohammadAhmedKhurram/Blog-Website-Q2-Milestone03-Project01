export default {
    name: 'post',
    title: 'Post',
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
        name: 'subheading',
        title: 'Sub-Heading',
        type: 'text',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'text',
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'date',
      },
      {
        name: 'id',
        title: 'Id',
        type: 'number',
      }   
    ],
  };
  