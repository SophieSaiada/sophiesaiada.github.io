require(`dotenv`).config({
  path: `.env`
});

const pagesPath = `./content/pages`;
const postsPath = `./content/posts`;

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `סופיה ציאדה`,
    siteTitleEn: `Sophia Saiada`,
    // Default title of the page
    siteTitleAlt: `סופיה ציאדה`,
    // Can be used for e.g. JSONLD
    siteHeadline: `סופיה ציאדה`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://sophiasa.dev`,
    // Used for SEO
    siteDescription: `Sophia Saiada, Full Stack (web & mobile) Developer`,
    keywords: `Sophia Saiada,סופיה ציאדה, מפתחת,מפתח,פול סטאק,מתכנת,מתכנתת,Full Stack Developer,Full Stack,Developer,Mobile,Web,React,ReactJS,iOS,Android,Kotlin,Python,Swift,Software Engineer`,
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
        url: `https://github.com/SophiaSaiada/`
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/sophia-saiada/`
      }
    ],
    navigation: [
      {
        title: { he: `עמוד ראשי`, en: `Home` },
        slug: { he: `/`, en: `/` }
      },
      {
        title: { he: `פוסטים`, en: `Blog` },
        slug: { he: `/blog`, en: `/blog` }
      },
      {
        title: { he: `קצת עליי`, en: `About` },
        slug: { he: `/about`, en: `/about` }
      },
      {
        title: { he: `צרו קשר`, en: `Contact` },
        slug: { he: `/contact`, en: `/contact` }
      }
    ],
    basePath: "/",
    blogPath: "/blog",
    tagsPath: "/tags",
    pagesPath,
    postsPath,
    showLineNumbers: true,
    projects: [
      {
        name: "Gödel",
        description:
          "שפת תכנות שפיתחתי בתור פרויקט גמר לתואר.<br />מכילה מאפיינים של שפות מונחות עצמים ושפות פונקציונליות.",
        url: "https://github.com/SophiaSaiada/Godel",
        tags: ["Kotlin", "Meta Programming", "אלגוריתמים"]
      },
      {
        name: "vue-conversational-form",
        description:
          'קומפוננטת Vue.js שמאפשרת להפוך טפסים לשיחות צ\'אט.<br />מימוש מחדש של הפרויקט ה<a href="https://github.com/space10-community/conversational-form">זה<a/> בתור Higher-Order-Component של Vue.js.</a>',
        url: "https://github.com/SophiaSaiada/vue-conversational-form",
        stars: 38,
        tags: ["Vue.js", "Front-End"]
      },
      {
        name: "vue-scala-calculator",
        description:
          "פרויקט קטן של מימוש מחשבון מדעי ב-Scala.js ו-Vue.js.<br />המחשבון מראה את ה-AST&rlm; (Abstract Syntax Tree) של הביטוי, ומאפשר לחשב את הערך הסופי עם אנימציה נחמדה.<br />זה למעשה היה הפרויקט שהוביל אותי לפתח את שפת התכנות Gödel (שניהם מכילים Parsing של ביטויים, אבל ב-Gödel זה יותר מורכב).",
        url: "https://github.com/SophiaSaiada/vue-scala-calculator",
        tags: ["Scala", "Vue.js", "אלגוריתמים"]
      }
    ]
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
              quality: 100,
              linkImagesToOriginal: true
            }
          },
          "gatsby-remark-copy-relative-linked-files"
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
        name: `Sophia Saiada`,
        short_name: `SophiaSaiada`,
        start_url: `/`,
        description: `Sophia Saiada, Full Stack (web & mobile) Developer`,
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
    `gatsby-plugin-preload-fonts`,
  ]
};
