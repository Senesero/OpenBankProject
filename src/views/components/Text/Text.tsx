import React from "react";
import { Line } from "../Line/Line.styles";
import { TextWrapper, LabelWrapper, Label, InfoIcon } from "./Text.styles";

interface Props {
  isTitle?: boolean;
  isSubtitle?: boolean;
  inlineColor?: string;
  isSamll?: boolean;
  bold?: boolean;
  color?: string;
  tooltipText?: string;
}

const Text: React.FC<Props> = ({
  children,
  isTitle,
  isSubtitle,
  inlineColor,
  isSamll,
  bold,
  color,
  tooltipText,
}) => (
  <TextWrapper>
    <LabelWrapper>
      <Label
        isTitle={isTitle}
        isSubtitle={isSubtitle}
        isSamll={isSamll}
        bold={bold}
        color={color}
      >
        {children}
      </Label>
      {tooltipText && <InfoIcon />}
    </LabelWrapper>
    {inlineColor && (
      <Line color={inlineColor} width={50} height={4} margin={5} />
    )}
  </TextWrapper>
);

export default Text;
