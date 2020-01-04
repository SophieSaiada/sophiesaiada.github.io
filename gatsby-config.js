require(`dotenv`).config({
  path: `.env`
});

const pagesPath = `./content/pages`;
const postsPath = `./content/posts`;

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `סופיה ציאדה`,
    // Default title of the page
    siteTitleAlt: `סופיה ציאדה`,
    // Can be used for e.g. JSONLD
    siteHeadline: `סופיה ציאדה`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `http://localhost:8000`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `he`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@SophiaSa`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `GitHub`,
        url: `https://github.com/SophiaSa/`
      }
    ],
    navigation: [
      {
        title: `פוסטים`,
        slug: `/blog`
      },
      {
        title: `קצת עליי`,
        slug: `/about`
      }
    ],
    basePath: "/",
    blogPath: "/blog",
    tagsPath: "/tags",
    pagesPath,
    postsPath,
    showLineNumbers: true
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [require("remark-math"), require("remark-html-katex")],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        mdx: false,
        pagesPath,
        postsPath
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Assistant`,
            subsets: [`hebrew`, `latin`],
            variants: [`400`, `600`]
          },
          {
            family: `Secular One`,
            subsets: [`hebrew`, `latin`]
          },
          {
            family: `Fira Code`,
            subsets: [`latin-ext`, `latin`]
          }
        ]
      }
    }
  ]
};
