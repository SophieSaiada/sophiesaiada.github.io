import style from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code";

export default {
  ...style,
  ".math": {
    direction: "ltr",
    fontSize: [1, 1, 2]
  },
  ".math-inline": {
    display: "inline-block"
  },
  "p > code, li > code": {
    background: "var(--theme-ui-colors-plain-backgroundColor)",
    color: "var(--theme-ui-colors-heading)",
    borderRadius: `3px`,
    fontSize: ".75em",
    px: 2,
    py: 1,
    mx: 1,
    fontFamily: `'JetBrains Mono', source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace`,
    WebkitFontFeatureSettings: `"liga" on, "calt" on`,
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility"
  },
  ".preview-image-container": {
    mx: -3,
    borderRadius: [`0`, `3px`]
  },
  ".gatsby-highlight": {
    ...style[".gatsby-highlight"],
    direction: "ltr",
    borderRadius: [`0`, `3px`],
    mx: -3,
    boxShadow:
      "0px 4px 5px -2px rgba(0, 0, 0, 0.1), 0px 7px 10px 1px rgba(0, 0, 0, 0.07), 0px 2px 16px 1px rgba(0, 0, 0, 0.06)",
    backgroundColor: "#1a1a1a",
    "&.with-github-link": {
      borderRadius: [`0`, `3px 3px 0 0`]
    },
    code: {
      ...style[".gatsby-highlight"]["code"],
      fontSize: "1rem",
      fontFamily: `'JetBrains Mono', source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace`,
      WebkitFontFeatureSettings: `"liga" on, "calt" on`,
      WebkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility"
    },
    'pre[class~="language-kotlin"]:before': {
      content: `"Kotlin"`,
      background: `#d46586`,
      color: `black`
    },
    'pre[class~="language-hs"]:before': {
      content: `"Haskell"`,
      background: `#949494`,
      color: `black`
    },
    'pre[class~="language-python"]:before': {
      content: `"Python"`,
      background: `#ffd44b`,
      color: `black`
    },
    'pre[class*="language-"]:before': {
      ...style[".gatsby-highlight"]['pre[class*="language-"]:before'],
      textTransform: `none`
    }
  },
  ".gatsby-highlight--github--container": {
    borderRadius: [`0`, `0 0 3px 3px`],
    mx: -3,
    boxShadow:
      "0px 4px 5px -2px rgba(0, 0, 0, 0.1), 0px 7px 10px 1px rgba(0, 0, 0, 0.07), 0px 2px 16px 1px rgba(0, 0, 0, 0.06)",
    zIndex: 2,
    position: "relative",
    background: "var(--theme-ui-colors-plain-backgroundColor)",
    color: "var(--theme-ui-colors-heading)",
    px: 3,
    py: 2,
    fontSize: "0.75rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    img: {
      height: "0.75rem"
    },
    "&:hover": {
      textDecoration: "underline"
    }
  }
};
