require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Open Policy Aruba`,
    author: `Anon`,
    description: `Open Policy Aruba`,
    siteUrl: `https://openpolicyaruba.com/`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    'gatsby-transformer-json',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/static/` },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    // },
    // {
    //   resolve: `gatsby-remark-images`,
    //   options: {
    //     maxWidth: 650,
    //     withWebp: true,
    //     quality: 40,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-catch-links`,
    //   options: {
    //     excludePattern: /(excluded-link|external)/,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Open Policy Aruba`,
        short_name: `OPA`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `static/images/icons/favicon-96x96.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
