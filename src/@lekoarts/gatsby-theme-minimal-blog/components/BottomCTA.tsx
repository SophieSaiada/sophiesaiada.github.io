import React from "react";
import { CTA } from "./homepage/cta";
import { Mail } from "lucide-react";
import { SectionTitle } from "./homepage/SectionTitle";
import TsParticlesAnimation from "../../../components/background";

const BottomCTA = () => (
  <section className="relative mt-16">
    <div className="z-0 absolute inset-0 overflow-hidden">
      <TsParticlesAnimation id="footer-particles" />
    </div>

    <div className="h-1/2 top-0 from-transparent to-background bg-gradient-to-t z-10 w-full absolute left-0" />
    <div className="h-10 bottom-0 hidden lg:block from-transparent to-background bg-gradient-to-b z-10 w-full absolute left-0" />

    <div className="max-w-screen-xl px-4 mx-auto">
      <div className="w-full max-lg:flex-col max-lg:text-center text-left gap-4 max-lg:gap-6 max-lg:px-6 flex items-center justify-between py-16 pb-16 relative z-30">
        <h2 className="font-caveat text-[3rem] text-tinted-text tracking-[0.02em] leading-tight m-0 text-center text-glow-xl">
          Let's code a better world together.
        </h2>
        <CTA
          to="/SophieSaiadaSeniorFullStackDeveloper.pdf"
          icon={<Mail className="size-7" strokeWidth={1.75} />}
          text="Contact Me"
        />
      </div>
    </div>
  </section>
);

export default BottomCTA;
