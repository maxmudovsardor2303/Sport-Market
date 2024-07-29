import "./globals.css";
import Carousel from "../components/carousel";
import Category from "../components/category/caregory"
import Aksiya from "../components/aksiya"; 
import News from "../components/news"; 
import Products from "../components/product"; 
import Sales from "../components/sales"; 
import Useful from "../components/usefil"; 
import Trenajor from "../components/trenajor"; 
import Sponsor from "../components/sponsor"; 

export default function Home() {
  return (
    <div>
        <Carousel />
        <Category />
        <Aksiya />
        <News />
        <Products />
        <Sales />
        <Useful />
        <Trenajor />
        <Sponsor />
    </div>
  );
}
