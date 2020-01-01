import style from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";
import { tailwind } from "@theme-ui/presets";

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
    primary: tailwind.colors.pink[6],
    modes: {
      ...style.colors.modes,
      dark: {
        ...style.colors.modes.dark,
        primary: tailwind.colors.pink[6],
      }
    }
  }
};
