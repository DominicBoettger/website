module.exports = {
  siteMetadata: {
    title: `Dominic Böttger`,
    name: `Dominic Böttger`,
    siteUrl: `https://dominicboettger.de`,
    description: `Dominic Böttger - Coder, Blogger`,
    hero: {
      heading: `Hi, I'm Dominic`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/dboettger`,
      },
      {
        name: `github`,
        url: `https://github.com/dominicboettger`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/dominic-b%C3%B6ttger-74952a138/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dominic Böttger`,
        short_name: `DBlog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
