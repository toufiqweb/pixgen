"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      image:
        "https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg",
      title: "Turn Ideas into Stunning AI Art",
      description: "Generate high-quality images from simple text prompts.",
    },
    {
      image:
        "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
      title: "Create Professional Visuals Instantly",
      description: "Transform your imagination into beautiful digital artwork.",
    },
    {
      image:
        "https://i.pinimg.com/736x/0d/13/04/0d1304c57c51362962a1e5ff6dd2714a.jpg",
      title: "AI Powered Creative Experience",
      description: "Build unique content faster with next-gen AI technology.",
    },
    {
      image:
        "https://i.pinimg.com/1200x/6e/63/24/6e63247fcaa79110de40461eca504738.jpg",
      title: "Design Without Limits",
      description:
        "Create stunning banners, posters, and social visuals effortlessly.",
    },
  ];

  const handleClick = (e) => {
    if (!swiperRef.current) return;

    const { clientX, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const clickPosition = clientX - rect.left;

    if (clickPosition > rect.width / 2) {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="my-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={900}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="rounded-2xl overflow-hidden shadow-2xl custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={handleClick}
              className="relative h-[55vh] md:h-[65vh] w-full cursor-pointer"
            >
              {/* Background Image */}
              <div
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-center items-center">
                  <div className="max-w-4xl  text-white ">
                    <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-md">
                      AI Generated Creativity
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link href="#">
                        <Button className="bg-linear-to-r from-pink-500 via-purple-500 to-red-500 text-white px-6">
                          Generate Now
                        </Button>
                      </Link>

                      <Link href="/pricing">
                        <Button
                          variant="bordered"
                          className="border-white text-white hover:bg-white hover:text-black transition"
                        >
                          View Pricing
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Click Indicator */}
              <div className="absolute inset-y-0 left-0 w-1/2 z-20" />
              <div className="absolute inset-y-0 right-0 w-1/2 z-20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
