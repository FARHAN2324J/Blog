import { supabase } from "@/lib/supaBaseClient";
import { PostProps } from "@/types/post";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface detailProps {
  params: Promise<{ id: string }>;
}

// metadata
export async function generateMetadata({
  params,
}: detailProps): Promise<Metadata> {
  const { id } = await params;

  const { data: post } = await supabase
    .from("blog")
    .select("title, description")
    .eq("id", id)
    .single();

  return {
    title: {
      absolute: post?.title || `Post ${id}`,
    },
    description: post?.description || `Details of post ${id}`,
  };
}

const details = async ({ params }: detailProps) => {
  const { id } = await params;
  const { data: post, error } = await supabase
    .from("blog")
    .select("*")
    .eq("id", id)
    .single<PostProps>();
  if (error || !post) {
    notFound();
  }

  return (
    <div>
      <div className="w-full h-100">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full brightness-65 object-cover"
          width={200}
          height={200}
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="border-y-2 border-r-2 border-(--secondary-color) lg:p-16 md:p-14 p-6">
          <h1 className=" text-(--text-white) text-4xl col-start-1 font-bold tracking-tight">
            {post.title}
          </h1>
          <h2 className="text-(--text-gray) mt-5 text-2xl tracking-tight text-pretty leading-9">
            {post.content}
          </h2>
        </div>
        <div>
          <div className="flex gap-3 items-center justify-center p-8 border-y-2  border-(--secondary-color)">
            <div className="flex items-center gap-0.5 border w-fit border-(--secondary-color) rounded-full px-5.5 py-1.5">
              <svg
                width="34"
                height="34"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6154 22.6532L12.6083 22.6494L12.5838 22.6361C12.5629 22.6248 12.533 22.6084 12.4947 22.587C12.4182 22.5443 12.308 22.4818 12.169 22.4C11.8912 22.2366 11.4976 21.9959 11.0268 21.6829C10.0866 21.0579 8.83048 20.1393 7.57098 18.9652C5.07846 16.6417 2.4375 13.1897 2.4375 8.9375C2.4375 5.76544 5.1064 3.25 8.32812 3.25C10.2227 3.25 11.9192 4.11568 13 5.47256C14.0808 4.11568 15.7773 3.25 17.6719 3.25C20.8936 3.25 23.5625 5.76544 23.5625 8.9375C23.5625 13.1897 20.9215 16.6417 18.429 18.9652C17.1695 20.1393 15.9134 21.0579 14.9732 21.6829C14.5024 21.9959 14.1088 22.2366 13.831 22.4C13.692 22.4818 13.5818 22.5443 13.5053 22.587C13.467 22.6084 13.4371 22.6248 13.4162 22.6361L13.3917 22.6494L13.3846 22.6532L13.3816 22.6548C13.1433 22.7813 12.8567 22.7813 12.6184 22.6548L12.6154 22.6532Z"
                  fill="#FF5500"
                />
              </svg>
              <span className="text-base text-(--text-gray)">2k</span>
            </div>
            <div className="flex items-center gap-0.5 border w-fit border-(--secondary-color) rounded-full px-5.5 py-1.5">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.6048 15.339C30.9669 15.7945 31.1673 16.3864 31.1673 17C31.1673 17.6137 30.9669 18.2055 30.6048 18.6611C28.312 21.4625 23.093 26.9167 17.0007 26.9167C10.9083 26.9167 5.6894 21.4625 3.39658 18.6611C3.03444 18.2055 2.83398 17.6137 2.83398 17C2.83398 16.3864 3.03444 15.7945 3.39658 15.339C5.6894 12.5375 10.9083 7.08333 17.0007 7.08333C23.093 7.08333 28.312 12.5375 30.6048 15.339Z"
                  stroke="#98989A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.0014 21.4072C19.4134 21.4072 21.3687 19.4339 21.3687 16.9998C21.3687 14.5657 19.4134 12.5925 17.0014 12.5925C14.5894 12.5925 12.6341 14.5657 12.6341 16.9998C12.6341 19.4339 14.5894 21.4072 17.0014 21.4072Z"
                  stroke="#98989A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base text-(--text-gray)">2k</span>
            </div>
          </div>
          <div className="border-b-2  border-(--secondary-color) lg:p-20 md:p-16 p-10">
            <div className="flex flex-wrap items-center justify-center gap-16">
              <div className="flex flex-col gap-2">
                <span className="text-(--text-light-gray) text-base sm:text-lg">
                  Publication Date
                </span>
                <p className="text-(--text-white) text-base sm:text-lg">
                  {post.publish_date}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-(--text-light-gray) text-base sm:text-lg">
                  topic
                </span>
                <p className="text-(--text-white) text-base sm:text-lg">
                  {post.topic}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-(--text-light-gray) text-base sm:text-lg">
                  Reading Time
                </span>
                <p className="text-(--text-white) text-base sm:text-lg">
                  {post.read_time} min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default details;
