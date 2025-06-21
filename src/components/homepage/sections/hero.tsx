import React from "react";
import TsParticlesAnimation from "../../background";
import { CTA } from "../cta";
import { FileBadge } from "lucide-react";

export const Hero = () => (
  <div className="h-svh max-h-[65rem] min-h-[35rem] lg:max-h-[45rem] relative mt-[6rem]">
    <div className="z-0 absolute inset-0 overflow-hidden">
      <TsParticlesAnimation id="hero-particles" />
    </div>

    <div className="h-full top-0 from-transparent via-background via-75% to-background bg-gradient-to-t z-10 w-full absolute left-0" />
    <div className="h-10 bottom-0 hidden lg:block from-transparent to-background bg-gradient-to-b z-10 w-full absolute left-0" />

    <div className="absolute px-4 max-w-[70rem] mx-auto inset-0 flex flex-col lg:flex-row items-center gap-6 lg:gap-0 justify-center lg:justify-between w-full">
      <div className="z-20 flex-0 flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-4">
        <h1 className="font-elder-magic m-0 font-normal text-glow-xl text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
          SopHie Saiada
        </h1>
        <h1 className="font-recursive m-0 -mt-2 lg:-mt-2 lg:mb-2 font-normal text-glow-xl text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem]">
          Senior Web Developer
        </h1>
        <p className="font-caveat text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[3rem] text-glow-xl m-0 leading-[2rem] sm:leading-[2.5rem] md:leading-[2.75rem] lg:leading-[4rem] mt-2 lg:mt-0 mb-8">
          Crafting{" "}
          <span className="font-elder-magic text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
            magical
          </span>{" "}
          apps for 6 years
          <br />
          Based in Israel, and overall a nice person
        </p>
        <CTA
          to="/SophieSaiadaSeniorFullStackDeveloper.pdf"
          icon={<FileBadge className="size-7" strokeWidth={1.75} />}
          text="Resume"
        />
      </div>
      <img
        src="/images/main-avatar.png"
        className="w-[12rem] z-20 sm:w-[16rem] md:w-[18rem] lg:w-[22.6875rem] lg:mb-0"
      />
      <div className="shrink basis-[6rem]"></div>
    </div>
  </div>
);
