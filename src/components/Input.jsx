import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCity } from "../reducers/weather/actions";
import search from "../images/search.svg";
import geoMark from "../images/geoMark.svg";

export const Input = ({ color }) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSet = () => {
    dispatch(fetchCity(inputValue));
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        placeholder="Choose your location..."
        className={`text-white placeholder-white ${color} rounded-[20px] h-[60px] w-full pl-12 mt-0 focus:outline-none text-lg ease-in-out sm:text-lg text-sm`}
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
  );
};
