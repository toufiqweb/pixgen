import CategoryPage from "@/components/ui/Category";
import PhotoCard from "@/components/ui/PhotoCard";
import { getAllPhotos } from "@/lib/getAllPhotos";
import React from "react";

const AllPhotosPage = async ({ searchParams }) => {
  const photos = await getAllPhotos();

  const { category } = await searchParams;

  const filteredByCategory = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() === category.toLowerCase(),
      )
    : photos;
  console.log(filteredByCategory);

  console.log(photos);
  return (
    <div className="relative mt-20 max-w-7xl mx-auto px-4 space-y-10">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
        <div className="w-72 h-72 bg-pink-500 rounded-full absolute top-10 left-10" />
        <div className="w-72 h-72 bg-purple-500 rounded-full absolute bottom-10 right-10" />
      </div>

      {/* Title Section */}
      <div className="text-center space-y-3">
        <h1 className="
          text-5xl md:text-6xl font-extrabold tracking-tight
          bg-linear-to-r from-pink-500 via-purple-500 to-red-500
          bg-clip-text text-transparent
          drop-shadow-lg
        ">
          All Photos
        </h1>

        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
          Explore a curated collection of stunning AI-generated visuals organized by category.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center flex-nowrap">
        <div className="w-full max-w-4xl">
          <CategoryPage />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="
        grid gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        px-2
      ">
        {filteredByCategory.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
