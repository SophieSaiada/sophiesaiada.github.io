import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes
} from "react";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import { SectionTitle } from "../section-title";
import { CHIP_CLASS_NAME } from "../chips-section";
import { SHINY_BORDER_CLASS_NAME } from "./highlights";
import {
  Github,
  Linkedin,
  LucideProps,
  Play,
  Presentation
} from "lucide-react";

const PROJECTS: {
  name: string;
  image: string;
  background: string;
  description: ReactNode;
  chips: {
    Icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    name: string;
    url: string;
  }[];
}[] = [
  {
    name: "Gödel",
    image: "godel.gif",
    background:
      "radial-gradient(farthest-corner, hsl(307 66% 26% / 1), transparent), radial-gradient(ellipse at bottom, hsl(0deg 86% 13%), hsl(302.65deg 28% 25%))",
    description: (
      <>
        An interpreted programming language I developed as a final project for
        my bachelor's degree. Written in <strong>Kotlin</strong> and its syntax
        resembles Kotlin's one.
        <br />
        Includes a{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/Context-free_grammar"
        >
          CFG
        </a>
        -parser generator (like Java's Bison) that I wrote from scratch.
      </>
    ),
    chips: [
      {
        Icon: Github,
        name: "Code",
        url: "https://github.com/SophiaSaiada/Godel"
      },
      {
        Icon: Presentation,
        name: "Presentation",
        url: "https://godel-presentation.netlify.app/"
      }
    ]
  },
  {
    name: "Excel Clone",
    image: "excel.gif",
    background:
      "radial-gradient(farthest-corner, hsl(142 66% 22% / 1), transparent), radial-gradient(ellipse at bottom, hsl(174 86% 26% / 1), hsl(121 28% 22% / 1))",
    description: (
      <>
        I became mildly obsessed with figuring out how to handle dependencies
        between cells’ formulas, so I turned it into a full{" "}
        <strong>React</strong> app.
        <br />I wrote a series of LinkedIn posts about the process, explaining
        the front&#8209;end design choices I made, plus one nerdy{" "}
        <strong>CS</strong> post about grammars.
      </>
    ),
    chips: [
      {
        Icon: Github,
        name: "Code",
        url: "https://github.com/SophiaSaiada/react-excel"
      },

      {
        Icon: Play,
        name: "Demo",
        url: "https://excel.sophies.dev/"
      },
      {
        Icon: Linkedin,
        name: "Posts",
        url: "https://www.linkedin.com/posts/sophie-saiada_excel-react-frontend-activity-7154759544793944064-8vMa"
      }
    ]
  },
  {
    name: "vue-conversational-form",
    image: "vue-conversational-form.gif",
    background:
      "radial-gradient(farthest-corner, hsl(263 87% 52% / 1), transparent), radial-gradient(ellipse at bottom, hsl(222 66% 33% / 1), #433d6c)",
    description: (
      <>
        A <strong>Vue.js</strong> component that turns web forms into
        conversations.
        <br />
        It's an implementation of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/space10-community/conversational-form"
        >
          another open-source project
        </a>{" "}
        as a Vue.js Higher&#8209;Order&#8209;Component.
        <br />
        Reached 🌟 48 stars on GitHub. (Popular!&nbsp;💚🩷)
      </>
    ),
    chips: [
      {
        Icon: Github,
        name: "Code",
        url: "https://github.com/SophiaSaiada/vue-conversational-form"
      },

      {
        Icon: Play,
        name: "Demo",
        url: "https://sophies.dev/vue-conversational-form/"
      }
    ]
  }
];

const SideProjects = () => {
  const { basePath } = useMinimalBlogConfig();

  return (
    <section>
      <SectionTitle>Side Projects</SectionTitle>
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 text-left`}>
        {PROJECTS.map(({ image, name, background, description, chips }) => (
          <div
            key={name}
            className={`relative rounded-xl text-white flex flex-col overflow-hidden ${SHINY_BORDER_CLASS_NAME}`}
          >
            {image && (
              <img
                src={`${basePath}project-images/${image}`}
                className="w-full aspect-[3/2] object-cover"
                style={{ minHeight: 180 }}
                alt={name}
              />
            )}
            <div
              className="p-6 flex flex-col gap-2 flex-1"
              style={{ background }}
            >
              <h3 className="font-caveat font-normal mt-0 text-white text-[2.25rem] mb-0 leading-tight">
                {name}
              </h3>

              <div className="text-base font-recursive leading-8 mb-4 mt-1 [&>a]:text-tinted-text [&>a]:no-underline [&>a:hover]:text-white-text [&>a:hover]:underline [&>a:focus]:text-white-text [&>a:focus]:underline">
                {description}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {chips.map(({ Icon, name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${CHIP_CLASS_NAME} bg-black/30 border-black/60 text-white no-underline hover:bg-black/50`}
                  >
                    <Icon
                      className="size-4 -mr-1 drop-shadow-[0_0_3px_rgba(255,255,255,0.6)]"
                      strokeWidth={1.75}
                    />
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideProjects;
