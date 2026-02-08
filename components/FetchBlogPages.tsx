import { supabase } from "@/lib/supaBaseClient";

const ITEMS_PER_PAGE = 2;

export async function fetchBlogPages(query: string = ""): Promise<number> {
  let countQuery = supabase
    .from("blog")
    .select("*", { count: "exact", head: true });

  if (query) {
    countQuery = countQuery.or(
      `title.ilike.%${query}%,topic.ilike.%${query}%,description.ilike.%${query}%`,
    );
  }

  const { count, error } = await countQuery;

  if (error) {
    console.error("Error fetching total page count:", error);
    throw new Error("Failed to fetch total page count.");
  }

  const totalItems = count || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return totalPages > 0 ? totalPages : 1;
}
