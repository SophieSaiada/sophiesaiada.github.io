/** @jsx jsx */
import { jsx } from "theme-ui";

export { Head } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";
import { MBHomepageProps } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";
import { Hero } from "../../../components/homepage/sections/hero";
import Highlights from "../../../components/homepage/sections/highlights";
import Technologies from "../../../components/homepage/sections/technologies";
import AdditionalValues from "../../../components/homepage/sections/additional-values";
import Hobbies from "../../../components/homepage/sections/hobbies";
import BlogPosts from "../../../components/homepage/sections/blog-posts";
import SideProjects from "../../../components/homepage/sections/side-projects";
import Layout from "./layout";

const Homepage = (_: MBHomepageProps) => (
  <Layout withoutContainer>
    <Hero />
    <div className="max-w-screen-xl px-4 mx-auto text-tinted-text">
      <Highlights />
      <Technologies />
      <AdditionalValues />
      <Hobbies />
      <SideProjects />
      <BlogPosts />
    </div>
  </Layout>
);

export default Homepage;
