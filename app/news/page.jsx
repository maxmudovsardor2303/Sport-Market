import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Imported missing icons
import Image from 'next/image';
import Tavar1 from '@/public/images/tavar1.jpeg';
import Tavar2 from '@/public/images/tavar2.jpg';
import Tavar3 from '@/public/images/tavar3.png';
import Tavar4 from '@/public/images/tavar4.jpg';
import Button from '@mui/material/Button';

const cardsData = [
  {
    title: 'Как правильно выбрать эллиптический тренажер?',
    description: 'Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...',
    date: '27.01.2022',
    views: 250,
  },
  {
    title: 'Кардио тренировки: все, что нужно знать',
    description: 'Кардио тренировки являются важной частью фитнеса и здоровья. Они помогают улучшить сердечно-сосудистую систему и сжигать калории...',
    date: '15.02.2022',
    views: 320,
  },
  {
    title: 'Преимущества утренних тренировок',
    description: 'Утренние тренировки могут помочь вам чувствовать себя бодрее и энергичнее в течение дня. Вот несколько преимуществ утренних тренировок...',
    date: '10.03.2022',
    views: 150,
  },
  {
    title: 'Как выбрать правильную диету для тренировок',
    description: 'Правильная диета играет ключевую роль в эффективности тренировок. В этой статье мы рассмотрим, как выбрать диету, подходящую для ваших целей...',
    date: '20.04.2022',
    views: 200,
  },
  {
    title: 'Преимущества тренировок на свежем воздухе',
    description: 'Тренировки на свежем воздухе могут быть более приятными и полезными для вашего здоровья. Вот несколько причин, почему стоит попробовать...',
    date: '05.05.2022',
    views: 180,
  },
  {
    title: 'Как избежать травм во время тренировок',
    description: 'Избегать травм во время тренировок важно для долгосрочного успеха в фитнесе. В этой статье мы поделимся советами, как тренироваться безопасно...',
    date: '25.06.2022',
    views: 210,
  },
  {
    title: 'Преимущества силовых тренировок для женщин',
    description: 'Силовые тренировки имеют множество преимуществ для женщин, включая улучшение физической формы и укрепление костей. Узнайте больше...',
    date: '10.07.2022',
    views: 170,
  },
  {
    title: 'Как правильно разминаться перед тренировкой',
    description: 'Разминка перед тренировкой помогает подготовить ваше тело и снизить риск травм. Вот несколько советов по правильной разминке...',
    date: '15.08.2022',
    views: 230,
  }
];

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

const Index = () => {
  return (
    <div className="bg-custom-gray font-Fira-sans">
      <div className="container mx-auto px-4">
        <h1 className="text-[24px] sm:text-[32px] text-center py-10 lg:text-left lg:text-4xl font-medium leading-normal">
          Полезное
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cardsData.map((card, index) => (
            <div key={index} className="card w-full h-auto bg-white rounded-[8px] p-6 shadow-lg transition-transform transform hover:scale-105">
              <h1 className="text-[24px] lg:text-[32px] leading-normal font-medium mb-4">
                {card.title}
              </h1>
              <p className="text-[16px] font-normal leading-6 mb-6">
                {card.description}
              </p>
              <div className="flex gap-5">
                <p className="flex items-center"><CalendarTodayIcon className="mr-2" /> {card.date}</p>
                <p className="flex items-center"><RemoveRedEyeOutlinedIcon className="mr-2" /> {card.views}</p>
              </div>
            </div>
          ))}
        </div>
        <Button className='m-8 border-8'>Показать ещё</Button>
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
      </div>
    </div>
    
  );
}

export default Index;
