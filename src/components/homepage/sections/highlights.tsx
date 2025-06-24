import React from "react";
import SpotlightCard from "../spotlight-card";
import { SectionTitle } from "../section-title";
import Img, { FluidObject } from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const highlights = [
  {
    imageKey: "graduation",
    title: "Bachelor of Computer Science",
    years: "2015 - 2019",
    duration: null,
    bulletPoints: [
      { emoji: "🍎", text: "During high school" },
      { emoji: "🌟", text: "96.7 average → Dean’s List" },
      { emoji: "🏫", text: "Netanya Academic College" }
    ]
  },
  {
    imageKey: "feezback",
    title: "FeezBack - a Fintech",
    years: "2018 - 2023",
    duration: "4½ years",
    bulletPoints: [
      { emoji: "🪇", text: "From Junior to Señor(ita)" },
      { emoji: "🫡", text: "Right-hand to the CTO" },
      {
        emoji: "👷‍♀️",
        text: "Sole developer for a few months (I'm pretty loyal)"
      },
      { emoji: "💼", text: "Worked with top financial institutions" }
    ],
    quotes: ["Have the to get sh*t done quickly", "Brilliant"]
  },
  {
    imageKey: "rhino",
    title: "Rhino Eco - a Solar Fintech",
    years: "2024 - 2025",
    duration: "1½ years",
    bulletPoints: [
      {
        emoji: "🐥",
        text: "Created the company's main market\xa0differentiator"
      },
      {
        emoji: "🧱",
        text: "Managed integrations with data\xa0sources and financiers"
      },
      { emoji: "🫶", text: "Learned to be a team player" }
    ],
    quotes: ["My best recruitment ever"]
  }
] as const;

export const SHINY_BORDER_CLASS_NAME =
  "after:border after:border-solid after:border-white/5 after:content-[''] after:absolute after:inset-[0] after:rounded-xl after:z-40 after:pointer-events-none";

const Highlights = () => {
  const data = useStaticQuery<
    Record<
      "graduation" | "feezback" | "rhino",
      { childImageSharp: { fluid: FluidObject } }
    >
  >(graphql`
    query {
      graduation: file(relativePath: { eq: "images/graduation.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      feezback: file(relativePath: { eq: "images/feezback.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      rhino: file(relativePath: { eq: "images/rhino.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <section>
      <SectionTitle>The Highlights</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        {highlights.map((h, i) => (
          <SpotlightCard
            key={i}
            className={`relative flex flex-col items-start rounded-xl shadow-lg overflow-hidden px-0 py-0 transition hover:brightness-125 duration-700 ease-in-out ${SHINY_BORDER_CLASS_NAME}`}
            spotlightColor="rgba(255, 80, 255, 0.25)"
          >
            <Img
              fluid={data[h.imageKey].childImageSharp.fluid}
              className="w-full"
              draggable={false}
            />

            <div className="w-full px-5 py-5 flex flex-col text-white-text items-start grow bg-[#610052] bg-center bg-[url('/images/highlight-bg.png')] bg-cover">
              <h3 className="font-caveat m-0 text-[2.25rem] lg:text-[2.25rem] text-white-text leading-[0.9] font-normal">
                {h.title}
              </h3>
              <h4 className="font-caveat m-0 mt-2 text-[1.25rem] text-white-text leading-tight">
                {h.years}
                {h.duration && (
                  <>
                    <span className="font-normal text-[1.125rem] ml-2.5 mr-2.5">
                      {"→"}
                    </span>
                    {h.duration}
                  </>
                )}
              </h4>
              <ul className="font-recursive text-[0.85rem] lg:text-base text-white-text whitespace-pre-line leading-relaxed list-none p-0 pl-1">
                {h.bulletPoints.map(({ emoji, text }) => (
                  <li
                    key={text}
                    className="flex flex-row items-start indent-0 mb-2 last:mb-0"
                  >
                    <span>{emoji}</span>
                    <span className="ml-2 lg:ml-3">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
