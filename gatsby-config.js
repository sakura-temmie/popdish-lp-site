/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "PopDish",
  },
  plugins: [{
    resolve: "gatsby-source-microcms",
    options: {
      apiKey: process.env.API_KEY,
      serviceId: "popdish",
      apis: [
        {
          endpoint: "news",
        },
      ],
    },
  }
  ],
}
