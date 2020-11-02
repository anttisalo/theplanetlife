const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'The Planet life',
    pages: [
      { path: '#getInvolved', name: 'Get involved' },
      { path: '#howItWorks', name: 'How it works' },
      { path: '#events', name: 'Events' },
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
  ],
};
