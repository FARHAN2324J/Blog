import { supabase } from "@/src/lib/supaBaseClient";
import PostList from "./PostList";
import { PostProps } from "@/src/types/post";

const ITEMS_PER_PAGE = 3;

export default async function PostFetch({
  searchQuery = "",
  currentPage = 1,
}: {
  searchQuery?: string;
  currentPage: number;
}) {
  let query = supabase.from("blog").select("*");

  if (searchQuery.trim()) {
    query = query.or(
      `title.ilike.%${searchQuery}%,topic.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`,
    );
  } else {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE - 1;
    query = query.range(startIndex, endIndex);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase error in PostFetch:", error);
    throw new Error(`Failed to fetch blog posts: ${error.message}`);
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl text-(--text-title) mb-2">
          {searchQuery ? `No results for "${searchQuery}"` : "No posts yet"}
        </h3>
        <p className="text-(--text-body)">
          {searchQuery ? "Try different keywords" : "Check back later!"}
        </p>
      </div>
    );
  }

  return <PostList posts={data as PostProps[]} />;
}
