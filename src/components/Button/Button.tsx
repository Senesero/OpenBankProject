import React from "react";

import { ButtonRaw } from "./Button.styles";

interface Props {
  label: string;
  onClick: (event: React.ChangeEvent<any>) => void;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  isSubmit?: boolean;
  setShowErrorSnackbar?: (error: string) => void;
}

const Button: React.FC<Props> = ({
  onClick,
  label,
  disabled,
  primary,
  secondary,
  isSubmit,
  setShowErrorSnackbar,
}) => (
  <ButtonRaw
    value={label}
    onClick={(event) => {
      event.preventDefault();

      if (!isSubmit) {
        onClick(event);
      }

      var f = document.getElementsByTagName("form")[0];
      if (f.checkValidity()) {
        onClick(event);
      } else {
        setShowErrorSnackbar &&
          setShowErrorSnackbar("Las contraseñas son requeridas");
      }
    }}
    disabled={disabled}
    primary={primary}
    secondary={secondary}
    type={isSubmit ? "submit" : "normal"}
  />
);

export default Button;
