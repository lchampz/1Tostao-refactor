import React from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { WrapperDatepicker, Button, Label } from "./styled";
import ImgWrapper from "../ImgWrapper";
import Calendar from "../../../assets/icons/calendario.png";
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('ptBR', ptBR);

const Datepicker = ({
  display,
  placeholder,
  onChange,
  selected,
  marginRight,
  label,
  paddingRight,
  isClearable,
  color
}) => {
  const CustomInput = React.forwardRef(({ children, onClick }, ref) => (
    <>
      <Label className="label" display={display} marginRight={marginRight}>
        {label}
      </Label>
      <Button onClick={onClick} ref={ref} paddingRight={paddingRight} color={color}>
        <ImgWrapper
          url={Calendar}
          width="20px"
          height="20px"
          margin={"0px 0px -17px -29px"}
          cursor="initial"
        />
        <p>{children}</p>
      </Button>
    </>
  ));

  return (
    <WrapperDatepicker display={display}>
      <DatePicker
        selected={selected}
        locale={ptBR}
        isClearable={isClearable || true}
        onChange={onChange}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        customInput={
          <CustomInput paddingRight={paddingRight} children={placeholder ? placeholder : ''} color={color}/>
        }
      />
    </WrapperDatepicker>
  );
};

export default Datepicker;
