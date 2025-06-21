import React from "react";
import { SectionTitle } from "../section-title";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import Img from "gatsby-image";
import { Link } from "gatsby";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import { CHIP_CLASS_NAME } from "../chips-section";
import { usePosts } from "../../../@lekoarts/gatsby-theme-minimal-blog/components/hooks/usePosts";
import { SHINY_BORDER_CLASS_NAME } from "./highlights";

const POSTS = [
  {
    slug: "/blog/ice-cream-anagrams",
    background:
      "radial-gradient(#a17812, transparent), radial-gradient(at center bottom, #fd19ff, #8f6400)"
  },
  {
    slug: "/blog/church-numbers/en",
    background:
      "radial-gradient(#833101, transparent), radial-gradient(at center bottom, #887d23, #1f1508)"
  },
  {
    slug: "/blog/graphs-and-penguins",
    background:
      "radial-gradient(#253f55, transparent), radial-gradient(at center bottom, #c8cdd9, #041c34)"
  }
];

const BlogPosts = () => {
  const posts = usePosts();
  const { basePath, tagsPath } = useMinimalBlogConfig();

  return (
    <section>
      <SectionTitle>Blog Posts</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        {POSTS.map(({ slug, background }) => ({
          ...posts.find((post) => post.slug === slug)!,
          background
        })).map(({ slug, background, banner, tags, title, date }) => (
          <a
            href={slug}
            key={slug}
            className={`no-underline text-white relative rounded-2xl overflow-hidden px-0 py-0 flex flex-col items-start z-10 flex-1 ${SHINY_BORDER_CLASS_NAME}`}
          >
            <Img
              fluid={banner.childImageSharp.fluid}
              className="w-full aspect-[3/2] object-cover"
              style={{ minHeight: 180 }}
            />

            <div
              className="p-6 flex flex-col gap-2 flex-1 w-full"
              style={{ background }}
            >
              <h3 className="font-caveat font-normal mt-0 text-[2.25rem] mb-2 leading-tight">
                {title}
              </h3>

              <div className="text-base font-recursive mb-2">{date}</div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {(tags ?? []).map((tag) => (
                  <Link
                    key={tag.slug}
                    to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
                    className={`${CHIP_CLASS_NAME} bg-black/30 border-black/60 text-white no-underline hover:bg-black/50`}
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
