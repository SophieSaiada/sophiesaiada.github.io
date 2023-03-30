import React from "react";
import { Fragment } from "react";
import { useColorMode } from "theme-ui";

const ColorModeToggle = () => {
  const [_colorMode, setColorMode] = useColorMode<"light" | "dark">();
  setColorMode("light");
  return <Fragment />;
};

export default ColorModeToggle;
