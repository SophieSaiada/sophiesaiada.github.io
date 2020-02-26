/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import StackGrid from "react-stack-grid";
import useWindowSize from "../hooks/window-size";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Text, Grid, Box } from "@theme-ui/components";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import "./grid-posts.css";
import Language from "../lang";

export type Post = {
  slug: string;
  title: string;
  date: string;
  banne: object;
  lang: string;
  tags?: {
    name: string;
    slug: string;
  }[];
}

type ListingProps = {
  posts: Post[];
  className?: string;
  showTags?: boolean;
  limitPostWhenSingleColumn?: boolean;
};

const Listing = ({
  posts,
  className,
  limitPostWhenSingleColumn = false
}: ListingProps) => {
  const [width, _] = useWindowSize();
  const { basePath, tagsPath } = useSiteMetadata();
  const numberOfColumns = width >= 980 ? 3 : width >= 700 ? 2 : 1;
  const multipleColumns = numberOfColumns > 1;
  const limitedPosts =
    !multipleColumns && limitPostWhenSingleColumn ? posts.slice(0, 5) : posts;

  return (
    <section sx={{ mb: [2, 3, 4] }} className={className}>
      <Grid gap={20} className="post-grid" columns={[numberOfColumns]}>
        {limitedPosts.map(post => {
          const tags = post.tags.map(tag => (
            <Styled.a
              as={Link}
              key={tag.slug}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
              className="post-grid--item--tag"
              style={{
                color: "white",
                marginLeft: post.lang == Language.he ? "0.5em" : "none",
                marginRight: post.lang == Language.he ? "none" : "0.5em"
              }}
            >
              {tag.name}
            </Styled.a>
          ));

          return (
            <Box
              as={"a"}
              href={post.slug}
              key={post.slug}
              style={{ direction: post.lang == Language.he ? "rtl" : "ltr" }}
              className={`post-grid--item ${
                multipleColumns ? "with-image" : "without-image"
              }`}
            >
              {multipleColumns && (
                <Img
                  fluid={post.banner.childImageSharp.fluid}
                  className="post-grid--item--image"
                />
              )}
              <div className="post-grid--item--content">
                {multipleColumns && tags}
                <Text sx={{ fontFamily: `heading`, fontSize: 2 }}>
                  {post.title}
                </Text>
                {multipleColumns || tags}
                <Text>{post.date}</Text>
              </div>
            </Box>
          );
        })}
      </Grid>
    </section>
  );
};

export default Listing;
