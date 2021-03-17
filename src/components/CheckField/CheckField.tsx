import React from "react";
import Text from "../Text/Text";
import { ComponentWrapper } from "./CheckField.styles";
import { theme } from "../../utils/theme/theme";

interface Props {
  title: string;
  onClick: () => void;
  checked: boolean;
}

const CheckField: React.FC<Props> = ({ title, onClick, checked }) => (
  <ComponentWrapper>
    <input type="checkbox" onClick={() => onClick()} checked={checked} />
    <Text color={theme.colors.darkBlue}>{title}</Text>
  </ComponentWrapper>
);

export default CheckField;
