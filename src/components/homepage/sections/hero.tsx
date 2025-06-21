import React from "react";
import TsParticlesAnimation from "../../background";
import { FileBadge } from "lucide-react";
import CTA from "../../cta";

export const Hero = () => (
  <div className="h-svh min-h-[35rem] lg:max-h-[45rem] relative lg:mt-[6rem]">
    <div className="z-0 absolute inset-0 overflow-hidden">
      <TsParticlesAnimation id="hero-particles" />
    </div>

    <div className="h-full top-0 from-transparent via-background via-75% to-background bg-gradient-to-t z-10 w-full absolute left-0" />
    <div className="h-10 bottom-0 hidden lg:block from-transparent to-background bg-gradient-to-b z-10 w-full absolute left-0" />

    <div className="absolute px-4 max-w-[74rem] mx-auto inset-0 lg:flex max-lg:grid max-lg:grid-rows-[6rem_minmax(1rem,1fr)__max-content_max-content_minmax(3rem,1fr)] lg:flex-row items-center justify-center lg:justify-between w-full">
      <div className="row-start-1" />
      <div className="row-start-2" />

      <div className="row-start-3 mb-8 lg:mb-0 z-20 flex-0 flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-4">
        <h1 className="font-elder-magic m-0 font-normal text-glow-xl text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
          SopHie Saiada
        </h1>
        <h1 className="font-recursive m-0 -mt-2 lg:-mt-2 lg:mb-2 font-normal text-glow-xl text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem]">
          Senior Web Developer
        </h1>
        <p className="font-caveat text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.55rem] xl:text-[3rem] text-glow-xl m-0 leading-[2rem] sm:leading-[2.5rem] md:leading-[2.75rem] lg:leading-[3.5rem] xl:leading-[4rem] mt-2 lg:mt-0 mb-8">
          Crafting magical apps for 6 years
          <br />
          Based in Israel, nice on Slack and in person
        </p>
        <CTA
          to="/SophieSaiadaSeniorFullStackDeveloper.pdf"
          icon={<FileBadge className="size-7" strokeWidth={1.75} />}
          text="Resume"
        />
      </div>

      <img
        src="/images/main-avatar.png"
        className="row-start-4 w-[12rem] z-20 sm:w-[16rem] md:w-[18rem] lg:w-[22.6875rem] lg:mb-0 max-lg:mx-auto"
      />

      <div className="row-start-5" />
    </div>
  </div>
);
