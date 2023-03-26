/** @jsx jsx */
import React from "react";
import type { PageProps } from "gatsby";
import { jsx } from "theme-ui";
import {
  Head,
  default as PostBase,
  MBPostProps
} from "@lekoarts/gatsby-theme-minimal-blog/src/components/post";

export { Head };

// MOD START: Add katex css
import "katex/dist/katex.min.css";
import copyHandler from "../../../copy-tex/copy-tex";
// MOD END

const Post: React.FC<
  React.PropsWithChildren<
    PageProps<
      MBPostProps,
      // MOD START: Load custom CSS and lang from frontmatter
      {
        frontmatter: {
          lang?: "he" | "en";
          css?: {
            relativePath: string;
          };
        };
      }
      // MOD END
    >
  >
> = ({ children, ...props }) => {
  // MOD START: Add post custom CSS
  if (props.pageContext.frontmatter.css?.relativePath) {
    require("../../../../content/posts/" +
      props.pageContext.frontmatter.css.relativePath);
  }
  // MOD END

  const isRTL = (props.pageContext.frontmatter.lang || "he") === "he";

  return (
    <PostBase
      {...props}
      // MOD: add onCopy
      children={
        children && (
          <span
            onCopy={copyHandler}
            dir={isRTL ? "rtl" : "ltr"}
            sx={{
              ".gatsby-resp-image-wrapper": {
                margin: "auto !important",
                boxShadow: "unset !important"
              },
              "p, li": isRTL
                ? { fontFamily: "'Assistant', sans-serif" }
                : { lineHeight: 1.85 }
            }}
          >
            {children}
          </span>
        )
      }
    />
  );
};

export default Post;
