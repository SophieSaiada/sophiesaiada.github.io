/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{
        color: `heading`,
        textDecoration: `none`,
        // MOD: logo gradient and letter-spacing
        letterSpacing: "-0.06em",
        background:
          "linear-gradient(270deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent"
      }}
    >
      <div sx={{ my: 0, fontWeight: `semibold`, fontSize: [3, 4] }}>
        {siteTitle}
      </div>
    </Link>
  );
};

export default HeaderTitle;
