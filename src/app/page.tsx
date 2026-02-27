import { Suspense } from "react";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import { fetchBlogPages } from "../components/FetchBlogPages";
import PostFetch from "../components/Post/PostFetch";
import PostLoading from "../components/Post/PostLoading";
import Search from "../components/ui/Search";

export default async function Home(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchBlogPages(query);
  return (
    <div>
      <Hero />
      <Search placeholder="Search posts..." />
      <Suspense key={query + currentPage} fallback={<PostLoading />}>
        <PostFetch searchQuery={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-8 flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
