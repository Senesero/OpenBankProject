import React from "react";

import { ButtonRaw } from "./Button.styles";

interface Props {
  label: string;
  onClick: (event: React.ChangeEvent<any>) => void;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

const Button: React.FC<Props> = ({
  onClick,
  label,
  disabled,
  primary,
  secondary,
}) => (
  <ButtonRaw
    onClick={onClick}
    disabled={disabled}
    primary={primary}
    secondary={secondary}
  >
    {label}
  </ButtonRaw>
);

export default Button;
