/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Box, Grid } from "@theme-ui/components";
import "./projects-listing.css";
import useWindowSize from "../hooks/window-size";

export type ListingProps = {
  basePath: string;
  projects: {
    name: string;
    image?: string;
    description: string;
    url: string;
    stars?: number;
    tags: string[];
  }[];
};

const ProjectsListing = ({ basePath, projects }: ListingProps) => {
  const [width, _] = useWindowSize();
  const numberOfColumns = width >= 980 ? 3 : width >= 700 ? 2 : 1;
  const multipleColumns = numberOfColumns > 1;

  return (
    <section sx={{ mb: [3, 4, 5] }}>
      <Grid gap={20} className="post-grid" columns={[numberOfColumns]}>
        {projects.map((project) => (
          <Box mb={4} className="project" key={project.url}>
            {project.image && (
              <img
                src={`${basePath}project-images/${project.image}`}
                className="project-grid--item--image"
                style={{ aspectRatio: 1.5 }}
              />
            )}

            <div className="project-grid--item--content">
              <a
                href={project.url}
                sx={{
                  fontWeight: `semibold`,
                  fontSize: [2, 2, 3],
                  color: `text`,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" }
                }}
              >
                {project.name}
              </a>
              {project.stars && (
                <div
                  className="project--stars"
                  sx={{ display: ["none", "block"] }}
                >
                  {project.stars} GitHub Stars
                </div>
              )}
              <Box
                className="project--description"
                dangerouslySetInnerHTML={{
                  __html: project.description
                    .split("\n")
                    .filter((l) => l.trim())
                    .map((l) => l.trimStart())
                    .join("\n")
                }}
                sx={{
                  a: {
                    color: `primary`,
                    textDecoration: `none`,
                    ":hover": {
                      color: `heading`,
                      textDecoration: `underline`
                    },
                    ":focus": {
                      color: `heading`
                    }
                  }
                }}
              ></Box>
            </div>
            <div
              className="project--tags"
              sx={{
                color: `secondary`,
                mt: 1,
                mb: 0,
                a: { color: `secondary` },
                fontSize: [1, 1, 2]
              }}
            >
              {project.tags && (
                <React.Fragment>
                  {project.tags.map((tag, i) => (
                    <div className="project--tag" key={tag}>
                      {tag}
                    </div>
                  ))}
                </React.Fragment>
              )}
            </div>
          </Box>
        ))}
      </Grid>
    </section>
  );
};

export default ProjectsListing;
