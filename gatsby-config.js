require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Sophie Saiada`,
    // Default title of the page
    siteTitleAlt: `Sophie Saiada`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Sophie Saiada`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://sophies.dev`,
    // Used for SEO
    siteDescription: `Sophie Saiada, Full Stack (web & mobile) Developer`,
    keywords: `Sophie Saiada,סופי ציאדה, מפתחת,מפתח,פול סטאק,מתכנת,מתכנתת,Senior Full Stack Developer,Senior Full-Stack Developer,Full-Stack Senior Developer,תכנות,Full Stack Developer,Full Stack,Full-Stack,Developer,Mobile,Web,React,ReactJS,iOS,Android,Kotlin,Python,Swift,Software Engineer`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@SophiaSa`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 100,
              linkImagesToOriginal: true
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        mdx: false,
        // Links displayed in the header on the right side
        basePath: "/",
        blogPath: "/blog",
        tagsPath: "/tags",
        showLineNumbers: true,
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/SophiaSaiada/`
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/sophie-saiada/`
          }
        ],
        navigation: [
          {
            title: `Home`,
            slug: `/`
          },
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About Me`,
            slug: `/about`
          },
          {
            title: `Contact`,
            slug: `/contact`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sophie Saiada`,
        short_name: `SophieSaiada`,
        start_url: `/`,
        description: `Sophie Saiada, Full Stack (web & mobile) Developer`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `./src/images/AvatarGithub.png`
      }
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preload-fonts`
  ]
};
