import { supabase } from "@/lib/supaBaseClient";

const ITEMS_PER_PAGE = 2;

export async function fetchBlogPages(query: string = ""): Promise<number> {
  if (query.trim()) {
    return 0;
  }

  try {
    const { count } = await supabase
      .from("blog")
      .select("*", { count: "exact", head: true });

    const totalItems = count || 0;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return totalPages > 0 ? totalPages : 1;
  } catch (error) {
    console.error("Error fetching total page count:", error);
    return 1;
  }
}
