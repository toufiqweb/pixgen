import DownloadValue from "@/components/ui/DownloadValue";
import { LikeValue } from "@/components/ui/LikeValue";
import { getAllPhotos } from "@/lib/getAllPhotos";
import Image from "next/image";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const photos = await getAllPhotos();
  const photo = photos.find((p) => p.id === Number(id));

  if (!photo) {
    return (
      <div className="max-h[60vh] flex items-center justify-center bg-linear-to-br from-black to-gray-900 text-white">
        <h2 className="text-2xl font-bold text-red-400">Photo not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] max-w-7xl mx-auto space-y-5 bg-linear-to-br from-[#050816] via-[#1f1147] to-[#3b0764] px-4 py-12 rounded-2xl my-10 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* IMAGE SECTION */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={1000}
            height={1000}
            className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* glow overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          {/* floating badge */}
          <div className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
            {photo.category}
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-white space-y-6">
          {/* Title */}
          <h1 className="text-4xl font-extrabold leading-tight bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {photo.title}
          </h1>

          {/* Prompt */}
          <p className="text-gray-300 leading-relaxed">{photo.prompt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {photo.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Stat label="Model" value={photo.model} />
            <Stat label="Resolution" value={photo.resolution} />
            <Stat label="Likes" value={<LikeValue likes={photo.likes} />} />
            <Stat
              label="Downloads"
              value={<DownloadValue downloads={photo.downloads} />}
            />
          </div>

          {/* Button */}
          <button className="mt-6 w-full py-3 rounded-2xl font-semibold text-white bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:scale-[1.02] hover:shadow-purple-500/40 transition-all duration-300">
            Download Image
          </button>

          <p className="text-xs text-gray-400">
            Created at: {new Date(photo.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => {
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 cursor-default">
      <p className="text-xs text-gray-400">{label}</p>

      {/* FIX HERE: use div instead of p */}
      <div className="font-semibold text-sm mt-1">{value}</div>
    </div>
  );
};

export default PhotoDetailsPage;
