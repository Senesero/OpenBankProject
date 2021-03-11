import React from "react";
import { ColorsInterface } from "../../../utils/theme/colors";

import { Line, TextWrapper } from "./Text.styles";

interface Props {
  isTitle?: boolean;
  isSubtitle?: boolean;
  inlineColor?: string;
}

const Text: React.FC<Props> = ({
  children,
  isTitle,
  isSubtitle,
  inlineColor,
}) => (
  <>
    <TextWrapper isTitle={isTitle} isSubtitle={isSubtitle}>
      {children}
    </TextWrapper>
    {inlineColor && <Line inlineColor={inlineColor} />}
  </>
);

export default Text;
