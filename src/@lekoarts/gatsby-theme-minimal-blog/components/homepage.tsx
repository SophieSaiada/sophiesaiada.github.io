/** @jsx jsx */
import { jsx } from "theme-ui";

export { Head } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";
import { MBHomepageProps } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";
import { Hero } from "./homepage/hero";
import Highlights from "./homepage/Highlights";
import Technologies from "./homepage/Technologies";
import AdditionalValues from "./homepage/AdditionalValues";
import Hobbies from "./homepage/Hobbies";
import BlogPosts from "./homepage/BlogPosts";
import SideProjects from "./homepage/SideProjects";
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
