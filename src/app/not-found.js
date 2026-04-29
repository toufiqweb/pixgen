import React from "react";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f7f8ff] via-[#eef2ff] to-[#ffffff] flex items-center justify-center px-4 py-10 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-300/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-300/20 blur-[120px]" />

      <Card className="relative max-w-3xl w-full rounded-[36px] border border-black/5 bg-white/70 backdrop-blur-2xl shadow-2xl overflow-hidden p-8 md:p-12 text-center">
        {/* Decorative Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-pink-100/20 via-transparent to-purple-100/20" />

        <div className="relative z-10">
          {/* 404 Text */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-3xl bg-linear-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg mb-8">
            <Search className="text-white" size={36} />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Oops! Page Not Found
          </h2>

          <p className="mt-5 text-gray-600 leading-8 max-w-xl mx-auto text-base md:text-lg">
            The page you're looking for doesn’t exist or may have been moved.
            Let’s get you back to a safe place.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="rounded-2xl h-12 px-8 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg w-full sm:w-auto">
                <Home size={18} className="mr-2" />
                Go Home
              </Button>
            </Link>

            <Link href="javascript:history.back()">
              <Button
                variant="bordered"
                className="rounded-2xl h-12 px-8 border-gray-300 text-gray-700 hover:bg-gray-100 w-full sm:w-auto"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </Button>
            </Link>
          </div>

          {/* Footer Text */}
          <p className="mt-10 text-sm text-gray-400">
            Error Code: 404 — Resource Not Found
          </p>
        </div>
      </Card>
    </div>
  );
};

export default NotFoundPage;
