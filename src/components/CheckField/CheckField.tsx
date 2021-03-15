import React from "react";
import Text from "../Text/Text";
import { ComponentWrapper } from "./CheckField.styles";
import { theme } from "../../utils/theme/theme";

interface Props {
  title: string;
  onClick: () => void;
}

const CheckField: React.FC<Props> = ({ title, onClick }) => {
  return (
    <ComponentWrapper>
      <input type="checkbox" onClick={() => onClick()} />
      <Text color={theme.colors.darkBlue}>{title}</Text>
    </ComponentWrapper>
  );
};

export default CheckField;
