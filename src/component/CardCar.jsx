const CardCar = ({ carName, price, imgUrl, description }) => {
  return (
    <>
      <div className="w-[350px] h-[250px] bg-mainColor my-4 relative z-10 group shadow-2xl">
        <img
          src={imgUrl}
          alt=""
          className="w-[350px] h-[190px] bg-center bg-cover"
        />
        <div className="w-[350px] h-[190px] bg-white opacity-90 absolute top-0 left-0 z-10 hidden group-hover:block">
          <div className="h-full w-full flex items-center justify-center">
            <p className="p-4 text-mainColor text-center text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-navColor bold text-xl">{carName}</h3>
          <p className="text-navColor lg">{price}</p>
        </div>
      </div>
    </>
  );
};
export default CardCar;
