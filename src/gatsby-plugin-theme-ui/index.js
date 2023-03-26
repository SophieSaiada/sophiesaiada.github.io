import style from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";
import { merge } from "theme-ui";

const secularOne = `'Sora', 'Secular One', sans-serif`;
const assistant = `'Sora', 'Assistant', sans-serif`;
const theme = merge(style, {
  fonts: {
    heading: secularOne,
    body: assistant
  },
  colors: {
    primary: "#9c27b0",
    modes: {
      dark: {
        primary: "#9c27b0"
      }
    }
  },
  styles: {
    li: {
      pr: 3
    }
  },
  text: {
    hero: {
      fontSize: [5, 7, 7],
      fontFamily: "Sora",
      fontWeight: 700,
      letterSpacing: "-0.06em"
    }
  }
});

export default theme;
