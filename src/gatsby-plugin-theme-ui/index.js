import style from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

const secularOne = `'Secular One', sans-serif`;
const assistant = `'Assistant', sans-serif`;
export default {
  ...style,
  fonts: {
    heading: secularOne,
    body: assistant
  },
  fontWeights: {
    ...style.fontWeights,
    heading: 400
  },
  colors: {
    ...style.colors,
    primary: "#9c27b0",
    modes: {
      ...style.colors.modes,
      dark: {
        ...style.colors.modes.dark,
        primary: "#9c27b0"
      }
    }
  },
  styles: {
    ...style.styles,
    li: {
      ...style.styles.p,
      pr: 3
    }
  }
};
