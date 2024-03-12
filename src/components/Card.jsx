import { Info } from "./Info";
import Sun_img from "../images/Sun.svg";
import Cloud_img from "../images/Cloud.svg";
import Rain_img from "../images/Rain.svg";
import Snow_img from "../images/Snow.svg";
import { Input } from "./Input";
import { MainInfo } from "./MainInfo";

export const Card = ({ weather, main, wind, color }) => {
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
      <Input color={color.background_color} />
      <img src={img} alt="#" className="mt-5 mx-auto ease-in-out"></img>
      <MainInfo
        temp={main.temp.toFixed(0) - 273}
        decription={weather.description}
      />
      <Info
        color={color}
        humidity={main.humidity}
        feelsLike={main.feels_like}
        wind={wind.speed}
      />
    </div>
  );
};
