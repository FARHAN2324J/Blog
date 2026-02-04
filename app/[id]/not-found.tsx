// const NotFound = () => {
//   return (
//     <div className="bg-black text-red-800">NotFound</div>
//   )
// }

// export default NotFound

// "use client";

// import { usePathname } from "next/navigation";

// const Notfound = () => {
//   const pathname = usePathname();
//   const productId = pathname.split("/")[2];
//   const reviewId = pathname.split("/")[4];
//   return (
//     <div className="text-white">
//       review {reviewId} Notfound for {productId}
//     </div>
//   );
// };

// export default Notfound;

// "use client";

// import { useParams } from "next/navigation";

// const Notfound = () => {
//   const params = useParams();

//   // اگر مسیرت مثلاً `/4` باشه، params = { id: "4" }
//   const id = params.id as string; // "4"

//   return <div className="text-white">Page with ID {id} not found</div>;
// };

// export default Notfound;


"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const Notfound = () => {
  const params = useParams();
  const postId = params.id as string; // اینجا "id" همون پارامتر داینامیک مسیرت هست
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--primary-color)">
      <div className="text-center p-8 rounded-2xl bg-(--secondary-color)">
        <h1 className="text-4xl font-bold text-(--text-white) mb-4">
          پست پیدا نشد! 🚫
        </h1>
        <p className="text-(--text-gray) text-lg mb-6">
          متاسفانه پستی با شناسه 
          <span className="text-orange-500 font-mono mx-2">#{postId}</span>
          وجود ندارد.
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            بازگشت به وبلاگ
          </Link>
          <p className="text-(--text-light-gray) text-sm">
            یا یک شناسه معتبر وارد کنید
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;