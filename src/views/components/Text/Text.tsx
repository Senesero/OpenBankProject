import React from "react";
import { Line, TextWrapper, Label } from "./Text.styles";

interface Props {
  isTitle?: boolean;
  isSubtitle?: boolean;
  inlineColor?: string;
  isSamll?: boolean;
}

const Text: React.FC<Props> = ({
  children,
  isTitle,
  isSubtitle,
  inlineColor,
  isSamll,
}) => (
  <TextWrapper>
    <Label isTitle={isTitle} isSubtitle={isSubtitle} isSamll={isSamll}>
      {children}
    </Label>
    {inlineColor && <Line inlineColor={inlineColor} />}
  </TextWrapper>
);

export default Text;
