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
    <div className="flex items-center justify-center gap-5 mb-5 bg-(--bg-card) py-2 px-2 rounded-full">
      {currentPage > 1 && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="text-(--text-nav) pl-1"
        >
          Prev
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const isActive = currentPage === page;
        const className = isActive
          ? "flex h-10 w-10 items-center justify-center text-sm font-medium rounded-full bg-(--primary-color) text-white transition-all duration-200"
          : "text-sm font-medium text-(--text-title)";

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
      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="text-(--text-nav) pr-1"
        >
          Next
        </Link>
      )}
    </div>
  );
}
