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
  return <PostList posts={data as PostProps[]} />;
}
