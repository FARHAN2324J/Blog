import { Suspense } from "react";
import Hero from "@/components/Hero";
import Search from "@/components/ui/Search";
import PostLoading from "@/components/Post/PostLoading";
import PostFetch from "@/components/Post/PostFetch";

export default async function Home(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div>
      <Hero />
      <Search placeholder="Search blog posts..." />
      <Suspense key={query} fallback={<PostLoading />}>
        <PostFetch searchQuery={query} />
      </Suspense>
    </div>
  );
}
