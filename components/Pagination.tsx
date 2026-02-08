"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* {currentPage > 1 && (
        <Link 
          href={createPageURL(currentPage - 1)}
          className="flex h-10 px-4 items-center justify-center rounded-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200"
        >
          Previous
        </Link>
      )} */}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const isActive = currentPage === page;
        const className = isActive
          ? "flex h-10 w-10 items-center justify-center text-sm font-medium rounded-md bg-blue-600 text-white border-2 border-blue-600 transition-all duration-200"
          : "flex h-10 w-10 items-center justify-center text-sm font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 transition-all duration-200";

        return isActive ? (
          <div key={page} className={className}>
            {page}
          </div>
        ) : (
          <Link key={page} href={createPageURL(page)} className={className}>
            {page}
          </Link>
        );
      })}
      {/* 
      {currentPage < totalPages && (
        <Link 
          href={createPageURL(currentPage + 1)}
          className="flex h-10 px-4 items-center justify-center rounded-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200"
        >
          Next
        </Link>
      )} */}
    </div>
  );
}
