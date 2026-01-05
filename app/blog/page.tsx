import { supabase } from "@/api/supaBaseClient";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface PageProps {
  id: number;
  title: string;
  image: string;
  blurDataURL?: string;
}

const fetchAndBlur = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch image");

  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { base64 } = await getPlaiceholder(buffer);
  return base64;
};

export default async function BlogPage() {
  const { data, error } = await supabase.from("blog").select("*");
  if (error) throw new Error(error.message);

  const dataWithBlur = await Promise.all(
    (data as PageProps[]).map(async (item) => {
      if (!item.blurDataURL) {
        try {
          const blurDataURL = await fetchAndBlur(item.image);

          await supabase.from("blog").update({ blurDataURL }).eq("id", item.id);

          return { ...item, blurDataURL };
        } catch (err) {
          console.error("Error generating blur for id", item.id, err);
          return { ...item, blurDataURL: "" };
        }
      }
      return item;
    })
  );

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {dataWithBlur.map((d) => (
        <div key={d.id} className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={d.image}
            alt={d.title}
            width={400}
            height={300}
            placeholder="blur"
            blurDataURL={d.blurDataURL}
            className="object-cover w-full h-full"
          />
          <h3 className="p-2 font-bold text-center text-amber-50">{d.title}</h3>
        </div>
      ))}
    </div>
  );
}
