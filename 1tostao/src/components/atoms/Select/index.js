import React from "react";
import Select from "react-select";
import { WrapperSelect } from "./styled";

const InputSelect = ({
  options,
  display,
  width,
  marginRight,
  marginLeft,
  setValue,
  placeholder,
  onInputChange,
  onChange,
  selectOption,
  marginBottom
}) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 4
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: '3rem',
      width: 180,
      boxShadow: 'none',

      '&:hover': {
        border: '2px solid #24D39A'
      }
    }),
    menuList: (base) => ({
      ...base,
  
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1"
      },
      "::-webkit-scrollbar-thumb": {
        background: "#24D39A"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555"
      }
    })
  }

  return (
    <WrapperSelect
      marginLeft={marginLeft}
      marginRight={marginRight}
      width={width}
      display={display}
      marginBottom={marginBottom}
    >
      <Select
        styles={customStyles}
        selectOption={selectOption}
        width={'200px'}
        onChange={onChange}
        onInputChange={onInputChange}
        placeholder={placeholder}
        setValue={setValue}
        options={options}
      />
    </WrapperSelect>
  );
};

export default InputSelect;
