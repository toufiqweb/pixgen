import { getAllPhotos } from "@/lib/getAllPhotos";
import React from "react";
import PhotoCard from "../ui/PhotoCard";
import { Button } from "@heroui/react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const TopGenerationPhotos = async () => {
  const photos = await getAllPhotos();
  const topPhotos = photos.slice(0, 8);

  return (
    <div className="mt-20 space-y-12 max-w-7xl mx-auto px-4">

      {/* Title Section */}
      <div className="text-center space-y-3">
        <h1 className="
          text-4xl md:text-5xl font-extrabold tracking-tight
          bg-linear-to-r from-pink-500 via-purple-500 to-red-500
          bg-clip-text text-transparent
          drop-shadow-lg
        ">
          Top Generation Photos
        </h1>

        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          Discover the most popular AI-generated visuals curated from our latest creations.
        </p>
      </div>

      {/* Grid */}
      <div className="
        grid gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      ">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Link href="/all-photos">
          <Button
            variant="outline"
            size="lg"
            className="
              group relative overflow-hidden
              border-purple-500/40
              hover:border-purple-500
              transition-all duration-300
              px-6 py-2
            "
          >
            <span className="
              bg-linear-to-r from-pink-500 via-purple-500 to-red-500
              bg-clip-text text-transparent font-medium
              group-hover:tracking-wide transition-all
            ">
              View all photos
            </span>

            <GoArrowUpRight className="
              ml-2 text-pink-500
              group-hover:translate-x-1 group-hover:-translate-y-1
              transition-transform duration-300
            " />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopGenerationPhotos;