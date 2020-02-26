/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import "./projects-listing.css";

type ListingProps = {
  projects: {
    name: string;
    description: string;
    url: string;
    stars?: number;
    tags: string[];
  }[];
};

const ProjectsListing = ({ projects }: ListingProps) => (
  <section sx={{ mb: [3, 4, 5] }}>
    {projects.map(project => (
      <Box mb={4} className="project" key={project.url}>
        <Styled.a
          as={"a"}
          href={project.url}
          sx={{ fontWeight: `semibold`, fontSize: [2, 2, 3], color: `text` }}
        >
          {project.name}
        </Styled.a>
        {project.stars && (
          <div className="project--stars" sx={{ display: ["none", "block"] }}>
            {project.stars} GitHub Stars
          </div>
        )}
        <div
          className="project--description"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>
        <div
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
          {project.stars && (
            <div
              className="project--tag"
              sx={{ display: ["inline-block", "none"], direction: "ltr" }}
            >
              {project.stars} GitHub Stars
            </div>
          )}
        </div>
      </Box>
    ))}
  </section>
);

export default ProjectsListing;
