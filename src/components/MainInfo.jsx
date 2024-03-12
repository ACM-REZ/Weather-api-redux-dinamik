export const MainInfo = ({ temp, description }) => {
  return (
    <div>
      <div className="flex mt-3 w-fit mx-auto">
        <h1 className="text-6xl w-fit font-bold pl-5">{temp}</h1>
        <p className="text-xl w-fit font-semibold">°C</p>
      </div>
      <p className="text-xl w-fit mx-auto">{description}</p>
    </div>
  );
};
