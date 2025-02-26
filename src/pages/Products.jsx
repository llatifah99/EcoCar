import CardCar from "../component/CardCar";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ t, language }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://668f9677c0a7969efd987564.mockapi.io/id"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div id="products" className="pt-28 text-mainColor">
        <h1 className="bold text-4xl text-center">{t("product")}</h1>
        <div className="flex flex-wrap sm:flex-row min-[400px]:flex-col min-[400px]:items-center justify-between lg:px-20 md:px-10 mt-10">
          {data.map((post) => (
            <CardCar
              key={post.id}
              carName={post.name}
              price={post.price}
              imgUrl={post.imgUrl}
              description={post.description[`${language}`]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
