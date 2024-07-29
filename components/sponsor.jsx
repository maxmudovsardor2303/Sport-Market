"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Puma from "@/public/images/puma.png";
import Andr from "@/public/images/andr.png";
import Nike from "@/public/images/nike.png";
import Adidas from "@/public/images/adidas.png";
import Reebok from "@/public/images/reebok.png";

export default function App() {
  const logos = [Puma, Andr, Nike, Adidas, Reebok];

  return (
    <div className="bg-custom-gray pt-10 pb-10">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="card flex items-center max-w-[1240px] w-full h-[200px] bg-white rounded-[12px] shadow-lg">
            <Swiper
              slidesPerView={5}
              centeredSlides={true}
              spaceBetween={20}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2500}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {logos.concat(logos)?.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={`Logo ${index}`}
                    className="w-32 h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
