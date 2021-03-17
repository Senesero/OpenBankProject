import React from "react";

import { ButtonRaw } from "./Button.styles";
import { useTranslation } from "react-i18next";

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
}) => {
  const { t } = useTranslation();
  const text = t(label);
  return (
    <ButtonRaw
      value={text}
      onClick={(event) => {
        event.preventDefault();

        if (!isSubmit) {
          onClick(event);
        }

        var f = document.getElementsByTagName("form")[0];
        if (f.checkValidity()) {
          onClick(event);
        } else {
          setShowErrorSnackbar && setShowErrorSnackbar(t("requiredError"));
        }
      }}
      disabled={disabled}
      primary={primary}
      secondary={secondary}
      type={isSubmit ? "submit" : "normal"}
    />
  );
};

export default Button;
