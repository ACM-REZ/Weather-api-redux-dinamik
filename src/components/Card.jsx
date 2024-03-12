import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCity } from "../reducers/weather/actions";
import { Info } from "./Info";
import Sun_img from "../images/Sun.svg";
import Cloud_img from "../images/Cloud.svg";
import Rain_img from "../images/Rain.svg";
import Snow_img from "../images/Snow.svg";
import search from "../images/search.svg";
import geoMark from "../images/geoMark.svg";

export const Card = ({ weather, main, wind, color }) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSet = () => {
    dispatch(fetchCity(inputValue));
  };

  let img = "";

  switch (weather.main) {
    case "Clear":
      img = Sun_img;
      break;
    case "Rain":
      img = Rain_img;
      break;
    case "Snow":
      img = Snow_img;
      break;
    case "Clouds":
      img = Cloud_img;
      break;
    default:
      console.log("hello");
  }

  return (
    <div className="w-10/12 mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          placeholder="Choose your location..."
          className={`text-white placeholder-white ${color.background_color} rounded-[20px] h-[60px] w-full pl-12 mt-0 focus:outline-none text-lg ease-in-out sm:text-lg text-sm`}
          onChange={handleInputChange}
          onKeyPress={(e) => (e.key === "Enter" ? handleInputSet() : "")}
        />
        <div className="absolute top-[17px] left-5">
          <img src={geoMark} alt="#" />
        </div>
        <button
          className="absolute top-[20px] right-5 pointer"
          onClick={handleInputSet}
        >
          <img src={search} alt="" />
        </button>
      </div>
      <img src={img} alt="#" className="mt-5 mx-auto ease-in-out"></img>
      <div>
        <div className="flex mt-3 w-fit mx-auto">
          <h1 className="text-6xl w-fit font-bold pl-5">
            {main.temp.toFixed(0) - 273}
          </h1>
          <p className="text-xl w-fit font-semibold">°C</p>
        </div>
        <p className="text-xl w-fit mx-auto">{weather.description}</p>
      </div>
      <Info
        color={color}
        humidity={main.humidity}
        feelsLike={main.feels_like}
        wind={wind.speed}
      />
    </div>
  );
};
