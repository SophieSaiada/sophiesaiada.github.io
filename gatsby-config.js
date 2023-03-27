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
    keywords: `Sophie Saiada,סופי ציאדה, מפתחת,מפתח,פול סטאק,מתכנת,מתכנתת,Full Stack Developer,Full Stack,Developer,Mobile,Web,React,ReactJS,iOS,Android,Kotlin,Python,Swift,Software Engineer`,
    // Will be set on the <html /> tag
    siteLanguage: `he`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@SophiaSa`,
    projects: [
      {
        name: "Gödel",
        image: "godel.gif",
        description: `
        An interpreted programming language that I developed as a final project for a bachelor's degree.  
        Written in Kotlin and its syntax resembles Kotlin's one.  
        Includes a CFG-parser generator (like Java's Bison) that I wrote from scratch.
        `,
        url: "https://github.com/SophiaSaiada/Godel",
        tags: ["Kotlin", "Meta Programming", "Algorithms"]
      },
      {
        name: "vue-conversational-form",
        image: "vue-conversational-form.gif",
        description: `
        A Vue.js component that turns web forms into conversations.
        It's an implementation of <a href="https://github.com/space10-community/conversational-form">another open-source project<a/> as Vue's Higher-Order-Component.
        Check out a live demo <a href="https://sophies.dev/vue-conversational-form/">here</a>.
        `,
        url: "https://github.com/SophiaSaiada/vue-conversational-form",
        stars: 48,
        tags: ["Vue.js", "Front-End"]
      },
      {
        name: "vue-scala-calculator",
        image: "vue-scala-calculator.gif",
        description: `
        A basic math expressions parser and evaluator.
It displays the AST (Abstract Syntax Tree) of the expression, and then evaluates each sub-tree in DFS order.
The algorithms that parse and evaluate the expressions are written in Scala (and exposed to Vue via Scala.js).
The calculator UI and the AST-viewer are written in Vue.js.
It was, in fact, the base for Gödel, as both projects parse and evaluate expressions.
Check out a live demo <a href="https://sophies.dev/vue-scala-calculator/">here</a>.
        `,
        url: "https://github.com/SophiaSaiada/vue-scala-calculator",
        tags: ["Scala", "Vue.js", "Algorithms"]
      }
    ]
  },
  plugins: [
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
            url: `https://www.linkedin.com/in/sophia-saiada/`
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
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
