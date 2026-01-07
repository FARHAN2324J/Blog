import { PostProps } from "@/types/post";
import Image from "next/image";

interface Props {
  post: PostProps;
}

export default function Post({ post }: Props) {
  const dataBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsUlEQVR4AQClAFr/Au9tVv/vaVL/9ap6//rUm//2zp3/9cyQ//fPhf/xxaX/AgD7/AAA+fsA/ujzAP70+AADB/gABArzAAII8wABDesAAv8FDAAA/wAA/u72APrl+QD48w8A/v0WAAEAEgD+AwYAAvwbPAD9CRcA+PkWAOTmLQDk2iIA8OgeAPn1HwDy8hgAAvwdRAD6K18A7RFVAOTlLgDj1yAA3tAlANrPKQDk5BYAAAAA//8lqs1ZAAAABklEQVQDAMSzT6Owa/PuAAAAAElFTkSuQmCC";
  return (
    <article
      className="bg-(--secondary-color) w-fit flex lg:flex-row flex-col p-5 rounded-[36px] hover:scale-103 transition-transform duration-300 m-auto"
      style={{
        transitionTimingFunction: "cubic-bezier(0.165, 0.285, 0.22, 2.25)",
      }}
    >
      <div className="relative w-[320px] h-45">
        <Image
          src={post.image}
          alt={post.title}
          className="bg-(--primary-color) rounded-3xl object-cover"
          fill
          placeholder="blur"
          blurDataURL={dataBlur}
        />
      </div>
      <div className="lg:ml-5 lg:mt-0 mt-5 ">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex items-center gap-1">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                stroke="#8d8d8d"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#8d8d8d" />
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
            <time dateTime="2025-05-06" className="span">
              {post.publish_date}
            </time>
          </div>
          <span className="text-(--text-gray)">•</span>
          <div className="flex items-center gap-1">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#8d8d8d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6V12"
                stroke="#8d8d8d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.24 16.24L12 12"
                stroke="#8d8d8d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="span">{post.read_time} min</span>
          </div>
        </div>
        <h2 className="H2 my-1">{post.title}</h2>
        <p className="p line-clamp-2 text-pretty">{post.description}</p>
        <span className="topic">#{post.topic}</span>
      </div>
    </article>
  );
}
