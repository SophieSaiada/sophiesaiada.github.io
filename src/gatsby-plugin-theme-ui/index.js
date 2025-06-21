import style from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";
import { merge } from "theme-ui";

const theme = merge(
  {
    ...style,
    config: {
      initialColorModeName: `dark`
    },
    colors: { ...style.colors, modes: {} }
  },
  {
    fonts: {
      heading: `'Unicorns are Awesome', 'Assistant', sans-serif`,
      body: `'Montserrat', 'Assistant', sans-serif`
    },
    colors: {
      primary: "#9c27b0",
      secondary: "#ffade4",
      background: "#0A0A0A",
      text: "#ffdbf3",
      heading: "#ffade4",
      "plain-backgroundColor": "#1e1019",
      "plain-color": "#f4ddec",
      "keyword-color": "#ffbead",
      "function-color": "#ffadff",
      "operator-color": "#958e8e",
      "punctuation-color": "#958e8e",
      "number-color": "#70c6d2",
      "constant-color": "#70c6d2",
      "comment-color": "#5e5e5a",
      "string-color": "#f68dbb"
    },
    background: "#0A0A0A",
    styles: {
      li: {
        pr: 3
      }
    },
    text: {
      hero: {
        fontSize: [5, 7, 7],
        fontFamily: "Montserrat",
        fontWeight: 700,
        letterSpacing: "-0.06em"
      }
    }
  }
);

export default theme;
