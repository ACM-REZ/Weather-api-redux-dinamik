import axios from "axios";
import { changeCity } from "./reducer";

export const fetchCity = (city) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_TOKEN}`
    );
    dispatch(changeCity(response.data));
  };
};
