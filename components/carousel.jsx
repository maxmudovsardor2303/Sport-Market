"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Krasofka1 from "../public/images/krasofka1.jpg";
import Krasofka2 from "../public/images/krasofka2.jpg";
import Krasofka3 from "../public/images/krasofka3.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: Krasofka1, alt: "Image 1", text: "First Slide" },
    { src: Krasofka2, alt: "Image 2", text: "Second Slide" },
    { src: Krasofka3, alt: "Image 3", text: "Third Slide" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="pb-10">
      <div className="container mx-auto">
        <div className="relative w-full h-[488px] max-w-[900px] rounded-2xl mx-auto overflow-hidden flex items-center justify-center">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                className={`w-full flex-shrink-0 transition-opacity duration-1000 ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
                key={index}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={488}
                    objectFit="cover"
                    className="border-4 border-gray-300"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-md">
                    {image.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700 transition-colors"
            aria-label="Previous Slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <button
            onClick={() => goToSlide((currentIndex + 1) % images.length)}
            className="absolute right-4 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700 transition-colors"
            aria-label="Next Slide"
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

