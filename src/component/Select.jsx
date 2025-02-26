import axios from "axios";
import { useState, useEffect } from "react";
const Select = ({ t }) => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [filterCity, setFilterCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const fetchProvince = async () => {
    try {
      const response = await axios.get(
        "https://city-province.vercel.app/province"
      );
      setProvinces(response.data.rajaongkir.results);
    } catch (error) {
      console.log("error fetching data province: ", error);
    }
  };

  const fetchCity = async () => {
    try {
      const response = await axios.get("https://city-province.vercel.app/city");
      setCities(response.data.rajaongkir.results);
    } catch (error) {
      console.log("error fetching data city: ", error);
    }
  };

  useEffect(() => {
    fetchProvince();
    fetchCity();
  }, []);

  const handleProvince = (e) => {
    setSelectedProvince(e.target.value);
    const filtered = cities.filter(
      (city) => city.province_id === e.target.value
    );
    setFilterCity(filtered);
  };

  const handleCity = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <>
      <div className="lg:px-60 py-20">
        <div className="bg-white shadow-sm rounded-lg p-8 flex flex-col gap-4">
          <select
            name="province"
            id="province"
            onChange={handleProvince}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-hoverColor"
          >
            <option value="">{t("selectProv")}</option>
            {provinces.map((p) => (
              <option key={p.province_id} value={p.province_id}>
                {p.province}
              </option>
            ))}
          </select>
          <select
            name="city"
            id="city"
            onChange={handleCity}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-hoverColor"
          >
            <option value="">{t("selectCity")}</option>
            {filterCity.map((c) => (
              <option key={c.city_id} value={c.city_id}>
                {c.city_name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
export default Select;
