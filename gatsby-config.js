const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'The Planet life',
    pages: [
      { path: '#aboutUs', name: 'About' },
      { path: '#howItWorks', name: 'How it works' },
      { path: '#events', name: 'Events' },
      { path: '#contact', name: 'Contact' },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: path.join(__dirname, 'src', 'fonts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sections',
        path: path.join(__dirname, 'src', 'sections'),
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Sans\:300`,
          `IBM Plex Mono\:700`,
          `Inter\:300,400,500,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://life.us20.list-manage.com/subscribe/post?u=1859c73ef91d857c5b0271135&amp;id=0a15e83427',
      },
    },
  ],
};
