import React from "react";
import Text from "../Text/Text";
import {
  ComponentWrapper,
  InputWrapper,
  InputRaw,
  IconWrapper,
} from "./PasswordField.styles";
import { ReactComponent as EyeIcon } from "../../assets/img/eye.svg";
import { ReactComponent as CrossOutEyeIcon } from "../../assets/img/cross-out-eye.svg";
import { theme } from "../../utils/theme/theme";
import { containCapitalLetters, containNumber } from "../../utils/strings";
import { Line } from "../Line/Line.styles";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  placeholder?: string;
  setInputValue: (value: string) => void;
  error?: string;
}

const PasswordField: React.FC<Props> = ({
  title,
  setInputValue,
  placeholder,
  error,
}) => {
  const { t } = useTranslation();
  const [isShowedPassword, setIsShowedPassword] = React.useState(false);
  const [value, setValue] = React.useState("");

  const getLineColor = (): string => {
    if (value.length === 0) {
      return "";
    }

    if (containCapitalLetters(value) && containNumber(value)) {
      return theme.colors.green;
    } else if (containCapitalLetters(value) || containNumber(value)) {
      return theme.colors.orange;
    }

    return theme.colors.red;
  };

  return (
    <ComponentWrapper>
      <Text bold>{t(title)}</Text>
      <InputWrapper>
        <InputRaw
          placeholder={placeholder && t(placeholder)}
          onChange={(event) => {
            setValue(event.target.value);
            setInputValue(event.target.value);
          }}
          type={isShowedPassword ? "text" : "password"}
          maxLength={24}
          required
          pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
        />
        <IconWrapper onClick={() => setIsShowedPassword(!isShowedPassword)}>
          {isShowedPassword ? <CrossOutEyeIcon /> : <EyeIcon />}
        </IconWrapper>
      </InputWrapper>
      <Line color={getLineColor()} width={50} height={5} padding={1} />
      {error && (
        <Text color={theme.colors.red} bold>
          {error}
        </Text>
      )}
    </ComponentWrapper>
  );
};

export default PasswordField;
