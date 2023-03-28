/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "./layout";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils";
import Hero from "../texts/hero.mdx";
import Bottom from "../texts/bottom.mdx";

export { Head } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";
import GridPosts from "../../../components/grid-posts";
import ProjectsListing, {
  ListingProps
} from "../../../components/projects-listing";
import HomepagePostWithBanner from "./HomepagePostWithBanner";
import { MBHomepageProps } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";

const useProjectsAndPosts = () => {
  const data = useStaticQuery<
    { site: { siteMetadata: ListingProps } } & {
      allPost: { nodes: HomepagePostWithBanner[] };
    }
  >(graphql`
    query {
      site {
        siteMetadata {
          projects {
            name
            image
            description
            url
            stars
            tags
          }
        }
      }
      allPost(sort: { date: DESC }, limit: 8) {
        nodes {
          id
          slug
          title
          excerpt
          date(formatString: "MM/DD/YY")
          timeToRead
          description
          contentFilePath
          banner {
            childImageSharp {
              fluid {
                aspectRatio
                src
                srcSet
                sizes
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
          tags {
            name
            slug
          }
        }
      }
    }
  `);
  const getPostNumberFromContentFilePath = (post: HomepagePostWithBanner) =>
    post.contentFilePath.match(/\/content\/posts\/([0-9]+)-/)![1];
  const postsToShow = data.allPost.nodes.filter(
    (post) =>
      post.contentFilePath.match(/-en\/index.mdx$/) ||
      !data.allPost.nodes.some(
        (otherPost) =>
          otherPost.id !== post.id &&
          getPostNumberFromContentFilePath(otherPost) ===
            getPostNumberFromContentFilePath(post)
      )
  );

  return {
    projects: data.site.siteMetadata.projects,
    posts: postsToShow
  };
};

const Homepage = (_: MBHomepageProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();
  const { projects, posts } = useProjectsAndPosts();

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mt: [-3, -3, -4],
          mb: [5, 6, 6],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`
        }}
      >
        <Hero />
      </section>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      <GridPosts posts={posts} showTags={false} limitPostWhenSingleColumn />
      <Title text="Projects">
        <a href="https://github.com/SophiaSaiada">GitHub</a>
      </Title>
      <ProjectsListing basePath={basePath} projects={projects} />
      <Bottom />
    </Layout>
  );
};

export default Homepage;
