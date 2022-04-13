import React from "react";

import Input from "../Input";
import { Label } from "./styled";

const InputRegister = ({
  display,
  icon,
  value,
  label,
  onChange,
  placeholder,
  marginRight,
  type
}) => {
  return (
    <>
      <Label className="label" display={display} marginRight={marginRight}>
        {label}
      </Label>
      <Input
        display={display}
        icon={icon}
        value={value}
        type={type || 'text'}
        className="input"
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputRegister;
