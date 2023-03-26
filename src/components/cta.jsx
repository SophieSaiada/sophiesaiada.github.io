import React from "react";
import { Link } from "gatsby";
import { Box, Text } from "theme-ui";
import "../style/cta-button.scss";

const CTA = ({ gatsbyLink, text, icon, to }) => (
  <Box
    as={gatsbyLink ? Link : "a"}
    {...(gatsbyLink ? { to } : { href: to })}
    className="cta-button"
    sx={{ fontSize: [1, 2, 2] }}
  >
    <img src={icon} alt="" className="cta-button--icon" />
    <Text as="span">{text}</Text>
  </Box>
);

export default CTA;
