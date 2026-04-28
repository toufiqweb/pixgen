import { getAllPhotos } from "@/lib/getAllPhotos";
import React from "react";
import PhotoCard from "../ui/PhotoCard";
import { Button } from "@heroui/react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const TopGenerationPhotos = async () => {
  const photos = await getAllPhotos();
  console.log(photos);
  const topPhotos = photos.slice(0, 8);
  return (
    <div className="mt-15 space-y-10">
      <h1 className="text-4xl font-bold text-center">Top Generation Photos</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      <div className="flex items-center justify-center">
       <Link href={"/all-photos"}>
        <Button variant="outline" size="lg">
          <span className="bg-linear-to-r from-pink-500   via-purple-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
            View all photos
          </span>
          <GoArrowUpRight className="text-pink-600" />
        </Button></Link>
      </div>
    </div>
  );
};

export default TopGenerationPhotos;
