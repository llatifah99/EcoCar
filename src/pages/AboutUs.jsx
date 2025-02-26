import car from "../assets/ecocar.jpg";
import CardWhy from "../component/CardWhy";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
const AboutUs = ({ t }) => {
  return (
    <>
      <div
        id="about-us"
        className="lg:px-40 sm:px-15 min-[400px]:px-10 pt-28 text-mainColor"
      >
        <h1 className="bold text-4xl text-center">{t("nav-about")}</h1>
        <div className="lg:flex lg:flex-row lg:items-start mt-10 sm:flex-col sm:items-center">
          <img
            src={car}
            alt=""
            className="lg:w-[450px] h-auto rounded-xl mr-16 sm:mb-8"
          />
          <div className="text-lg leading-10 ">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </div>
      </div>
      <div className="pt-28  text-mainColor">
        <h1 className="bold text-4xl text-center mb-12">{t("why")}</h1>
        <div className="flex flex-wrap min-[400px]:flex-col min-[400px]:items-center sm:flex-row sm:justify-between md:flex-row md:justify-between lg:px-40 md:px-10">
          <CardWhy pic={pic1} title={t("R1")} />
          <CardWhy pic={pic2} title={t("R2")} />
          <CardWhy pic={pic3} title={t("R3")} />
        </div>
      </div>
    </>
  );
};
export default AboutUs;
