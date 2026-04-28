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
    <div className="mt-15  max-w-7xl mx-auto space-y-5">
      <h1 className="text-4xl font-bold text-center">All Photos</h1>

      <CategoryPage />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
        {filteredByCategory.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
