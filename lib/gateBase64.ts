// import { getPlaiceholder } from "plaiceholder";
// const gateBase64 = async (item: string) => {
//   try {
//     const res = await fetch(item);
//     if (!res.ok) {
//       throw new Error("Failed to fetch image");
//     }
//     const buffer = await res.arrayBuffer();
//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));
//     return base64;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default gateBase64;
type ImageResult = {
  id: number;
  src: {
    large: string;
  };
};
type Photo = ImageResult & {
  blurDataURL?: string;
};

import { getPlaiceholder } from "plaiceholder";
async function getBase64(imageUrl: string): Promise<string | undefined> {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status}`);
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    console.error("Error generating blur placeholder:", error);
  }
}

export default async function addBlurredDataUrls(
  images: ImageResults
): Promise<Photo[]> {
  const base64Promises = images.map((photo) => getBase64(photo.src.large));

  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.map((photo, i) => ({
    ...photo,
    blurDataURL: base64Results[i],
  }));

  return photosWithBlur;
}

















// import { getPlaiceholder } from "plaiceholder";
// async function getBase64(imageUrl: string): Promise<string | undefined> {
//   if (!imageUrl) return undefined;
//   try {
//     const res = await fetch(imageUrl);
//     if (!res.ok) {
//       console.warn(
//         `Failed to fetch image: ${imageUrl} - Status: ${res.status}`
//       );
//       return undefined;
//     }
//     const buffer = await res.arrayBuffer();
//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));
//     return base64;
//   } catch (error) {
//     console.error("Error generating blur placeholder:", error);
//     return undefined;
//   }
// }

// export async function addBlurredDataUrls(
//   posts: BlogPostFromDB[]
// ): Promise<BlogPostWithBlur[]> {
//   const base64Promises = posts.map((post) => getBase64(post.cover_image));

//   const base64Results = await Promise.all(base64Promises);

//   const photosWithBlur: BlogPostWithBlur[] = posts.map((post, i) => ({
//     ...post,
//     blurDataURL: base64Results[i],
//   }));

//   return photosWithBlur;
// }
