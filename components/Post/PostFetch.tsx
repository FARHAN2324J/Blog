import { supabase } from "@/lib/supaBaseClient";
import PostList from "./PostList";
import { PostProps } from "@/types/post";

export default async function PostFetch() {
  const { data, error } = await supabase.from("blog").select("*");

  if (error) {
    throw new Error("Failed to fetch blog posts");
  }
  return <PostList posts={data as PostProps[]} />;
}
