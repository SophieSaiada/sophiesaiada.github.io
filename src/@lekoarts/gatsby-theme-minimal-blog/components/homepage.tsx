/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero";
import Bottom from "@lekoarts/gatsby-theme-minimal-blog/src/texts/bottom";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import GridPosts from "../../../components/grid-posts";
import ProjectsListing from "../../../components/projects-listing";

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath, projects } = useSiteMetadata();

  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <Title text="פוסטים אחרונים">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>לכל הפוסטים</Link>
      </Title>
      <GridPosts posts={posts} showTags={false} limitPostWhenSingleColumn />
      <List>
        <Bottom />
      </List>
      <Title text="פרויקטים">
        <a href="https://github.com/SophiaSaiada">ל-GitHub</a>
      </Title>
      <ProjectsListing projects={projects} />
      <List>
        <Bottom />
      </List>
    </Layout>
  );
};

export default Homepage;
