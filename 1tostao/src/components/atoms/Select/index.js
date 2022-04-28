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
}) => {
  return (
    <WrapperSelect
      marginLeft={marginLeft}
      marginRight={marginRight}
      width={width}
      display={display}
    >
      <Select
        selectOption={selectOption}
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
