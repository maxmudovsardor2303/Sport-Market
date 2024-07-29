import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa'; // Consider using react-icons for better performance and smaller bundle size

function Footer() {
  return (
    <>
      <div className="w-full h-[24px] bg-[#FBD029]"></div>
      <div className="w-full pt-[73px] pb-[44px] bg-[#1F1D14] border-b border-[rgba(242,242,242,0.3)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
            <div className="flex flex-col items-center lg:items-start gap-5">
              <p className="text-[18px] font-bold text-white">Контакты</p>
              <p className="text-white flex items-center gap-2">
                <i className="bi bi-telephone text-white"></i>+998 (90) 565-85-85
              </p>
              <p className="text-white flex items-center gap-2">
                <i className="bi bi-envelope text-white"></i>info@gmail.com
              </p>
            </div>
            <p className="text-white flex items-center lg:items-start gap-2 text-center lg:text-left">
              <i className="bi bi-geo-alt text-white"></i>
              <span>
                Tashkent Sh. Chilonzor 9 kvartal <br /> 12 uy
              </span>
            </p>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-[18px] font-bold text-white">Подписатся</p>
              <form className="flex flex-col items-center lg:items-start gap-4 pt-4">
                <input
                  type="email"
                  className="w-full sm:w-[235px] py-2 px-4 bg-white rounded-sm outline-none text-[#9A9EA5] placeholder:text-[#9A9EA5]"
                  placeholder="support@figma.com"
                  aria-label="Email Address"
                />
                <button className="w-full sm:w-[235px] py-2 px-4 bg-[#FBD029] rounded-sm text-center">
                  Отправить
                </button>
              </form>
              <div className="flex items-center gap-5 pt-10">
                <FaInstagram className="text-white text-[34px]" />
                <FaFacebook className="text-white text-[34px]" />
                <FaTelegram className="text-white text-[34px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[22px] bg-[#1F1D14] border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[13px] font-light text-white">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <div className="text-[13px] font-light text-white flex flex-col lg:flex-row items-center gap-2 lg:gap-10 text-center lg:text-left">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sales and Refunds</span>
            <span>Legal</span>
            <span>Site Map</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
