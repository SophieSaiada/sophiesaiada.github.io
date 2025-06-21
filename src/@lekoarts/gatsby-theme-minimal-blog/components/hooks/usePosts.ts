import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";

export { Head } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";

export const usePosts = () => {
  const data = useStaticQuery<{
    allPost: {
      nodes: {
        id: string;
        slug: string;
        title: string;
        date: string;
        excerpt: string;
        description: string;
        timeToRead?: number;
        contentFilePath: string;
        banner: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
        tags?: {
          name: string;
          slug: string;
        }[];
      }[];
    };
  }>(graphql`
    query {
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

  return postsToShow;
};
