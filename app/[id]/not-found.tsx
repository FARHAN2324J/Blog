"use client";

import { useParams } from "next/navigation";

const Notfound = () => {
  const params = useParams();
  const postId = params.id as string;
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-(--primary-color)">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-(--text-white) sm:text-7xl">
          Page not found
        </h1>
        <p className="my-6 text-lg font-medium text-pretty text-(--text-gray) sm:text-xl/8">
          There is no postal information with ID{" "}
          <span className="text-(--primary-color)">#{postId}</span>
        </p>
      </div>
    </main>
  );
};

export default Notfound;
