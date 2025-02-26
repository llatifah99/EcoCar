const CardWhy = ({ pic, title }) => {
  return (
    <>
      <div className="w-[180px] h-[180px] rounded-[20px] min-[400px]:m-4 sm:m-0 p-0 flex flex-col justify-center items-center bg-hoverColor">
        <img src={pic} alt="" className="w-[125px]" />
        <p className="text-navColor">{title}</p>
      </div>
    </>
  );
};
export default CardWhy;
