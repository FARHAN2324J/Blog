"use client";

import { PostProps } from "@/types/post";
import Post from "./Post";

interface Props {
  posts: PostProps[];
}

export default function PostList({ posts }: Props) {
  return (
    <section className="my-10 mx-4 flex flex-col gap-6">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}