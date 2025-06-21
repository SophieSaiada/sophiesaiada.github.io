/** @jsx jsx */
import "../../../style/main.css";
import "../../../style/cta-button.scss";
import * as React from "react";
import { Global } from "@emotion/react";
import { Box, Container, jsx, get, useColorMode } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import MdxComponents from "@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components";
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code";
import MenuBar from "./MenuBar";
import Footer from "../../../components/footer";

type LayoutProps = {
  children: React.ReactNode;
  withoutContainer?: boolean;
  className?: string;
};

const Layout = ({
  children,
  withoutContainer,
  className = ``
}: LayoutProps) => {
  const [_colorMode, setColorMode] = useColorMode<"light" | "dark">();
  React.useEffect(() => {
    setColorMode("dark");
  }, []);

  const Wrapper = withoutContainer ? React.Fragment : Container;

  return (
    <MDXProvider components={MdxComponents}>
      <Global
        styles={(t) => ({
          "*": {
            boxSizing: `inherit`
          },
          html: {
            WebkitTextSizeAdjust: `100%`
          },
          img: {
            borderStyle: `none`
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`
          },
          "[hidden]": {
            display: `none`
          },
          "::selection": {
            backgroundColor: get(t, `colors.text`),
            color: get(t, `colors.background`)
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`
          }
        })}
      />
      <MenuBar />
      <Wrapper>
        <Box
          id="skip-nav"
          as="main"
          variant="layout.main"
          sx={{ ...CodeStyles }}
          className={`${withoutContainer || "mt-[6rem]"} ${className}`}
        >
          {children}
        </Box>
        <Footer />
      </Wrapper>
    </MDXProvider>
  );
};

export default Layout;
