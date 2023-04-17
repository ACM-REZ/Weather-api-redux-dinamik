import axios from "axios";
import { changeCity } from "./reducer";

export const fetchCity = (city) => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54e35a21935f39d6064c07547321781f`);
        dispatch(changeCity(response.data));
    }
}
