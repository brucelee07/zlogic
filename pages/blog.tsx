import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import Card from "../components/post-card";
import Heading from "../components/heading";
import SEOHead from "../components/seohead";

type Post = {
  frontMatter: {
    title: string;
    date: string;
    imgUrl: string;
    summary?: string;
    description?: string;
    tags?: Array<string>;
  };
  slug: string;
};

type Props = {
  posts: Post[];
};

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <SEOHead
        title="BLOG-PYLOGIC"
        description="blogs about AI engineering, IoTs software development, Full-Stack Web Development"
      />
      <Heading title="BLOG" />
      <div className="h-full">
        {posts.map((post, idx) => (
          <div key={idx} className="p-2">
            <Card
              title={post.frontMatter.title}
              date={post.frontMatter.date}
              imgUrl={post.frontMatter.imgUrl}
              summary={post.frontMatter.summary}
              slug={post.slug}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((file) => {
    const markdownwithMeta = fs.readFileSync(path.join("posts", file), "utf-8");
    const { data } = matter(markdownwithMeta);
    return {
      frontMatter: data,
      slug: file.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
