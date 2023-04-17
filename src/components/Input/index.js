import { BiSearch } from "react-icons/bi";

import {
  CommonInput,
  InputWrapper,
  IconContainer,
} from "./styles";

export const Input = ({
  icon,
  placeholder,
  setOnChange,
  isValid,
  secure,
  type,
}) => {
  return (
    <InputWrapper>
      {icon && (
        <IconContainer>
          <BiSearch />
        </IconContainer>
      )}
      <CommonInput
        placeholder={placeholder}
        onChange={(event) => {
          setOnChange(event.target.value);
        }}
        secureTextEntry={secure}
        keyboardType={type}
        //placeholderTextColor={COLORS.gray}
        isActive={isValid ? true : false}
        icon={icon ? true : false}
      />
    </InputWrapper>
  );
};
