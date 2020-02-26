/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import Language from "../../../lang";

type NavigationProps = {
  nav: {
    title: { he: string; en: string };
    slug: { he: string; en?: string };
  }[];
  lang: Language;
};

const Navigation = ({ nav, lang }: NavigationProps) => {
  const { basePath } = useSiteMetadata();
  const aMragin = lang == Language.he ? { ml: 3 } : { mr: 3 };

  return (
    <nav
      sx={{
        "a:not(:last-of-type)": aMragin,
        fontSize: [1, `18px`],
        ".active": { color: `heading`, fontWeight: `bold` }
      }}
    >
      {nav.map(item => (
        <Styled.a
          key={item.slug.he + "," + item.slug.en}
          as={Link}
          activeClassName="active"
          to={replaceSlashes(
            `/${basePath}/${
              lang == Language.he ? item.slug.he : item.slug.en || item.slug.he
            }/`
          )}
        >
          {lang == Language.he ? item.title.he : item.title.en}
        </Styled.a>
      ))}
    </nav>
  );
};

export default Navigation;
