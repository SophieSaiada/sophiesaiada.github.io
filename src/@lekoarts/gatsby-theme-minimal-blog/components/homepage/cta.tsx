import React from "react";
import { Link } from "gatsby";
import { Box } from "theme-ui";

export const CTA = ({
  text,
  to,
  gatsbyLink,
  icon
}: {
  text: string;
  to: string;
  gatsbyLink?: boolean;
  icon: React.ReactNode;
}) => (
  <Box
    as={gatsbyLink ? Link : "a"}
    {...(gatsbyLink ? { to } : { href: to })}
    className="rounded-full bg-[#14000d] leading-none shrink-0 no-underline text-tinted-text text-[1.625rem] flex items-center gap-3 py-4 px-6 font-recursive box-glow-xl transition ease-in-out hover:-translate-y-0.5 active:-translate-y-0.5 cursor-pointer hover:text-white-text hover:box-glow-xxl active:text-white-text active:box-glow-xxl no-tap-highlight border border-solid border-[#700a47]"
  >
    {icon}
    {text}
  </Box>
);
