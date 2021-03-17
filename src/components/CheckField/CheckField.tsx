import React from "react";
import Text from "../Text/Text";
import { ComponentWrapper } from "./CheckField.styles";
import { theme } from "../../utils/theme/theme";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  onClick: () => void;
  checked: boolean;
}

const CheckField: React.FC<Props> = ({ title, onClick, checked }) => {
  const { t } = useTranslation();

  return (
    <ComponentWrapper>
      <input
        type="checkbox"
        onClick={() => onClick()}
        checked={checked}
        required
      />
      <Text color={theme.colors.darkBlue}>{t(title)}</Text>
    </ComponentWrapper>
  );
};

export default CheckField;
