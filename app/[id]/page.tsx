import { supabase } from "@/lib/supaBaseClient";
import { PostProps } from "@/types/post";
import Image from "next/image";
import { notFound } from "next/navigation";
// import { Metadata } from "next";

interface detailProps {
  params: Promise<{ id: string }>;
}

// metadata
// export async function generateMetadata({
//   params,
// }: detailProps): Promise<Metadata> {
//   const { id } = await params;

//   const { data: post } = await supabase
//     .from("blog")
//     .select("title, description")
//     .eq("id", id)
//     .single();

//   return {
//     title: {
//       absolute: post?.title || `Post ${id}`,
//     },
//     description: post?.description || `Details of post ${id}`,
//   };

// }

const details = async ({ params }: detailProps) => {
  const { id } = await params;
  const { data: post } = await supabase
    .from("blog")
    .select("*")
    .eq("id", id)
    .single<PostProps>();
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      <header className="relative">
        <figure className="relative w-full min-h-40  md:min-h-50 lg:min-h-65">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover brightness-[0.65]"
            sizes="100vw"
            priority
          />
          <figcaption className="absolute bottom-4 left-4 bg-(--secondary-color)/80 backdrop-blur-sm rounded-lg p-3">
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8d8d8d"
                  strokeWidth="2"
                >
                  <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" />
                  <rect
                    x="6"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill="#8d8d8d"
                  />
                  <rect
                    x="10.5"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill="#8d8d8d"
                  />
                  <rect
                    x="15"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill="#8d8d8d"
                  />
                </svg>
                <time dateTime={post.publish_date} className="span">
                  {post.publish_date}
                </time>
              </div>
              <span className="text-(--text-light-gray)">•</span>
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8d8d8d"
                  strokeWidth="1.5"
                >
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />
                  <path d="M12 6V12" />
                  <path d="M16.24 16.24L12 12" />
                </svg>
                <span className="span">{post.read_time} min</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </header>
      <main>
        <section className="lg:p-16 md:p-14 p-6 ">
          <header>
            <h1 className="text-(--text-title) text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
          </header>
          <div className="">
            <p className="text-(--text-body) text-lg md:text-xl text-balance">
              {post.content}
            </p>
          </div>
        </section>
      </main>
    </article>
  );
};

export default details;
