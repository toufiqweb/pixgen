import { getAllCategory } from "@/lib/getAllCategory";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const CategoryPage = async () => {
  const categories = await getAllCategory();

  return (
    <div className="w-full py-12 px-4">
      {/* Section Header */}
      <div className="mb-10 flex flex-col items-start">
        <h2 className="text-4xl font-bold tracking-tight bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Explore Categories
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Discover stunning AI art collections by category
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {categories.map((c) => (
          <Link key={c.id} href={`?category=${c.name}`} className="group">
            <div
              className="
              relative py-2 rounded-3xl overflow-hidden
              bg-linear-to-br 
              border border-black/10
              backdrop-blur-xl
              transition-all duration-500
              hover:scale-[1.03] hover:-translate-y-1
              hover:border-purple-500/50
              hover:shadow-2xl hover:shadow-purple-500/20
              group-active:scale-95
              px-3  text-xs  bg-white/10 hover:bg-white/20  cursor-pointer 
            "
            >
              {/* Animated Background Gradient */}
              <div
                className="
                absolute inset-0 bg-linear-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              "
              />

              {/* Subtle Shine Effect */}
              <div
                className="
                absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent
                -skew-x-12 -translate-x-full group-hover:translate-x-full
                transition-transform duration-700
              "
              />

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-6 text-center">
                <span
                 className="
                  text-lg font-semibold tracking-wide
                  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300
                  bg-clip-text text-transparent
                  transition-all duration-300
                  group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-red-500
                  group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]
                "
                >
                  {c.name}
                </span>
              </div>

              {/* Bottom Glow Accent */}
              <div
                className="
                absolute bottom-0 left-0 right-0 h-px 
                bg-linear-to-r from-transparent via-purple-400 to-transparent
                scale-x-0 group-hover:scale-x-100 transition-transform duration-500
              "
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
