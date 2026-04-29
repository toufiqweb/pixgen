
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
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#f4f7ff] via-[#eef2ff] to-[#ffffff] rounded-3xl my-10">
        <h2 className="text-2xl font-bold text-red-500">Photo not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] max-w-7xl mx-auto space-y-5 bg-gradient-to-br from-[#f4f7ff] via-[#eef2ff] to-[#ffffff] px-4 py-12 rounded-3xl my-10 flex items-center justify-center relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-300/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-300/20 blur-[120px]" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 relative z-10">
        {/* IMAGE SECTION */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-white/70 backdrop-blur-xl">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={1000}
            height={1000}
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          {/* floating badge */}
          <div className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-white/70 backdrop-blur-md text-gray-700 border border-black/10 shadow-sm">
            {photo.category}
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-gray-900 space-y-6">
          {/* Title */}
          <h1 className="text-4xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {photo.title}
          </h1>

          {/* Prompt */}
          <p className="text-gray-600 leading-relaxed text-base">
            {photo.prompt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {photo.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/70 border border-black/10 backdrop-blur-md hover:bg-pink-50 transition cursor-pointer text-gray-700 shadow-sm"
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
          <button className="mt-6 w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:scale-[1.02] hover:shadow-purple-300/40 transition-all duration-300">
            Download Image
          </button>

          <p className="text-sm text-gray-500">
            Created at: {new Date(photo.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => {
  return (
    <div className="p-4 rounded-2xl bg-white/70 border border-black/5 backdrop-blur-md hover:bg-white hover:scale-[1.03] transition-all duration-300 cursor-default shadow-sm">
      <p className="text-xs text-gray-500">{label}</p>

      <div className="font-semibold text-sm mt-1 text-gray-900">
        {value}
      </div>
    </div>
  );
};




export default PhotoDetailsPage;

