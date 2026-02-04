import { Suspense } from "react";
import Hero from "../components/Hero";
import PostLoading from "@/components/Post/PostLoading";
import PostFetch from "../components/Post/PostFetch";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<PostLoading />}>
        <PostFetch />
      </Suspense>
    </div>
  );
}
