/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        color: `secondary`,
        a: {
          variant: `links.secondary`
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`
      }}
    >
      <div>
        {/* MOD: shorten copyright, add link to LinkedIn */}
        &copy; {new Date().getFullYear()} {siteTitle} &#8901;{" "}
        <Link
          aria-label="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/sophie-saiada/"
        >
          LinkedIn
        </Link>
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          target="_blank"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          target="_blank"
          href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
