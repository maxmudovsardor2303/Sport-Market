"use client";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Image from 'next/image';
import Tavar1 from '@/public/images/tavar1.jpeg';
import Tavar2 from '@/public/images/tavar2.jpg';
import Tavar3 from '@/public/images/tavar3.png';
import Tavar4 from '@/public/images/tavar4.jpg';
import Button from '@mui/material/Button';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const CustomSlider = styled(Slider)({
  color: "#FFD700",
  "& .MuiSlider-thumb": {
    borderRadius: "50%",
    backgroundColor: "#FBD029",
    border: "5px solid #1F1D14",
  },
  "& .MuiSlider-track": {
    backgroundColor: "#FFD700",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#BDBDBD",
  },
  "& .MuiSlider-thumb::before": {
    display: "none",
  },
});

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
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Tavar4,
  },
];

const ProductFilter = () => {
  const [priceRange, setPriceRange] = useState([3000, 4000]);
  const [sku, setSku] = useState("");
  const [productCategory, setProductCategory] = useState("All");
  const [isNewProduct, setIsNewProduct] = useState("All");
  const [isOnSale, setIsOnSale] = useState("All");

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleIsNewProductChange = (event) => {
    setIsNewProduct(event.target.value);
  };

  const handleIsOnSaleChange = (event) => {
    setIsOnSale(event.target.value);
  };

  return (
    <div className="flex px-[100px] p-8 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs h-[522px] transform transition-transform hover:scale-105">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Филтрь</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Цена</label>
          <CustomSlider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={100}
            max={4000}
            step={100}
          />
          <div className="flex justify-between text-sm mt-2">
            <span>{priceRange[0]} uzs</span>
            <span>{priceRange[1]} uzs</span>
          </div>
        </div>
        <div className="mb-4">
          <TextField
            label="SKU"
            variant="outlined"
            fullWidth
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Select Category</InputLabel>
            <Select
              value={productCategory}
              onChange={handleProductCategoryChange}
              label="Select Category"
            >
              <MenuItem value="All">Все</MenuItem>
              <MenuItem value="Category1">Category 1</MenuItem>
              <MenuItem value="Category2">Category 2</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-4">
          <FormControl variant="outlined" fullWidth>
            <InputLabel>New Product</InputLabel>
            <Select
              value={isNewProduct}
              onChange={handleIsNewProductChange}
              label="New Product"
            >
              <MenuItem value="All">Все</MenuItem>
              <MenuItem value="Yes">Да</MenuItem>
              <MenuItem value="No">Нет</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-4">
          <FormControl variant="outlined" fullWidth>
            <InputLabel>On Sale</InputLabel>
            <Select
              value={isOnSale}
              onChange={handleIsOnSaleChange}
              label="On Sale"
            >
              <MenuItem value="All">Все</MenuItem>
              <MenuItem value="Yes">Да</MenuItem>
              <MenuItem value="No">Нет</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {products.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg w-[292px] bg-white relative cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="relative pt-[25px]">
              <Image
                src={item.image}
                alt={item.name}
                width={242}
                height={194}
                className="w-full object-cover"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md transition-colors hover:bg-gray-200">
                <FaHeart className="text-red-500" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 w-[216px]">{item.name}</h3>
              <div className="text-red-500 font-bold text-xl">{item.newPrice} uzs</div>
              <div className="text-gray-500 line-through mb-1">{item.oldPrice} uzs</div>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600 hover:shadow-lg">
                <FaShoppingCart className="mr-2" /> Корзина
              </button>
            </div>
          </div>
        ))}
      <button>Показать ещё</button>
      
      </div>
    </div>
  );
};

export default ProductFilter;
