"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLinks = ({ href, children }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <li>
      <Link
        href={href}
        className={`relative px-2 py-1 transition-all duration-300 ${
          pathname === href
            ? "font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-linear-to-r after:from-pink-500 after:via-purple-500 after:to-red-500"
            : "text-gray-600 hover:text-purple-500"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default MyNavLinks;
