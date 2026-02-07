import { supabase } from "@/lib/supaBaseClient";
import PostList from "./PostList";
import { PostProps } from "@/types/post";

export default async function PostFetch({
  searchQuery = "",
}: {
  searchQuery?: string;
}) {
  let query = supabase.from("blog").select("*");
  if (searchQuery) {
    query = query.or(
      `title.ilike.%${searchQuery}%,topic.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`,
    );
  }
  const { data, error } = await query;

  if (error) {
    throw new Error("Failed to fetch blog posts");
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl text-(--text-white) mb-2">
          {searchQuery ? `No results for "${searchQuery}"` : "No posts yet"}
        </h3>
        <p className="text-(--text-gray)">
          {searchQuery ? "Try different keywords" : "Check back later!"}
        </p>
      </div>
    );
  }

  return <PostList posts={data as PostProps[]} />;
}
