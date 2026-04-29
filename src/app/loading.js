
import React from "react";
import { Card } from "@heroui/react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f7f8ff] via-[#eef2ff] to-[#ffffff] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-[120px]" />

      <Card className="relative z-10 w-full max-w-md rounded-[36px] border border-black/5 bg-white/70 backdrop-blur-2xl shadow-2xl p-10 text-center overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-pink-100/20 via-transparent to-purple-100/20" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Animated Loader */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full border-4 border-purple-200 animate-pulse" />

            <div className="absolute w-20 h-20 rounded-full border-[6px] border-transparent border-t-pink-500 border-r-purple-500 animate-spin" />

            <div className="w-10 h-10 rounded-full bg-linear-to-r from-pink-500 to-purple-500 shadow-lg animate-pulse" />
          </div>

          {/* Text */}
          <h2 className="mt-8 text-2xl md:text-3xl font-bold text-gray-900">
            Loading Content
          </h2>

          <p className="mt-4 text-gray-600 leading-7 max-w-sm">
            Please wait while we prepare your experience. This will only take a moment.
          </p>

          {/* Animated Dots */}
          <div className="mt-6 flex gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-400 animate-bounce" />
            <span
              className="w-3 h-3 rounded-full bg-purple-400 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <span
              className="w-3 h-3 rounded-full bg-indigo-400 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoadingPage;
