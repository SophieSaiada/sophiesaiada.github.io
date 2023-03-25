import { FluidObject } from "gatsby-image";

type HomepagePostWithBanner = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  description: string;
  timeToRead?: number;
  contentFilePath: string;
  banner: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  tags?: {
    name: string;
    slug: string;
  }[];
};
export default HomepagePostWithBanner;
