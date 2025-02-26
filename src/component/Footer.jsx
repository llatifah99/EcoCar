import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
const Footer = ({ t }) => {
  return (
    <>
      <footer className="bg-mainColor text-navColor w-full h-[200px] sm:px-14 sm:pt-14 min-[400px]:pt-6 min-[400px]:px-6 ">
        <div className="flex sm:justify-between sm:flex-row min-[400px]:flex-col">
          <p className="sm:w-72">{t("add")}</p>
          <div>
            <p>{t("sosmed")}</p>
            <ul className="flex justify-between mt-4 ">
              <li>
                <a href="https://www.tiktok.com/id-ID/" target="_blank">
                  <FaTiktok className="w-7 h-7 hover:text-hoverColor" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FaSquareFacebook className="w-7 h-7 hover:text-hoverColor" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <FiInstagram className="w-7 h-7 hover:text-hoverColor" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
