import React, { PropsWithChildren } from "react";

export const SectionTitle = ({ children }: PropsWithChildren) => (
  <h2 className="font-caveat text-[3rem] lg:text-[3.5rem] text-white-text mt-12 lg:mt-16 mb-8 lg:mb-10 tracking-[0.02em] text-center text-glow-xl font-normal">
    {children}
  </h2>
);
