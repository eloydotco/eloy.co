// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  site: 'https://eloy.co',
  markdown: {
    render: [
      '@astrojs/markdown-remark',
      {
        rehypePlugins: [
          'rehype-slug',
          [
            'rehype-autolink-headings',
            {
              behavior: 'prepend',
              content: {
                type: 'element',
                tagName: 'span',
                properties: { className: ['heading-link'] },
                children: [
                  {
                    type: 'element',
                    tagName: 'img',
                    properties: { src: '/assets/icons/link.svg' },
                    children: [],
                  },
                ],
              },
            },
          ],
          [
            'rehype-external-links',
            {
              content: {
                type: 'element',
                tagName: 'img',
                properties: {
                  src: '/assets/icons/external-link.svg',
                  alt: 'External link icon',
                },
                children: [],
              },
              contentProperties: { className: ['external-link-icon'] },
            },
          ],
        ],
      },
    ],
  },
});
