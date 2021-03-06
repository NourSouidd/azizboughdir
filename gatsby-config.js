module.exports = {
  siteMetadata: {
    title: `Aziz Boughedir Portfolio`,
    description: `Aziz Boughedir is a contemporary artist located in Montreal.`,
    author: `Nour Souid`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // {
    //     resolve: `gatsby-transformer-remark`,
    //     options: {
    //       plugins: [
    //         {
    //           resolve: `gatsby-remark-phoneno-emailid-link`,
    //           options: {
    //             ...
    //           }
    //         }
    //       ],
    //     },
    //   }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
