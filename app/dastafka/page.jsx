import React from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import PrintIcon from "@mui/icons-material/Print";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-4">
        <aside className="bg-white p-4 rounded-lg shadow-md w-full lg:w-1/4">
          <ul className="space-y-2">
            <li>
              <a href="#about" className=" hover:text-yellow-600">
                О нас
              </a>
            </li>
            <li>
              <a href="#vacancy" className="text-gray-800 hover:text-gray-900">
                Вакансия
              </a>
            </li>
          </ul>
          <div className="mt-4 p-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold mb-2">Вакансии</h3>
            <p className="text-sm mb-2">
              Мы всегда ищем талантливых и мотивированных людей для присоединения к нашей команде. Если вы хотите развиваться в дружной и профессиональной среде, отправьте нам свое резюме.
            </p>
            <a href="#apply" className=" hover:text-yellow-600">
              Узнать больше
            </a>
          </div>
        </aside>

        <main className="bg-white p-4 sm:p-8 rounded-lg shadow-md w-full lg:w-3/4">
          <h1 className="text-2xl font-bold mb-4  ">7 SPORT MARKET</h1>
          <section>
            <p className="mb-4">
              В составе томатов в большом количестве содержатся сахар, клетчатка, пектины, бета-каротин, витамины B1, B2, B5, B6, B9, C, K, H и PP, а также нужные организму человека.
            </p>
            <p className="mb-4">
              Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
            </p>
            <p className="mb-4">
              В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.
            </p>
            <p className="mb-4">
              Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
            </p>
          </section>
          <div className="flex justify-between items-center mt-8">
            <button className=" hover:text-yellow-600 flex items-center">
              <IosShareIcon className="mr-2" />
              Поделиться
            </button>
            <button className=" hover:text-yellow-600 flex items-center">
              <PrintIcon className="mr-2" />
              Распечатать
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
