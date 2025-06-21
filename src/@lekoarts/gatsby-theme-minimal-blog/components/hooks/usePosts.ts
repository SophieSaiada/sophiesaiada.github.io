import { graphql, useStaticQuery } from "gatsby";
import HomepagePostWithBanner from "../HomepagePostWithBanner";

export { Head } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";

export const usePosts = () => {
  const data = useStaticQuery<{
    allPost: { nodes: (HomepagePostWithBanner & { background: string })[] };
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
