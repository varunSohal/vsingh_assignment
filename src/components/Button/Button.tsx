import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { typeScale } from "../../utils";

const StyledButton = styled.button<ButtonProps>`
  border-radius: 3px;
  display: inline-block;

  border: none;
  font-size: ${typeScale.paragraph};
  border-radius: 1rem;
  min-width: 80px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  transition: background-color 0.3s linear, color 0.3s linear;

  background-color: ${(props) =>
    props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  color: ${(props) =>
    props.primary
      ? props.theme.textColorOnPrimary
      : props.theme.textColorOnSecondary};

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.primaryHoverColor
        : props.theme.secondaryHoverColor};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.primaryColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) =>
      props.primary
        ? props.theme.primaryActiveColor
        : props.theme.secondaryActiveColor};
  }

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }`


const Button:React.FC<ButtonProps> = ({
  // size = "medium",
  disabled = false,
  text,
  onClick,
  ...props
}) =>{
 return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      // size={size}
      {...props}
      aria-disabled={disabled ? true : undefined}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
