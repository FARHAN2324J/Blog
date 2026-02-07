"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="flex items-center relative max-w-47.5 m-auto">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="absolute left-4 fill-(--text-light-gray) w-4 h-4 pointer-events-none z-1"
      >
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        className="w-full h-11.25 pl-10 pr-3 border-0 rounded-full bg-(--secondary-color) outline-none text-(--text-gray) z-0 placeholder:text-(--text-light-gray) hover:shadow-[0_0_0_2.5px_#2f303d,0px_0px_25px_-15px_#000] shadow-[0_0_0_1.5px_#2b2c37,0_0_25px_-17px_#000] active:scale-95 focus:shadow-[0_0_0_2.5px_#636cef]"
        style={{
          transition: "all 0.25s cubic-bezier(0.165, 0.285, 0.12, 2.25)",
        }}
      />
    </div>
  );
}
