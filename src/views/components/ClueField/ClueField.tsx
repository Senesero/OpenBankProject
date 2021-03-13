import React from "react";
import Text from "../Text/Text";
import { ComponentWrapper, InputWrapper, InputRaw } from "./ClueField.styles";

interface Props {
  title: string;
  setInputValue: (value: string) => void;
  placeholder?: string;
  tooltipText?: string;
}

const ClueField: React.FC<Props> = ({
  title,
  setInputValue,
  placeholder,
  tooltipText,
}) => (
  <ComponentWrapper>
    <Text bold tooltipText={tooltipText}>
      {title}
    </Text>
    <InputWrapper>
      <InputRaw
        placeholder={placeholder}
        onChange={(event) => setInputValue(event.target.value)}
        maxLength={255}
      />
    </InputWrapper>
  </ComponentWrapper>
);

export default ClueField;
