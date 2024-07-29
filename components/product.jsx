import { FaHeart, FaShoppingCart } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Tavar5 from "@/public/images/tavar5.svg";
import Tavar3 from "@/public/images/tavar3.png";

const products = [
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar5,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar3,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar3,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar3,
  },
];

const ProductCard = ({ product }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg w-full max-w-[292px] bg-white relative cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl group">
    <div className="relative pt-[25px]">
      <div className="relative w-full h-[194px]">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md transition-colors duration-300 ease-in-out hover:bg-gray-200 group-hover:bg-gray-300">
          <FaHeart className="text-red-500" />
        </button>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <div className="text-red-500 font-bold text-xl">{product.newPrice} uzs</div>
      <div className="text-gray-500 line-through mb-1">{product.oldPrice} uzs</div>
      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-yellow-600">
        <FaShoppingCart className="mr-2" /> Корзина
      </button>
    </div>
  </div>
);

const Index = () => (
  <div className="bg-custom-gray font-Fira-sans min-h-screen">
    <div className="container mx-auto p-4">
      <h1 className="text-[32px] text-center py-10 lg:text-left lg:text-4xl font-medium leading-normal">
        Продукты
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Index;
