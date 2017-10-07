module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
