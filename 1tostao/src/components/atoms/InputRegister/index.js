import React from "react";

import Input from "../Input";
import { Label, WrapperTooltip, ReqPass } from "./styled";

const InputRegister = ({
  display,
  icon,
  value,
  label,
  onChange,
  placeholder,
  marginRight,
  type,
  marginBottom,
  tooltip,
  visible,
  onFocus,
  onBlur,
  charValid,
  especialValid,
  mascValid,
  minValid,
  numValid,
}) => {
  return (
    <>
      <Label className="label" display={display} marginRight={marginRight}>
        {label}
      </Label>
      {tooltip ? (
        <>
          <Input
            onFocus={onFocus}
            onBlur={onBlur}
            marginBottom={marginBottom}
            display={display}
            icon={icon}
            value={value}
            type={type || "text"}
            className="input"
            onChange={onChange}
            placeholder={placeholder}
          />
          <WrapperTooltip visible={visible}>
            <ReqPass valid={charValid || false}>- Mínimo 8 caracteres</ReqPass>
            <ReqPass valid={especialValid || false}>- Um caractere especial</ReqPass>
            <ReqPass valid={mascValid || false}>- uma letra maiuscula</ReqPass>
            <ReqPass valid={minValid || false}>- Uma letra minuscula</ReqPass>
            <ReqPass valid={numValid || false}>- Um número</ReqPass>
          </WrapperTooltip>
        </>
      ) : (
        <Input
          marginBottom={marginBottom}
          display={display}
          icon={icon}
          value={value}
          type={type || "text"}
          className="input"
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default InputRegister;
