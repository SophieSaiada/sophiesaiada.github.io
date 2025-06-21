import React, { PropsWithChildren } from "react";

export const SectionTitle = ({ children }: PropsWithChildren) => (
  <h2 className="font-caveat text-[3rem] text-tinted-text mt-16 mb-10 tracking-[0.02em] text-center text-glow-xl">
    {children}
  </h2>
);
