"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/Logo.png";
import {
  Mail as MailIcon,
  Search as SearchIcon,
  Layers as LayersIcon,
  Person as PersonIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const routes = [
    { path: '/product', content: 'Продукты' },
    { path: '/', content: 'Контакты' },
    { path: '/', content: 'Оплата и Доставка' },
    { path: '/news', content: 'Новости' },
    { path: '/mac', content: 'О нас' },
  ];

  return (
    <header className="bg-custom-black h-20 font-Fira-sans mb-[140px] sticky top-0 z-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Image src={Logo} alt="Logo" className="w-10 h-10 lg:w-12 lg:h-12" />
          <h1 className="text-lg text-white lg:text-xl">Sport Market</h1>
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            {routes.map((item, index) => (
              <Link key={index} href={item.path}>
                <p className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {item.content}
                </p>
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-4 cursor-pointer">
          <ContactInfo icon={<PhoneIcon style={{ color: "white" }} />} text="+998 (90) 565-85-85" />
          <ContactInfo icon={<MailIcon style={{ color: "white" }} />} text="info@gmail.com" />
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose className="text-white text-2xl" />
            ) : (
              <AiOutlineMenu className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {routes.map((item, index) => (
              <Link key={index} href={item.path}>
                <p className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  {item.content}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="bg-white h-[100px]">
        <div className="container">
          <div className="flex justify-center gap-3 sm:flex sm:flex-row sm:justify-between lg:flex lg:flex-row lg:justify-between items-center">
            <div className="font-Fira-sans pt-[15px] flex items-center gap-[20px] lg:gap-[10px]">
              <CatalogButton />
              <SearchBar />
            </div>
            <ActionButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <p className="text-white text-xs lg:text-sm">{text}</p>
  </div>
);

const CatalogButton = () => (
  <button className="flex items-center gap-[10px] text-white lg:text-[20px] py-3 px-7 sm:text-[14px] sm:py-3 sm:px-7 lg:py-4 lg:px-10 bg-custom-black rounded-md">
    <LayersIcon style={{ color: "white" }} />
    <span className="hidden sm:hidden lg:block">Каталог</span>
  </button>
);

const SearchBar = () => (
  <div className="relative w-36 sm:w-[300px] lg:w-[502px]">
    <input
      className="w-full sm:h-[40px] lg:h-[52px] px-4 py-2 border border-gray-300 rounded focus:outline-none bg-custom-gray"
      placeholder="Поиск"
    />
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5">
      <SearchIcon style={{ color: "black" }} />
    </div>
  </div>
);

const ActionButtons = () => (
  <div className="flex gap-[10px] lg:gap-[20px] items-center justify-center pt-[15px]">
    {[
      { icon: <PersonIcon style={{ color: "black" }} />, text: "" },
      { icon: <FavoriteBorderOutlinedIcon style={{ color: "black" }} />, text: "" },
      { icon: <ShoppingCartOutlinedIcon style={{ color: "black" }} />, text: "Корзина" },
    ].map((button, index) => (
      <button
        key={index}
        className={`bg-custom-gray py-3 px-3 rounded-[3px] ${button.text ? "flex items-center gap-[10px] lg:py-4 lg:px-10" : ""}`}
      >
        {button.icon}
        {button.text && <span className="hidden sm:hidden lg:block">{button.text}</span>}
      </button>
    ))}
  </div>
);

export default Index;
