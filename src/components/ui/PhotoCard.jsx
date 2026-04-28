import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="group relative min-h-[410px] overflow-hidden rounded-3xl border-0 shadow-lg">
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          alt={photo.title}
          src={photo.imageUrl}
          width={1000}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Dark overlay (stronger for readability) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-white drop-shadow">
            {photo.title}
          </h3>

          <p className="text-sm text-gray-300">{photo.resolution}</p>
        </div>

        {/* Stats (Likes + Downloads) */}

        {/* Footer */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-white">{photo.category}</p>
            <div className="flex items-center gap-4 text-sm text-white/90">
              <div className="flex items-center gap-1">
                <FaHeart className="text-pink-700 transition" />
                <span>{photo.likes || 0}</span>
              </div>

              <div className="flex items-center gap-1">
                <FaDownload />
                <span>{photo.downloads || 0}</span>
              </div>
            </div>
          </div>

          <Link href={`/all-photos/${photo.id}`}>
            <Button
              size="sm"
              variant="outline"
              className="
          border-white/30 text-white
          hover:bg-white hover:text-black
          transition-all duration-300
        "
            >
              View details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PhotoCard;
