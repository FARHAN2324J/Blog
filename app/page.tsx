import { Suspense } from "react";
import Hero from "../components/Hero";
import Post from "../components/Post/PostFetch";
import PostLoading from "@/components/Post/PostLoading";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<PostLoading />}>
        <Post />
      </Suspense>
    </div>
  );
}
