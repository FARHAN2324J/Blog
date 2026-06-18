import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/src/lib/supaBaseClient";

export default async function RecentPosts({ currentPostId }: { currentPostId: string | number }) {
    const { data: recentPosts } = await supabase
        .from("blog")
        .select("id, title, image, publish_date, read_time")
        .neq("id", currentPostId)
        .order("publish_date", { ascending: false })
        .limit(3);

    if (!recentPosts || recentPosts.length === 0) return null;

    return (
        <section className="mt-5 border-t border-(--text-light-gray)/20 pt-8 m-6">
            <h2 className="text-(--text-title) text-2xl font-bold mb-6">
                Latest posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
                {recentPosts.map((post) => (
                    <Link
                        href={`/${post.id}`}
                        key={post.id}
                        className="group block w-full"
                    >
                        <div className="bg-(--bg-card) rounded-3xl overflow-hidden transition-transform duration-300 p-3 h-full hover:scale-103"
                            style={{
                                transitionTimingFunction: "cubic-bezier(0.165, 0.285, 0.22, 2.25)",
                            }}>
                            <div className="relative h-48 w-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover rounded-2xl"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-3 flex flex-col justify-between h-full">
                                <h3 className="text-(--text-title) font-medium line-clamp-2 group-hover:text-(--primary-color) transition-colors text-base md:text-lg">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-3 text-xs text-(--text-light-gray)">
                                    <span>{post.publish_date}</span>
                                    <span>•</span>
                                    <span>{post.read_time} min</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}