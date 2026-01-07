"use client";

import { PostProps } from "@/types/post";
import Post from "./Post";

interface Props {
  posts: PostProps[];
}

export default function PostList({ posts }: Props) {
  return (
    <section className="mt-30 mx-4 grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}