import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import usFlag from "./assets/us.png";
import idFlag from "./assets/id.png";
import { FaWhatsappSquare } from "react-icons/fa";
import Footer from "./component/Footer";
import Select from "./component/Select";
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

const App = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const changeLanguage = (Ing) => {
    i18n.changeLanguage(Ing);
    setLanguage(Ing);
  };
  // console.log("<<< language:", language);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-poppins">
      <nav className="bg-mainColor z-20 fixed w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={logo} alt="" className="w-[80px]" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-navColor rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-mainColor md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-mainColor dark:bg-gray-800 md:dark:bg-mainColor dark:border-gray-700 text-navColor">
              <li className="md:w-36">
                <a href="#" className="hover:text-hoverColor">
                  {t("nav-home")}
                </a>
              </li>
              <li className="md:w-36">
                <a href="#about-us" className="hover:text-hoverColor">
                  {t("nav-about")}
                </a>
              </li>
              <li className="md:w-36">
                <a href="#products" className="hover:text-hoverColor">
                  {t("nav-product")}
                </a>
              </li>
              <li className="md:w-36">
                <button
                  onClick={() => changeLanguage("en")}
                  className="hover:text-hoverColor"
                >
                  <img src={usFlag} alt="" className="w-[24px] mr-[24px]" />
                </button>
                <button
                  onClick={() => changeLanguage("id")}
                  className="hover:text-hoverColor"
                >
                  <img src={idFlag} alt="" className="w-[24px]" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <a href="https://web.whatsapp.com/" target="_blank">
        <FaWhatsappSquare className="fixed top-1/2 right-0 transform -translate-y-1/2 text-6xl transition-transform duration-300 hover:translate-x-0 translate-x-2/3 text-mainColor hover:text-green-500"></FaWhatsappSquare>
      </a>

      <Hero t={t} />
      <AboutUs t={t} />
      <Products t={t} language={language} />
      <Select t={t} />
      <Footer t={t} />
    </div>
  );
};

export default App;
