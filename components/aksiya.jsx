import { FaHeart, FaShoppingCart } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Tavar1 from "@/public/images/tavar1.jpeg";
import Tavar2 from "@/public/images/tavar2.jpg";
import Tavar3 from "@/public/images/tavar3.png";
import Tavar4 from "@/public/images/tavar4.jpg";

const products = [
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar1,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar2,
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
    image: Tavar4,
  },
];

const ProductCard = ({ product }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg w-[292px] bg-white relative cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl">
    <div className="relative pt-[25px]">
      <Image
        src={product.image}
        alt={product.name}
        width={242}
        height={194}
        className="w-full object-cover"
      />
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md transition-colors hover:bg-gray-200">
        <FaHeart className="text-red-500" />
      </button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2 w-[216px]">{product.name}</h3>
      <div className="text-red-500 font-bold text-xl">{product.newPrice} uzs</div>
      <div className="text-gray-500 line-through mb-1">{product.oldPrice} uzs</div>
      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600 hover:shadow-lg">
        <FaShoppingCart className="mr-2" /> Корзина
      </button>
    </div>
  </div>
);


const Index = () => {
  return (
    <div className="bg-custom-gray font-Fira-sans min-h-screen mt-[80px] pt-[70px]">
      <div className="container mx-auto p-4">
        <h1 className="text-[32px] text-center lg:text-left lg:text-4xl font-medium leading-normal mb-[42px]">
          Акция
        </h1>
        <div className="flex justify-center">
          <div className="grid lg:mx-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
