import style from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code";
export default {
  ...style,
  ".math": {
    direction: "ltr"
  },
  ".math-inline": {
    display: "inline-block"
  },
  "p > code": {
    bg: `#f3f4f4`,
    color: `#476582`,
    borderRadius: `3px`,
    fontSize: ".75em",
    px: 2,
    py: 1,
    mx: 1,
    fontFamily: `'Fira Code', source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace`
  }
};
