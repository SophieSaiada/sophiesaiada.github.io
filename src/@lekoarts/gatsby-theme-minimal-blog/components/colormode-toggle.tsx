import React, { useEffect } from "react";
import { Fragment } from "react";
import { useColorMode } from "theme-ui";

const ColorModeToggle = () => {
  const [_colorMode, setColorMode] = useColorMode<"light" | "dark">();
  useEffect(() => {
    setColorMode("dark");
  }, []);
  return <Fragment />;
};

export default ColorModeToggle;
