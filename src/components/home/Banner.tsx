"use client";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import bannerData from "@/lib/bannerData";

const Banner = () => {
  return (
    <div className="bg-custom-background bg-cover bg-center min-h-[calc(100vh-64px)]">
      <div className="w-64 h-64 rounded-full absolute bg-gradient-to-tr from-theme-color-300 -top-32 -left-32"></div>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {bannerData?.map((data) => (
            <SwiperSlide key={data.heading}>
              <div className="flex flex-col md:flex-row-reverse items-center justify-between text-white px-5">
                <div className="flex-1 flex justify-center items-center">
                  <Image
                    src={data.image}
                    alt={data.heading}
                    width={500}
                    height={400}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-7xl font-black">{data.heading}</h2>
                  <p className="mt-5 text-cream">{data.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
