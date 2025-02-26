const Hero = ({ t }) => {
  return (
    <>
      <div id="hero">
        <p className="font-extrabold md:text-5xl min-[400px]:text-2xl">
          {t("hero-title")}
        </p>
        <button
          className="bg-hoverColor min-[400px]:w-36 min-[400px]:h-7 md:w-52 md:h-10 rounded-full text-navColor font-bold"
          onClick={() =>
            document
              .getElementById("products")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {t("hero-start")}
        </button>
      </div>
    </>
  );
};
export default Hero;
