import PhotoCard from "@/components/ui/PhotoCard";
import { getAllPhotos } from "@/lib/getAllPhotos";
import React from "react";

const AllPhotosPage = async () => {
  const photos = await getAllPhotos();
  console.log(photos);
  return (
    <div className="mt-15 space-y-10">
      <h1 className="text-4xl font-bold text-center">All Photos</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
