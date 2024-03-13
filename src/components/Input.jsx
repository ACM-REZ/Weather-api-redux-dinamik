import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchCity } from "../reducers/weather/actions";
import Select, { components } from "react-select";
import search from "../images/search.svg";
import geoMark from "../images/geoMark.svg";

export const Input = ({ color }) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    dispatch(fetchCity(e.value));
  };

  const Indicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={search} alt="" />
      </components.DropdownIndicator>
    );
  };

  const Styles = {
    container: (styles) => ({ ...styles, width: "100%" }),
    control: (styles) => ({
      ...styles,
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#ffffff",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#ffffff",
    }),
    input: (styles) => ({
      ...styles,
      color: "#ffffff",
    }),
    menuList: (styles) => ({
      ...styles,
      maxHeight: "205px",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      paddingRight: "1rem",
    }),
  };

  const customControl = ({ children, isSelected, ...props }) => {
    return (
      <components.Control {...props}>
        <div
          className={`${color} flex space-between w-full pl-8 py-2  rounded-[20px]`}
        >
          {children}
        </div>
      </components.Control>
    );
  };

  const options = [
    {
      label: "Москва",
      value: "Москва",
    },
    {
      label: "Оренбург",
      value: "Оренбург",
    },
    {
      label: "Астрахань",
      value: "Астрахань",
    },
    {
      label: "Египет",
      value: "Египет",
    },
    {
      label: "США",
      value: "США",
    },
    {
      label: "Япония",
      value: "Япония",
    },
    {
      label: "Канада",
      value: "Канада",
    },
    {
      label: "Дубай",
      value: "Дубай",
    },
  ];

  return (
    <>
      <div className="relative">
        <Select
          styles={Styles}
          ref={inputRef}
          placeholder="Choose your location..."
          options={options}
          onChange={handleInputChange}
          components={{ DropdownIndicator: Indicator, Control: customControl }}
        />
        <div className="absolute top-[14px] left-3">
          <img src={geoMark} alt="#" />
        </div>
      </div>
    </>
  );
};
