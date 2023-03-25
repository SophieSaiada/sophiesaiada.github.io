/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import type { MBPostProps } from "@lekoarts/gatsby-theme-minimal-blog/src/components/post";
import { DiscussionEmbed } from "disqus-react";

const PostFooter = ({ post }: MBPostProps) => (
  <DiscussionEmbed
    shortname="sophiasaiada"
    config={{ identifier: post.slug, title: post.title }}
  />
);

export default PostFooter;
