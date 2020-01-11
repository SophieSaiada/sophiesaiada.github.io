/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle";
import useNavigation from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-navigation";
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import logo from "../../../images/Logo.svg";
import logoEn from "../../../images/LogoEn.svg";
import Language from "../../../lang";

const Header = ({ lang }) => {
  const { siteTitle, externalLinks, basePath } = useSiteMetadata();
  const nav = useNavigation();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex
        sx={{ mb: 2, alignItems: `center`, justifyContent: `space-between` }}
      >
        <Link
          to={replaceSlashes(`/${basePath}`)}
          aria-label={`${siteTitle} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none`, lineHeight: 0        }}
        >
          <img src={lang == Language.en ? logoEn : logo} style={{ height: lang == Language.en ? "2.5rem" : "1.5rem" }} />
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <Flex
        sx={{
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`
        }}
      >
        <Navigation nav={nav} lang={lang || Language.he} />
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map(link => (
            <Styled.a key={link.url} href={link.url}>
              {link.name}
            </Styled.a>
          ))}
        </div>
      </Flex>
    </header>
  );
};

export default Header;
