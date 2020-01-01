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
  }
};
