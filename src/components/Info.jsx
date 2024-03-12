import { FeelsLike } from "../ui/icons/FeelsLike";
import { Humidity } from "../ui/icons/Humidity";
import { Wind } from "../ui/icons/Wind";

export const Info = ({ color, humidity, feelsLike, wind }) => {
  const info = [
    {
      icon: <Humidity color={color} />,
      name: "Humidity",
      value: `${humidity}%`,
    },
    {
      icon: <FeelsLike color={color} />,
      name: "Feels like",
      value: `${feelsLike.toFixed(0) - 273}°C`,
    },
    {
      icon: <Wind color={color} />,
      name: "WindSpeed",
      value: `${wind.toFixed(1)}Km/h`,
    },
  ];

  return (
    <div className="flex items-center justify-between mt-10 gap-4 sm:flex-row flex-wrap">
      {info.map((item, key) => (
        <div key={key} className="flex gap-2 mx-auto">
          <div className="self-center">{item.icon}</div>
          <div>
            <p>{item.value}</p>
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
