"use client";

import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supaBaseClient";
import SearchBar from "./SearchBar";
import PostList from "../PostList";
import { useEffect, useState } from "react";
import { PostProps } from "@/types/post";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      
      let query = supabase.from("blog").select("*");
      
      if (q) {
        query = query.or(`title.ilike.%${q}%,content.ilike.%${q}%`);
      }
      
      query = query.order("created_at", { ascending: false });
      
      const { data, error } = await query;
      
      if (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } else {
        setPosts(data as PostProps[]);
      }
      
      setLoading(false);
    };
    
    fetchPosts();
  }, [q]); // هر بار که q عوض شد، دوباره fetch کن

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchBar initialQuery={q} />
        {q && (
          <p className="mt-2 text-gray-400">
            نتایج جستجو برای: <strong>{q}</strong>
          </p>
        )}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">در حال بارگذاری پست‌ها...</p>
        </div>
      ) : posts && posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">
            {q
              ? "نتیجه‌ای برای جستجوی شما یافت نشد."
              : "هنوز پستی منتشر نشده است."}
          </p>
        </div>
      )}
    </div>
  );
}